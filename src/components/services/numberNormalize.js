import numeral from 'numeral';
export function numberFormatted(number) {
  return numeral(number).format('0,0');
}
