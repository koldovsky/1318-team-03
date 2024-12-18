// First Solution
function makeNegative(num) {
  if (num <= 0) {
    return num;
  }
  return num * -1;
}

//Second Solution
function makeNegative(num) {
  return num > 0 ? -num : num;
}
