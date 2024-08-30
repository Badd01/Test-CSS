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
  // String to number
  number1 = +number1;
  number2 = +number2;
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

const content = document.querySelector(".content");
const operator = document.querySelector(".operator");
// number character
const maxLength = 44;
const displayContent = (value) => {
  content.textContent = value;
  if (content.textContent.length > maxLength) {
    content.textContent = content.textContent.substring(0, maxLength);
    return content.textContent;
  }
  return content.textContent;
};
const displayOperator = (value) => {
  return (operator.textContent = value);
};

let firstNumber, theOperator, secondNumber;
const buttonNumber = document.querySelectorAll(".btn-number");
buttonNumber.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (secondNumber === undefined && theOperator === undefined) {
      if (firstNumber === undefined) {
        firstNumber = e.target.value;
      } else {
        firstNumber += e.target.value;
        if (firstNumber > maxLength) {
          firstNumber = firstNumber.substring(0, maxLength);
        }
      }
      displayContent(firstNumber);
    }

    if (theOperator !== undefined) {
      if (secondNumber === undefined) {
        secondNumber = e.target.value;
      } else {
        if (secondNumber > maxLength) {
          secondNumber = secondNumber.substring(0, maxLength);
        }
        secondNumber += e.target.value;
      }
      displayContent(secondNumber);
    }
  });
});

let isEqualPressed = false; // State "="
const buttonOperator = document.querySelectorAll(".btn-operator");
buttonOperator.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value !== "=") {
      if (firstNumber !== undefined) {
        if (secondNumber !== undefined) {
          if (isEqualPressed === false) {
            firstNumber = operate(firstNumber, theOperator, secondNumber);
          }
          displayContent(firstNumber);
          secondNumber = undefined;
        }
        theOperator = e.target.value;
        displayOperator(theOperator);
      }

      isEqualPressed = false;
    } else {
      if (firstNumber !== undefined && secondNumber !== undefined) {
        firstNumber = operate(firstNumber, theOperator, secondNumber);
        displayContent(firstNumber);
        isEqualPressed = true;
      }
    }
  });
});

const clear = () => {
  content.textContent = "";
  operator.textContent = "";
  firstNumber = undefined;
  secondNumber = undefined;
  theOperator = undefined;
};

const backspace = () => {
  if (secondNumber !== undefined) {
    secondNumber = secondNumber.slice(0, -1);
    displayContent(secondNumber);
  } else if (firstNumber !== undefined) {
    firstNumber = firstNumber.slice(0, -1);
    displayContent(firstNumber);
  }
};

//Clear and Delete
const buttonFunction = document.querySelectorAll(".btn");
buttonFunction.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value === "C") {
      clear();
    }
    if (e.target.value === "Del") {
      backspace();
    }
    if (e.target.value === "%") {
      if (firstNumber !== undefined && secondNumber === undefined) {
        firstNumber = firstNumber / 100;
        displayContent(firstNumber);
      } else if (theOperator !== undefined && secondNumber !== undefined) {
        secondNumber = secondNumber / 100;
        displayContent(secondNumber);
      }
    }
    if (e.target.value === "+/-") {
      if (firstNumber !== undefined && secondNumber === undefined) {
        firstNumber = firstNumber.includes("-")
          ? firstNumber.slice(1)
          : "-" + firstNumber;
        displayContent(firstNumber);
      } else if (theOperator !== undefined && secondNumber !== undefined) {
        secondNumber = secondNumber.includes("-")
          ? secondNumber.slice(1)
          : "-" + secondNumber;
        displayContent(secondNumber);
      }
    }
  });
});

//Keyboard support
window.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key >= 0 && key <= 9) {
    document.querySelector(`input[value="${key}"]`).click();
  }
  if (key === ".") {
    document.querySelector('input[value="."]').click();
  }
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    document.querySelector(`input[value="${key}"]`).click();
  }
  if (key === "Enter" || key === "=") {
    document.querySelector('input[value="="]').click();
  }
  if (key === "Backspace") {
    document.querySelector('input[value="Del"]').click();
  }
  36;
  if (key.toLowerCase() === "c") {
    document.querySelector('input[value="C"]').click();
  }
});
