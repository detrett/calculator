const display = document.getElementById('screen');

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

function operate(operator, a, b){
    switch(operator) {
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
        default:{
            console.log("Operator not supported");
        }
    }
}

function writeToDisplay(input) {
    displayText += input;
    display.textContent = displayText;
}