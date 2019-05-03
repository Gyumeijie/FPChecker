#!/usr/bin/env node

const MAX_PRECISION = 100;

String.prototype.reverse = function reverse () {
  return this.split('')
    .reverse()
    .join('');
};

String.prototype.trimLeadingZeros = function trimLeadingZeros () {
  let str = this;
  let i = 0;

  // If the string `str` starts with `.`, then prepend a `0`.
  if (str[0] === '.') str = '0'.concat(str);

  for (; i < str.length; i++) {
    if (str[i] !== '0') break;
  }
  // eslint-disable-next-line no-plusplus
  if (str[i] === '.') i--;

  return str.substr(i);
};

String.prototype.trimTrailingZeros = function trimTrailingZeros () {
  let str = this;

  str = str.reverse().trimLeadingZeros();
  if (str.startsWith('0.')) str = str.substr(2);

  return str.reverse();
};

// Formalize the string by trimming the leading and trailing zeros if exists.
function trimInvalidZeros (str) {
  let _str = str.trimLeadingZeros();
  if (_str.indexOf('.') !== -1) _str = _str.trimTrailingZeros();

  return _str;
}

function castStringToNumber (str) {
  const num = Number(str);

  if (Number.isNaN(num)) {
    throw new Error('Can\'t convert to number');
  }

  if (Number.isInteger(num)) {
    console.log('Float number is expected');
    process.exit();
  }

  return num;
}

function determinePadLength (str) {
  // Formalize the string first.
  trimInvalidZeros(str);

  // Determine the number of valid digit.
  const precision = str.startsWith('0.') ? str.length - 2 : str.length - 1;

  return MAX_PRECISION - precision + str.length;
}

function checker () {
  const args = process.argv;
  const str = args[2];
  // The num is guaranteend to be a float number.
  const num = castStringToNumber(str);

  const strNum1 = num.toPrecision(MAX_PRECISION).toString();
  const strNum2 = str.padEnd(determinePadLength(str), '0');

  console.log('The actual number is: ', strNum1.trimTrailingZeros());

  return strNum1 === strNum2;
}

console.log(checker());
