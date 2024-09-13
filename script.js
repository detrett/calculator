const displayContainerWidth = document.getElementById('screen').clientWidth;
const display = document.getElementById('display');

let leftNum = 0;
let rightNum = 0;
let operator = "";
let displayText = "";

function add(a, b) {
    console.log(a + b);
}

function subtract(a, b) {
    console.log(a - b);
}

function multiply(a, b) {
    console.log(a * b);
}

function divide(a, b) {
    console.log(a / b);
}

function operate(operator, a, b) {
    switch (operator) {
        case "+": {
            add(a, b);
            break;
        }
        case "-": {
            subtract(a, b);
            break;
        }
        case "*": {
            multiply(a, b);
            break;
        }
        case "/": {
            divide(a, b);
            break;
        }
        default: {
            console.log("Operator not supported");
        }
    }
}

function isOverflowing(element) {
    console.log(displayContainerWidth);
    console.log(element.offsetWidth);
    return element.offsetWidth > displayContainerWidth;
  }

function writeToDisplay(input) {
    display.textContent = displayText + input;
    if (!isOverflowing(display)) displayText += input;
    display.textContent = displayText;
}

for (let i = 0; i < 10; i++) {
    const button = document.getElementById(`${i}`);
    button.addEventListener('click', (event) => {
        writeToDisplay(i);
    })
}