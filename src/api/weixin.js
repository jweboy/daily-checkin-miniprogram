/*
 * @Author: jweboy
 * @Date: 2021-01-23 16:30:50
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-26 22:12:19
 */
export const asyncGetLoginCode = () => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (data) => resolve(data),
      error: (err) => reject(err),
    })
  })
}

export const asyncGetUserInfo = () => {
  return new Promise((resolve, reject) => {
    uni.getUserInfo({
      success: (data) => resolve(data),
      error: (err) => reject(err),
    })
  })
}