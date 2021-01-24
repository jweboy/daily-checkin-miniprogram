/*
 * @Author: jweboy
 * @Date: 2021-01-17 18:20:11
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-23 17:14:11
 */
import { get, post } from "../utils/request"

export const getUserInfo = () => {
  return get({
    url: '/user',
  });
}

export const postAppletLogin = (data) => {
  return post({
    url: '/applet/login',
    data,
  });
}