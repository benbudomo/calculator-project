function addNumbers(numberOne, numberTwo) {
    console.log(Number(numberOne) + Number(numberTwo));
}

function subtractNumbers(numberOne, numberTwo) {
    console.log(Number(numberOne) - Number(numberTwo));
}

function multiplyNumbers(numberOne, numberTwo) {
    console.log(Number(numberOne) * Number(numberTwo));
}

function divideNumbers(numberOne, numberTwo) {
    console.log(Number(numberOne) / Number(numberTwo));
}

function operate () {
    let userOperator = prompt('Operator?');
    let userFirstNumber = prompt('First Number?');
    let userSecondNumber = prompt('Second Number?');

    if(userOperator == 'add') {
        addNumbers(userFirstNumber, userSecondNumber);
    } else if(userOperator == 'subtract') {
        subtractNumbers(userFirstNumber, userSecondNumber);
    } else if(userOperator == 'multiply') {
        multiplyNumbers(userFirstNumber, userSecondNumber);
    } else if(userOperator == 'divide') {
        divideNumbers(userFirstNumber, userSecondNumber);
    }
}

function clear () {
    
}