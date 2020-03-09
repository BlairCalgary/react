import buildNode from './main.js';

document.body.innerHTML =
`<div id="myDiv" class="container">`+
`<ol id='myOL'>This is a list of stuff<br><br>` +
    '<li>Item 1</li>' +
    '<li>Item 2</li>' +
    '<li>Item 3</li>' +
'</ol><br>'+
`<div id='leftPanel'>` +
`<div id='1'></div>` +
`<div id='2'></div>` +
`<div id='3'></div>` +
`</div>` +
`</div>`;

let myDiv = document.getElementById('myDiv');

console.log('in main.test.js')