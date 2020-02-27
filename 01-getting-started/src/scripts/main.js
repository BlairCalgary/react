import functions from './functions.js';


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
