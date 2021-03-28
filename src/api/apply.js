import { get, post } from "../utils/request"

/*
 * @Author: jweboy
 * @Date: 2021-01-26 22:20:13
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-30 21:55:59
 */
export const getApply = (data) => {
  return get({
    url: '/apply',
    data,
  })
}

export const getApplyCheck = () => {
  return get({
    url: '/apply/check',
  })
}

export const getApplyStatus = () => {
  return get({
    url: '/apply/status'
  })
}