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


var i = 0;
const buildNode = () => {
    var node = document.createElement("DIV");
    node.setAttribute("class", "cards");
    var innerCardContent =
       `<span id="cardTitle">Card ${i}</span><br>`+
        `<button id="addBefore" class="cardBtn">Add Before</button>`+
        `<button id="addAfter" class="cardBtn">Add After</button><br>`+
        `<button id="deleteCard" class="cardBtn"">Delete</button>`;
    node.innerHTML += innerCardContent;
    return node;
};

const onClick = (e) => {
    var parent = document.getElementById('leftPanel');
    switch (e.target.id) {
        case 'addAfter' :
            i++;
            functions.addAfter(parent, buildNode(), e.target.parentNode);
            break;
        case 'deleteCard' :
            functions.deleteCard(parent, e.target.parentNode);
            break;
        case 'addBefore' :
            i++;
            functions.addBefore(parent, buildNode(), e.target.parentNode);
            break;
        case 'addCard' :
            i++;
            functions.addCard(parent, buildNode());
            break;
    }
};

leftPanel.addEventListener('click', ((e) => {
    onClick(e);
}));


