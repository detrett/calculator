const displayContainerWidth = document.getElementById('screen').clientWidth;
const display = document.getElementById('display');
const operators = ["+", "—", "×", "÷"];
const resultBtn = document.getElementById('=');
const clearBtn = document.getElementById('C');

let leftNum = "";
let rightNum = "";
let currentOperator = "";
let displayText = "";

function add(a, b) {
    let intA = parseInt(a);
    let intB = parseInt (b);
    result = intA + intB;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function subtract(a, b) {
    let intA = parseInt(a);
    let intB = parseInt (b);
    result = intA - intB;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function multiply(a, b) {
    let intA = parseInt(a);
    let intB = parseInt (b);
    result = intA * intB;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function divide(a, b) {
    let intA = parseInt(a);
    let intB = parseInt (b);
    result = intA / intB;
    displayText = result;
    leftNum = result;
    currentOperator = "";
}

function operate(operator, a, b) {
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
    display.textContent = displayText + input;
    if (!isOverflowing(display) && !isOperator(input)) displayText += input;
    display.textContent = displayText;
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
        leftNum = displayText;
        displayText = "";
        writeToDisplay(operator);
    })
}

resultBtn.addEventListener('click', (event) => {
    console.log(leftNum + currentOperator + rightNum);
    if(leftNum !== "" || currentOperator !== "") {
        rightNum = displayText;
        displayText = "";
        operate(currentOperator, leftNum, rightNum);
    }
})

clearBtn.addEventListener('click', (event) => {
    leftNum = "";
    currentOperator = "";
    rightNum = "";
    displayText = "";
    writeToDisplay("");
})