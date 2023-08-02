function divide(a, b) {
  let quotient = (a / b) >> 0
  let remainder = a % b;
  return [quotient, remainder];
}