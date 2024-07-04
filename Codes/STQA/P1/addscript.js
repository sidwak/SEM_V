let display = document.getElementById('display');
let seddisplay = document.getElementById('display2');
let currentOperation = null;
let previousValue = null;

function appendNumber(number) {
    if (display.value === '0' || display.value === '') {
        display.value = number;
    } else {
        display.value += number;
    }
    appendCharacter(number)
}

function setOperation(operation) {
    appendCharacter(operation)
    if (currentOperation !== null) {
        calculate();
    }
    previousValue = display.value;
    currentOperation = operation;
    display.value = '';
}

function appendCharacter(chr){
    seddisplay.value += chr
}

function calculate() {
    if (currentOperation === null || display.value === '') return;
    let currentValue = display.value;
    let result;
    switch (currentOperation) {
        case '+':
            result = parseFloat(previousValue) + parseFloat(currentValue);
            break;
        case '-':
            result = parseFloat(previousValue) - parseFloat(currentValue);
            break;
        case '*':
            result = parseFloat(previousValue) * parseFloat(currentValue);
            break;
        case '/':
            result = parseFloat(previousValue) / parseFloat(currentValue);
            break;
        default:
            return;
    }
    display.value = result;
    currentOperation = null;
    previousValue = null;
}

function clearDisplay() {
    display.value = '';
    display2.value = ' ';
    currentOperation = null;
    previousValue = null;
}