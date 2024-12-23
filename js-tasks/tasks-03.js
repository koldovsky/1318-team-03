//============Geometry Basics: Circle Circumference in 2D================
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript

const circleCircumference = (circle) => 2 * Math.PI * circle.radius;

//====Training JS #12: loop statement --for..in and for..of==============
//https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

function giveMeFive(obj) {
  const fives = [];
  for (const key in obj) {
    if (key.length === 5) fives.push(key);
    if (obj[key].length === 5) fives.push(obj[key]);
  }
  return fives;
}

//======================Understanding closures - the basics==============
//https://www.codewars.com/kata/56b71b1dbd06e6d88100092a/train/javascript

const buildFun = (n) => Array.from({ length: n }, (_, i) => () => i);

//====Fun with ES6 Classes #2 - Animals and Inheritance==================
//https://www.codewars.com/kata/56f935002e6c0d55fa000d92/train/javascript

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return `${super.introduce()}  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
