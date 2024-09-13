const displayContainerWidth = document.getElementById('screen').clientWidth;
const display = document.getElementById('display');
const operators = ["+", "—", "×", "÷"];
const resultBtn = document.getElementById('=');
const clearBtn = document.getElementById('C');

let leftNum = 0;
let rightNum = 0;
let currentOperator = "";
let displayText = "";

function add(a, b) {
    result = a + b;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function subtract(a, b) {
    result = a - b;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function multiply(a, b) {
    result = a * b;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function divide(a, b) {
    if (b === 0) {
        reset();
        display.textContent = "Nice try chump";
    } else {
        result = Math.round(((a / b) * 10) / 10);
        displayText = result;
        leftNum = result;
        currentOperator = "";
    }
}

function operate(operator, a, b) {
    console.log(a + operator + b);
    switch (operator) {
        case "+": {
            add(a, b);
            writeToDisplay("");
            break;
        }
        case "—": {
            subtract(a, b);
            writeToDisplay("");
            break;
        }
        case "×": {
            multiply(a, b);
            writeToDisplay("");
            break;
        }
        case "÷": {
            divide(a, b);
            writeToDisplay("");
            break;
        }
        default: {
            console.log("Operator not supported");
        }
    }
}

function isOverflowing(element) {
    return element.offsetWidth > displayContainerWidth;
}

function isOperator(input) {
    return operators.includes(input);
}

function writeToDisplay(input) {
    if(displayText === "Nice try chump") {
        display.textContent = input;
    } else {
        display.textContent = displayText + input;
        if (!isOverflowing(display) && !isOperator(input)) displayText += input;
        display.textContent = displayText;
    }
}

function reset() {
    leftNum = "";
    currentOperator = "";
    rightNum = "";
    displayText = "";
    writeToDisplay("");
}

for (let i = 0; i < 10; i++) {
    const button = document.getElementById(`${i}`);
    button.addEventListener('click', (event) => {
        writeToDisplay(i);
    })
}

for (let operator of operators) {
    const button = document.getElementById(`${operator}`);
    button.addEventListener('click', (event) => {
        currentOperator = operator;
        if(Number.isInteger(parseInt(displayText))) {
            leftNum = parseInt(displayText);
        } else leftNum = 0;
        displayText = "";
        writeToDisplay(operator);
    })
}

resultBtn.addEventListener('click', (event) => {
    if (currentOperator !== "") {
        if(Number.isInteger(parseInt(leftNum))) leftNum = parseInt(leftNum);
        if(Number.isInteger(parseInt(displayText))) rightNum = parseInt(displayText);
        console.log("Preview:" + leftNum + currentOperator + rightNum);
        if(Number.isInteger(leftNum) && Number.isInteger(rightNum)) {
            operate(currentOperator, leftNum, rightNum);
        }
    }
})

clearBtn.addEventListener('click', (event) => {
    reset();
})