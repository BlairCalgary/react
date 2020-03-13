import Account from './account.js'

const account = new Account('Chequing', 25);

// function onClick(e)  {
//     if (amtInput>0) {
//         switch (e.target.id) {
//             case 'balanceBtn' :
//                 balanceBtn.textContent = 'Balance';
//                 break;
//             case 'depositBtn' :
//                 balanceBtn.textContent = 'Deposit';
//                 break;
//             case 'withdrawBtn' :
//                 balanceBtn.textContent = 'Withdraw';
//                 break;
//         }
//     } else {
//         alert('ERR: Must be a number greater than 0');
//     }
    
// }

function errorMsg() {
    console.log('in error message')
    errMsg.textContent = 'Value must be greater than zero.';
    // const brNode = document.createElement('br');
    // const parent = document.getElementById('actionPanel');
    // const targetNode = document.getElementById('amtInput');
    // parent.insertBefore(brNode,targetNode.nextSibling);
    // const newnode = document.createElement("span");
    // newnode.className = 'alert';
    // newnode.textContent = 'Value must be greater than zero.';
    // console.log(parent);
    // console.log(targetNode);
    // console.log(newnode);
    // parent.insertBefore(newnode,targetNode.nextSibling);
    // parent.insertBefore(brNode,targetNode.nextSibling);
    // // balOutput.textContent = 'amt =< 0';
};

balanceBtn.addEventListener('click', ((e) => {
    balOutput.textContent = account.display();
}));

depositBtn.addEventListener('click', ((e) => {
    if (amtInput.value>0) {
        // const amtTemp = Number(amtInput.value);
        // amtInput.value = amtTemp.toFixed(2);
        
        
        
        account.deposit(amtInput.value);
        balOutput.textContent = account.display();
    } else {
        errorMsg();
    }
}));

withdrawBtn.addEventListener('click', ((e) => {
    if (amtInput.value>0) {
        // const amtTemp = Number(amtInput.value);
        // amtInput.value = amtTemp.toFixed(2);
        account.withdraw(amtInput.value);
        balOutput.textContent = account.display();
    } else {
        errorMsg();
    }
}));