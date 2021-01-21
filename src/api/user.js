/*
 * @Author: jweboy
 * @Date: 2021-01-17 18:20:11
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-17 18:23:10
 */
import { get } from "../utils/request"

export const getUserInfo = () => {
  return get({
    url: '/user',
  });
}