import { post, get } from "../utils/request"

/*
 * @Author: jweboy
 * @Date: 2021-01-26 22:34:47
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-30 22:45:38
 */
export const getActivityCurrent = () => {
  return get({
    url: '/activity/current'
  })
}

export const getActivityPunchRank = () => {
  return get({
    url: '/activity/punch/rank'
  })
}