//===================Messi goals function=================================
//Task: https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript

// First Solution
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

//Second Solution
const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//===================Return Negative=================================
//Task: https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript

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

//===========Terminal game move function=========================================
//Task: https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript

function move(position, roll) {
  return position + roll * 2;
}

//===================Personalized Message=================================
//Task: https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript

// First Solution
function greet(name, owner) {
  if (name === owner) return "Hello boss";
  return "Hello guest";
}

//Second Solution
function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//================Keep Hydrated!====================================
//Task: https://www.codewars.com/kata/keep-hydrated-1/train/javascript

function litres(time) {
  return Math.floor(time / 2);
}

//==================Opposites Attract==========================================
//Task: https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript

// First Solution
function lovefunc(flower1, flower2) {
  if ((flower1 + flower2) % 2 !== 0) return true;
  else return false;
}

//Second Solution
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}
