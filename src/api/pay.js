/*
 * @Author: jweboy
 * @Date: 2021-03-28 13:23:53
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-28 20:36:48
 */
import { get, post } from "../utils/request"

export const postPay = () => {
  return post({
    url: '/pay'
  })
}