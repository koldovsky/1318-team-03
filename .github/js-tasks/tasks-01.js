//===================Messi goals function=================================
/*Messi is a soccer player with goals in three leagues:
LaLiga
Copa del Rey
Champions

Complete the function to return his total number of goals in all three leagues.
Note: the input will always be valid. */

function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}

const goals = (laLigaGoals, copaDelReyGoals, championsLeagueGoals) =>
  laLigaGoals + copaDelReyGoals + championsLeagueGoals;

//===================Return Negative=================================
/* In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
Notes:
 - The number can be negative already, in which case no change is required.
 - Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.
*/
//Task: Return Negative
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
/*In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
 */
//Task: Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

function move(position, roll) {
  return position + roll * 2;
}

//===================Personalized Message=================================
/* Create a function that gives a personalized greeting. 
This function takes two parameters: name and owner.
Use conditionals to return the proper message:
case	             return
name equals owner	'Hello boss'
otherwise	        'Hello guest'
*/
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
/*Nathan loves cycling.
Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.
You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

For example:
time = 3 ----> litres = 1
time = 6.7---> litres = 3
time = 11.8--> litres = 5 */

function litres(time) {
  return Math.floor(time / 2);
}

//==================Opposites Attract==================================
/*
Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. 
If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.
*/
//Task: Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// First Solution
function lovefunc(flower1, flower2) {
  if ((flower1 + flower2) % 2 !== 0) return true;
  else return false;
}

//Second Solution
function lovefunc(flower1, flower2) {
  return (flower1 + flower2) % 2 !== 0;
}
