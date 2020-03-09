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


let i = 0;
const buildNode = () => {
    // Create card div with title
    const node = document.createElement("DIV");
    node.setAttribute("class", "cards");
    const span = document.createElement("span");
    node.appendChild(span);
    span.setAttribute("id", "cardTitle");
    span.textContent = `Card ${i}`;
    node.appendChild(document.createElement("br"));
    // Create beforeNode button node
    const beforeNode = document.createElement("button");
    beforeNode.setAttribute("id", "addBefore");
    beforeNode.setAttribute("class", "cardBtn");
    beforeNode.textContent = `Add Before`;
    node.appendChild(beforeNode);
    // Create afterNode button node
    const afterNode = document.createElement("button");
    afterNode.setAttribute("id", "addAfter");
    afterNode.setAttribute("class", "cardBtn");
    afterNode.textContent = `Add After`;
    node.appendChild(afterNode);
    node.appendChild(document.createElement("br"));
    // Create deleteNode button node
    const deleteNode = document.createElement("button");
    deleteNode.setAttribute("id", "deleteCard");
    deleteNode.setAttribute("class", "cardBtn");
    deleteNode.textContent = `Delete`;
    node.appendChild(deleteNode);
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

export default buildNode;
