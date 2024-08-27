const display = document.querySelector(".display");

let number1, number2, operator;

const add = (number1, number2) => {
  return number1 + number2;
};

const subtract = (number1, number2) => {
  return number1 - number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};
const divide = (number1, number2) => {
  return number1 / number2;
};

const operate = (number1, operator, number2) => {
  if (operator == "+") {
    add(number1, number2);
  }
  if (operator == "-") {
    subtract(number1, number2);
  }
  if (operator == "*") {
    multiply(number1, number2);
  }
  if (operator == "/") {
    divide(number1, number2);
  }
};
