//============Geometry Basics: Circle Circumference in 2D========================
//https://www.codewars.com/kata/58e43389acfd3e81d5000a88/train/javascript

/* class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
  }
  
  class Circle {
    constructor(center, radius) {
      this.center = center;
      this.radius = radius;
    }
  } */

const circleCircumference = (circle) =>
  parseFloat((2 * Math.PI * circle.radius).toFixed(6));

function giveMeFive(obj) {
  const result = [];

  for (let key in obj) {
    if (key.length == 5) result.push(key);
    if (obj[key].length == 5) result.push(obj[key]);
  }
  return result;
}
