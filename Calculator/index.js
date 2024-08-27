const display = document.querySelector(".display");

const isNumber = (expression) => {
  return !["+", "-", "*", "/"].includes(expression);
};
const isOperator = (expression) => {
  return ["+", "-", "*", "/"].includes(expression);
};

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
    return add(number1, number2);
  }
  if (operator == "-") {
    return subtract(number1, number2);
  }
  if (operator == "*") {
    return multiply(number1, number2);
  }
  if (operator == "/") {
    return divide(number1, number2);
  }
};

const equal = document.querySelector(".btn-equal");
equal.addEventListener("click", () => {
  let numbers = components.filter(isNumber);
  let operator = components.filter(isOperator);
  let result = operate(numbers[0], operator, numbers[1]);
  display.innerHTML = result;
});

const clear = document.querySelector(".btn-clear");
clear.addEventListener("click", () => {
  display.innerHTML = "";
  components = [];
});

const buttons = document.querySelectorAll(".btn");
let components = [];
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    display.append(e.target.value);
    components.push(e.target.value);
  });
});
