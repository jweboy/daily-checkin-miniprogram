/*
 * @Author: jweboy
 * @Date: 2021-03-29 22:01:44
 * @LastEditors: jweboy
 * @LastEditTime: 2021-03-29 22:18:42
 */
export const showSuccessMsg = (text) => {
  return uni.showToast({ title: text, icon: "success" });
};

export const showErrorMsg = (text) => {
  return uni.showToast({ title: text, icon: 'error' });
}
