//=============================Convert a string to an array============
//https://www.codewars.com/kata/convert-a-string-to-an-array/train/javascript

const stringToArray = (string) => string.split(" ");

//============================DNA to RNA Conversion=======================
//https://www.codewars.com/kata/dna-to-rna-conversion/train/javascript

const DNAtoRNA = (dna) => dna.replaceAll("T", "U");
//const DNAtoRNA = (dna) => dna.replace(/T/g, "U");

//=======Find Maximum and Minimum Values of a List=======================
//https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript

const minItem = (numbers) => Math.min(...numbers);
const maxItem = (numbers) => Math.max(...numbers);

//======================Smallest value of an array=======================
//https://www.codewars.com/kata/544a54fd18b8e06d240005c0/train/javascript

const smValorIndex = (arr, toReturn) =>
  toReturn === "value" ? Math.min(...arr) : arr.indexOf(Math.min(...arr));

//======================Double the integer=======================
//https://www.codewars.com/kata/53ee5429ba190077850011d4/

const doubleInteger = (intNumber) => intNumber * 2;

//=======================Twice as old=======================
//https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript

const twiceAsOld = (dadYearsOld, sonYearsOld) =>
  Math.abs(dadYearsOld - 2 * sonYearsOld);

//==================Return the Nth Even Number========================
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

const nthEven = (inputNumber) => (inputNumber - 1) * 2;

//==================What's the real floor?========================
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript

const getRealFloor = (n) => (n > 0 ? (n >= 13 ? n - 2 : n - 1) : n);

//==================Clock==========================================
//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

const past = (hours, minutes, seconds) => (hours * 3600 + minutes * 60 + seconds) * 1000;

//==================Is n divisible by x and y?===========================
//https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

const isDivisible = (n, x, y) => n % x === 0 && n % y === 0;