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
  if (number2 === 0) {
    return "Error: Division by 0";
  }
  return number1 / number2;
};

const operate = (number1, calculate, number2) => {
  switch (calculate) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return null;
  }
};

let firstNumber, theOperator, secondNumber;

const content = document.querySelector(".content");
const operator = document.querySelector(".operator");
const expression = document.querySelector(".expression");
const displayContent = (value) => {
  return (content.textContent = value);
};
const displayOperator = (value) => {
  return (operator.textContent = value);
};
const displayExpression = (value) => {
  return (expression.textContent += value);
};

const buttonOperator = document.querySelectorAll(".btn-operator");
buttonOperator.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayOperator(e.target.value);
    displayExpression(e.target.value);
  });
});

const buttonNumber = document.querySelectorAll(".btn-number");
buttonNumber.forEach((button) => {
  button.addEventListener("click", (e) => {
    displayContent(e.target.value);
    displayExpression(e.target.value);
  });
});
