/*
 * @Author: jweboy
 * @Date: 2021-01-23 16:30:50
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-29 22:15:43
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

export const asyncCheckSession = () => {
  return new Promise((resolve, reject) => {
    uni.checkSession({
      success: (res) => {
        if (res.errMsg === 'checkSession:ok') {
          resolve()
        }
      },
      error: (err) => reject(err),
    })
  })
}

export const asyncWechatProvider = (options) => {
  return new Promise((resolve, reject) => {
    console.log(options)
    uni.getProvider({
      ...options,
      success: (res) => resolve(res.provider),
      error: (err) => reject(err),
    })
  })
}

export const asyncWechatPayment = (options) => {
  return new Promise((resolve, reject) => {
    uni.requestPayment({
      ...options,
      success: (res) => resolve(res),
      error: (err) => reject(err),
    })
  })
}