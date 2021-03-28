/*
 * @Author: jweboy
 * @Date: 2021-01-28 22:34:11
 * @LastEditors: jweboy
 * @LastEditTime: 2021-01-28 23:08:23
 */
import numeral from 'numeral';

export const formatDecimalPlaces = (num, digit = 2) => {
  const precision = 10 ** digit;
  if (isNaN(+num)) {
    return num;
  }

  let round = '0.'
  for (let index = 0; index < digit; index++) {
    round += '0';
  }

  const price = numeral(+num / precision).format(round);

  return price;
}

export const formatPriceWithUnit = (num, digit = 2) => {
  const price = formatDecimalPlaces(num, digit);
  return `${price}元`;
}
