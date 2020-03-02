import functions from './functions.js';
import provinces from './provinces.js';

// **********
//
// Add the event listeners
// 

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

add.addEventListener('click', (() => {
    var [value1, value2] = functions.getValues();
    answer.textContent = functions.add(value1, value2);
}));
subtract.addEventListener('click', (() => {
    var [value1, value2] = functions.getValues();
    answer.textContent = functions.subtract(value1, value2);
}));
multiply.addEventListener('click', (() => {
    var [value1, value2] = functions.getValues();
    answer.textContent = functions.multiply(value1, value2);
}));
divide.addEventListener('click', (() => {
    var [value1, value2] = functions.getValues();
    answer.textContent = functions.divide(value1, value2);
}));
divide.addEventListener('click', (() => {
    var [value1, value2] = functions.getValues();
    answer.textContent = functions.divide(value1, value2);
}));
calculate.addEventListener('click', (() => {
    let value1 = functions.earningsBrackets(earnings.value);
    taxes.textContent = functions.bracketTaxes(value1);
    effectiveTaxRate.textContent = (taxes.textContent/earnings.value*100).toFixed(2)+'%';
}));
let myArray = [];
addArray.addEventListener('click', (() => {
    if (isNaN(Number(arraysinput.value))||arraysinput.value==="") {
        arraysoutput.textContent = "Input is not a number.";
    } else {
        myArray = functions.addNumToArray(myArray,Number(arraysinput.value));
        arraysoutput.textContent = "Number added to array.";
    }
}));
showArray.addEventListener('click', (() => {
    arraysoutput.textContent=myArray;
}));
totalArray.addEventListener('click', (() => {
    arraysoutput.textContent=functions.totalArray(myArray);
}));
clearArray.addEventListener('click', (() => {
    myArray = [];
    arraysoutput.textContent=`Array cleared.`;
}));
