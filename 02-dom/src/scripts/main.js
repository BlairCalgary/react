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



// const container = document.getElementById('leftPanel');

// var i, card;
// for (i = 1; i < 4; i++) {
//     const cardContent = 
//     `<div name="${i}" class="cards">`+
//         `<span id="cardTitle">Card ${i}</span><br>`+
//         `<button id="addBefore">Add Before</button>`+
//         `<button id="addAfter">Add After</button><br>`+
//         `<button id="deleteCard">Delete</button>`+
//     `</div>`;
//     container.innerHTML += cardContent;
// };
var i = 1;

const onClick = (e) => {
    // console.log('Event target id:', e.target.id);
    var node = document.createElement("DIV");
    node.setAttribute("name", "testname");
    node.setAttribute("class", "cards");
    var innerCardContent =
        `<span id="cardTitle">Card ${i}</span><br>`+
        `<button id="addBefore">Add Before</button>`+
        `<button id="addAfter">Add After</button><br>`+
        `<button id="deleteCard">Delete</button>`;
    node.innerHTML += innerCardContent;
    var parent = document.getElementById('leftPanel');
    switch (e.target.id) {
        case 'addAfter' :
            console.log('addAfter case');
            functions.addAfter(parent, node, e.target.parentNode);
            break;
        case 'deleteCard' :
            console.log('delateCard case');
            break;
        case 'addBefore' :
            console.log('addBefore case');
            break;
        case 'addCard' :
            console.log('addCard case');
            break;
    }
};

leftPanel.addEventListener('click', ((e) => {
    onClick(e);

    // if (e.target.id==='addAfter') {

    //     var node = document.createElement("DIV");
    //     node.setAttribute("name", "testname");
    //     node.setAttribute("class", "cards");
    //     var innerCardContent =
    //         `<span id="cardTitle">Card ${i}</span><br>`+
    //         `<button id="addBefore">Add Before</button>`+
    //         `<button id="addAfter">Add After</button><br>`+
    //         `<button id="deleteCard">Delete</button>`;
    //     node.innerHTML += innerCardContent;
    //     console.log(node);
    //     var parent = document.getElementById('leftPanel');    // Get the <ul> element to insert a new node
    //     functions.addAfter(parent, node, e.target.parentNode)
    // };
    
    
    if (e.target.id==='deleteCard') {
        var container = document.getElementById('leftPanel');    // Get the <ul> element to insert a new node
        functions.deleteCard(container, e.target.parentNode);
    };

    if (e.target.id==='addBefore') {
        var node = document.createElement("DIV");
        node.setAttribute("name", "testname");
        node.setAttribute("class", "cards");
        var innerCardContent =
            `<span id="cardTitle">Card ${i}</span><br>`+
            `<button id="addBefore">Add Before</button>`+
            `<button id="addAfter">Add After</button><br>`+
            `<button id="deleteCard">Delete</button>`;
        node.innerHTML += innerCardContent;
        var parent = document.getElementById('leftPanel');    // Get the <ul> element to insert a new node
        functions.addBefore(parent, node, e.target.parentNode);
     
    };
    if (e.target.id==="addCard") {
        var node = document.createElement("DIV");
        node.setAttribute("name", "testname");
        node.setAttribute("class", "cards");
        var innerCardContent =
            `<span id="cardTitle">Card ${i}</span><br>`+
            `<button id="addBefore">Add Before</button>`+
            `<button id="addAfter">Add After</button><br>`+
            `<button id="deleteCard">Delete</button>`;
        node.innerHTML += innerCardContent;
        var parent = document.getElementById('leftPanel');    // Get the <ul> element to insert a new node
        // parent.appendChild(node);
        functions.addCard(parent, node);
        // functions.addBefore(parent, node, e.target.parentNode);
        
    }  
}));


