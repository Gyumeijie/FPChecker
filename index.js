const MAX_PRECISION = 100;

String.prototype.reverse = function reverse() {
  return this.split('').reverse().join('')
}

String.prototype.trimLeadingZeros = function trimLeadingZeros() {
  let str = this;

  // If the string `str` starts with `.`, then prepend a `0`.
  if (str[0] === '.') str="0".concat(str); 
  for (i=0; i<str.length; i++) {
    if (str[i] !== '0') break;
  }
  if (str[i] === '.') i--; 

  return str.substr(i);
}

String.prototype.trimTrailingZeros = function trimTrailingZeros() {
  let str = this;

  str = str.reverse().trimLeadingZeros();
  if (str.startsWith("0.")) str = str.substr(2);

  return str.reverse();
}

// Formalize the string by trimming the leading and trailing zeros if exists.
function trimInvalidZeros(str) {
  str = str.trimLeadingZeros();
  if (str.indexOf('.') !== -1) str = str.trimTrailingZeros();

  return str; 
}

function castStringToNumber(str) {
  const num = Number(str);

  if (Number.isNaN(num)) {
    throw new Error("Can't convert to number");
  }

  if (Number.isInteger(num)) {
    console.log("Float number is expected");
    process.exit();
  }

  return num;
}

function determinePadLength(str, num) {
  // Formalize the string first.
  trimInvalidZeros(str);

  // Determine the number of valid digit.
  let precision = (str.startsWith("0.")) ? str.length-2 : str.length-1;
  
  return (MAX_PRECISION-precision) + str.length;
}

function checker() {
  const args = process.argv;
  const str = args[2];
  // The num is guaranteend to be a float number.
  const num = castStringToNumber(str);

  const strNum1 = num.toPrecision(MAX_PRECISION).toString();
  const strNum2 = str.padEnd(determinePadLength(str), '0');

  console.log("The actual number is: ", strNum1.trimTrailingZeros());

  return strNum1 === strNum2;
}

console.log(checker());