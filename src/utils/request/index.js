/*
 * @Author: jweboy
 * @Date: 2021-01-17 18:18:39
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-17 18:19:48
 */
/*
 * @Author: jweboy
 * @Date: 2020-02-06 11:00:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-11-24 14:02:02
 */
import axios, { AxiosResponse, AxiosError } from 'axios';
import { SspResponse } from '@/typings/common/response';
import {
  SUCCESS_CODE,
  INVALID_TOKEN_CODE,
  INVALID_SERVER_ERROR_CODE,
  NO_TOKEN_CODE,
  SYSTEM_SUCCESS_CODE,
  REQUEST_NOT_FOUND,
  REQUEST_SERVER_ERROR,
  LOGIN_EXPIRED,
  NOT_LOGGED_IN,
} from '@/contants/locale';
import config, { RequestConfig, CustomConfig } from './config';
import storage from '../storage';
import { getQueryString, history } from '../global';
import { hashGenerator, isEmptyValue } from '..';

// 创建请求实例
const instance = axios.create(config);

const getContentType = (type) => {
  switch (type) {
    case 'json':
      return 'application/json';
    case 'form':
      return 'application/x-www-form-urlencoded';
    case 'file':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

// 请求拦截器
instance.interceptors.request.use(
  function request(config) {
    // 获取最新的 user 数据
    const user = storage.getItem('user');

    // 请求 token，如果query中带有 sessionId 就用 query 的，否则就用本地的
    config.headers.token = sessionId || user?.token;
    config.headers['Content-Type'] = getContentType(config.contentType);

    return config;
  },
  function response(err) {
    return Promise.reject(err);
  },
);

// 响应拦截器
instance.interceptors.response.use(
  async function request(res) {
    console.log(res);
    const { code, msg, success, type } = res.data;
    const { responseType } = res.config;
    const { UPS_URL } = process.env;

    // success
    if (code === SUCCESS_CODE) {
      return res.data;
    }
  },
  function respHander(err) {
    const { status } = err.response || {};
    console.log('err =>', err.response);

    let msg = '';
    const isTimeout = err.code === 'ECONNABORTED';
    if (err.message === 'Network Error') {
      msg = '网络错误，请稍候重试';
    } else if (isTimeout) {
      msg = '请求超时，请稍候重试';
    } else if (status === REQUEST_SERVER_ERROR) {
      msg = '服务器错误';
    } else if (status === REQUEST_NOT_FOUND) {
      msg = '请求地址不存在';
    } else {
      msg = err.message;
    }
    // message.error(msg);
    throw Error(msg);
    // return Promise.reject(Error(msg));
  },
);

// get 请求函数
export const get = <T, R = SspResponse<T>>(config: RequestConfig) => {
  const { method, contentType = 'json', ...restProps } = config;

  return instance
    .request<T, R>({ ...restProps, contentType, method: 'GET' } as RequestConfig)
    .catch(err => {
      // console.warn('err=>', err);
      // 统一抛出错误信息
      message.error(err.message);

      // pending 状态可以中止原 Promise 执行链
      return new Promise(() => {});
    });
};

// post 请求函数
export const post = async <T, R = SspResponse<T>>(config: RequestConfig) => {
  const { method, contentType = 'form', customError, ...restProps } = config;

  return instance
    .request<T, R>({ ...restProps, contentType, method: 'POST' } as RequestConfig)
    .catch((err: Error) => {
      // 如果不存在自定义错误提示就通用处理，否则就放行错误自行处理
      if (!customError) {
        // 统一抛出错误信息
        message.error(err.message);
        // pending 状态可以中止原 Promise 执行链
        return new Promise(() => {});
      }

      return Promise.reject(err);
    });
};
