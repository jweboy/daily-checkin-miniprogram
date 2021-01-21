/*
 * @Author: jweboy
 * @Date: 2021-01-17 18:17:34
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-17 18:18:11
 */
import { AxiosRequestConfig } from 'axios';
import qs from 'qs';

// export interface CustomConfig {
//   contentType: 'json' | 'form' | 'file';
//   customError?: boolean;
// }

// export type RequestConfig = AxiosRequestConfig & Partial<CustomConfig>;

const config = {
  baseURL: 'http://124.70.147.241:8088',
  // baseURL: process.env.API,
  responseType: 'json',
  timeout: 10000, // 10s超时
  withCredentials: false, // 是否允许携带cookie
  transformRequest: [
    function transformRequest(data, headers) {
      if (headers['Content-Type'] === 'application/json') {
        return JSON.stringify(data);
      }
      if (headers['Content-Type'] === 'multipart/form-data') {
        return data;
      }
      return qs.stringify(data);
    },
  ],
};

export default config;
