import { get } from '@/utils/request'

/*
 * @Author: jweboy
 * @Date: 2021-01-29 10:23:39
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-29 10:25:56
 */
export const getUser = () => {
  return get({
    url: '/user'
  })
}