const defaultResult = 0;
let currentResult = defaultResult;

// currentResult = (currentResult + 10) * 3 / 2 - 1;

// let calculationDescription = '(' + defaultResult + ' + 10) * 3 / 2 - 1';
// let calculationDescriptionString = `(${defaultResult} + 10) * 3 / 2 - 1`;

// outputResult(currentResult, calculationDescription);

// function add(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }

// currentResult = add(6, 8);

function add(){
    const enteredNumber = parseInt(userInput.value);
    const calcDescription = `${currentResult}+ ${enteredNumber}`;
    currentResult = currentResult + enteredNumber;
    // currentResult = currentResult + +userInput.value;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);