// First Solution
function lovefunc(flower1, flower2) {
  if ((flower1 + flower2) % 2 !== 0) return true;
  else return false;
}

//Second Solution
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}