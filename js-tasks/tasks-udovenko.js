// https://www.codewars.com/kata/grasshopper-messi-goals-function/train/javascript
  function goals(...goalsArray) {
    return goalsArray.reduce((total, goals) => total + goals, 0);
  }  

// https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
  function makeNegative(num) {
    return -Math.abs(num);
  }

// https://www.codewars.com/kata/grasshopper-terminal-game-move-function/train/javascript
  const move = (position, roll) => position + (roll << 1);

// https://www.codewars.com/kata/grasshopper-personalized-message/train/javascript
  const greet = (name, owner) =>
    `Hello ${name === owner ? "boss" : "guest"}`;  

// https://www.codewars.com/kata/keep-hydrated-1/train/javascript
  function litres(time) {
    return ~~(time * 0.5);
  }

// https://www.codewars.com/kata/555086d53eac039a2a000083/train/javascript
  function lovefunc(flower1, flower2) {
    return !!((flower1 + flower2) % 2);
  }