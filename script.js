const displayContainerWidth = document.getElementById('screen').clientWidth;
const display = document.getElementById('display');
const operators = ["+", "—", "×", "÷"];
const resultBtn = document.getElementById('equal');
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
        writeToDisplay("YOU HURT ME");
    } else {
        result = a / b;
        displayText = result;
        leftNum = result;
        currentOperator = "";
    }
}

function operate(operator, a, b) {
    console.log("Now calculating: " + a + operator + b);
    switch (operator) {
        case "+": {
            add(a, b);
            // Displays the result
            writeToDisplay("");
            break;
        }
        case "—": {
            subtract(a, b);
            // Displays the result
            writeToDisplay("");
            break;
        }
        case "×": {
            multiply(a, b);
            // Displays the result
            writeToDisplay("");
            break;
        }
        case "÷": {
            divide(a, b);
            // Displays the result
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
    if (displayText === "Nice try chump") {
        display.textContent = input;
    } else {
        display.textContent = displayText + input;
        if (!isOverflowing(display) && !isOperator(input)) displayText += input;
        display.textContent = displayText;
    }
}

function writeNumber(input) {
    if (displayText === "Nice try chump") {
        display.textContent = input;
    } else {
        display.textContent = displayText + input;
        if (!isOverflowing(display)) displayText += input;
        display.textContent = displayText;
    }
}

function saveLeftNumber() {
    if (!Number.isNaN(displayText)) {
        leftNum = Number(displayText);
        console.log(`Left number: ${leftNum}`);
    }
    displayText = "";
}

function saveRightNumber() {
    if (!Number.isNaN(displayText)) {
        rightNum = Number(displayText);
        console.log(`Right number: ${rightNum}`);
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
        writeNumber(i);
    })
}

for (let operator of operators) {
    const button = document.getElementById(`${operator}`);
    button.addEventListener('click', (event) => {
        button.classList.add('active');
        if (currentOperator === '') {
            currentOperator = operator;
            saveLeftNumber();
            console.log(`Current operator: ${currentOperator}`);
        } else {
            saveRightNumber();
            operate(currentOperator, leftNum, rightNum);
            currentOperator = operator;
            console.log(`Current operator: ${currentOperator}`);
            displayText = "";
        }

    })
    document.addEventListener('click', function (event) {
        if (!button.contains(event.target)) {
            button.classList.remove('active');
        }
    }, true);
}

resultBtn.addEventListener('click', (event) => {
    if (currentOperator !== "") {
        if (!Number.isNaN(leftNum)) leftNum = Number(leftNum);
        if (!Number.isNaN(displayText)) rightNum = Number(displayText);
        console.log("Preview:" + leftNum + currentOperator + rightNum);
        if (!Number.isNaN(leftNum) && !Number.isNaN(displayText)) {
            operate(currentOperator, leftNum, rightNum);
        }
    }
})

clearBtn.addEventListener('click', (event) => {
    reset();
})