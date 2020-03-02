const functions = {

    addLi: () => {
        var node = document.createElement("li");
        var textnode = document.createTextNode("Append Item");
        node.appendChild(textnode);
        document.getElementById('myOL').appendChild(node);
    },
    insertLi: () => {
        var node = document.createElement("li");
        var textnode = document.createTextNode("Insert Item");
        node.appendChild(textnode);
        // document.getElementById('myOL').appendChild(node);
        var list = document.getElementById('myOL');
        list.insertBefore(node, list.childNodes[1]);
    },
    removeLi: () => {
        var parent = document.getElementById('myOL');
        var child = document.getElementById('myOL').lastElementChild;
        parent.removeChild(child);
    }
};

export default functions; 
