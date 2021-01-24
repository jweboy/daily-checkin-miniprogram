/*
 * @Author: jweboy
 * @Date: 2021-01-23 16:30:50
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-23 17:36:37
 */
export const asyncGetLoginCode = () => {
  return new Promise((resolve, reject) => {
    uni.login({
      provider: 'weixin',
      success: (data) => {
        console.log(data)
        resolve(data)
      },
      error: (err) => {
        console.log(err)
        reject(err)
      },
    })
  })
}

export const asyncGetUserInfo = () => {
  return new Promise((resolve, reject) => {
    uni.getUserInfo({
      success: (data) => {
        console.log(data)
        resolve(data)
      },
      error: (err) => {
        console.log(err)
        reject(err)
      },
    })
  })
}