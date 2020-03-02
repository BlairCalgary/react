import functions from './functions.js';

// **********
//
// Add the event listeners
// 

myDiv.addEventListener('click', ((e) => {
    console.log(e.target);
}));

showBtn.addEventListener('click', (() => {
    console.log(document.getElementById('myOL').children);
}));

addBtn.addEventListener('click', (() => {
    functions.addLi();
}));

insertBtn.addEventListener('click', (() => {
    functions.insertLi();
}));
removeBtn.addEventListener('click', (() => {
    functions.removeLi();
}));
