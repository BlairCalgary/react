import functions from './functions.js';

document.body.innerHTML =
`<ol id='myOL'>This is a list of stuff<br><br>` +
    '<li>Item 1</li>' +
    '<li>Item 2</li>' +
    '<li>Item 3</li>' +
'</ol><br>';

test('Does it add an <li>?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.addLi();
    expect(document.getElementById('myOL').children.length-i).toBe(1);
});

test('Does it add an <li> to the start?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.insertLi();
    expect(document.getElementById('myOL').childNodes[4].innerHTML).toBe('Insert Item');
});

test('Does it remove an <li>?', () => {
    var i = document.getElementById('myOL').children.length;
    functions.removeLi();
    expect(i-document.getElementById('myOL').children.length).toBe(1);
});



