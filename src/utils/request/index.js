import { REQUEST_BASE_URL } from "../../constants";

/*
 * @Author: jweboy
 * @Date: 2021-01-22 00:53:32
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-28 22:52:22
 */

export const get = (config) => {
  const { url, ...restProps } = config;
  const { userToken } = uni.getStorageSync('token');

  return new Promise((resolve, reject) => {
    uni.request({
      ...restProps,
      url: `${REQUEST_BASE_URL}${url}`,
      method: 'GET',
      header: {
        ...(userToken && { Authorization: userToken }),
      },
      success: (resp) => {
        const { data, code } = resp.data;
        if (code === 1) {
          resolve(data);
        }
      },
      fail: (err) => {
        reject(err);
      },
    })
  })
}

export const post = (config) => {
  const { url, ...restProps } = config;
  const { userToken } = uni.getStorageSync('token');

  return new Promise((resolve, reject) => {
    uni.request({
      ...restProps,
      url: `${REQUEST_BASE_URL}${url}`,
      header: {
        ...(userToken && { Authorization: userToken }),
      },
      method: 'POST',
      success: (resp) => {
        const { data, code } = resp.data;
        if (code === 1) {
          resolve(data);
        }

        resolve(resp.data);
      },
      fail: (err) => {
        console.log(err);
        reject(err);
      },
    });
  })
}