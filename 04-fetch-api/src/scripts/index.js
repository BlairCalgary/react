import {City} from './130d.js';
// import {Shitty} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';
import {Capitals} from './130d.js';
const cityFetch = new CityFetch;
const controller = new Controller;
const capitals = new Capitals;
// Load server data to use this session
async function loadServerData() {
    const resp = await cityFetch.all();
    for (const obj in resp) {
        // console.log(resp[obj]);
        controller.createCity(new City(resp[obj]));
    }
    // return resp[0];
    // console.log('controller.cities 2: ', controller.cities);
    // console.log(newKey());
};
loadServerData();
// f().then(resp => console.log(resp));


function addAcctCard(obj) {
    let acctparent = document.getElementById('rightPanel');

    let childNode = document.createElement("div");
    childNode.className = 'divBox Card';

    let childNode2 = document.createElement("div");
    childNode2.className = 'leftCityCard';
    
    let spanNode = document.createElement("span");
    spanNode.textContent = obj.name;
    childNode2.appendChild(spanNode);

    let buttonNode = document.createElement("button");
    // buttonNode.setAttribute("id", 'cityCardShow');
    buttonNode.className = 'btn';
    buttonNode.textContent = 'Show';
    childNode2.appendChild(buttonNode);

    childNode.appendChild(childNode2);

    let childNode3 = document.createElement("div");
    childNode3.className = 'rightCityCard';

    let buttonNode2 = document.createElement('button');
    // buttonNode2.setAttribute('id','moveIn');
    buttonNode2.className = 'btn';
    buttonNode2.textContent = 'Move In';
    childNode3.appendChild(buttonNode2);
    
    let input = document.createElement('input');
    input.setAttribute('id','moveInOut'+obj.key);
    input.className = 'moveInOut';
    childNode3.appendChild(input);

    let buttonNode3 = document.createElement('button');
    // buttonNode3.setAttribute('id','moveOut');
    buttonNode3.className = 'btn';
    buttonNode3.textContent = 'Move Out';
    childNode3.appendChild(buttonNode3);

    childNode.appendChild(childNode3);


    // outputNode.setAttribute("id", "balOutput");
    // outputNode.className = "balOutput"
    // outputNode.textContent = Number(obj.balance).toFixed(2);
    // childNode.appendChild(outputNode);
    // let btnNode = document.createElement("button");
    // btnNode.setAttribute("id", 'closeAcct');
    // btnNode.className = 'closeAcct btn';
    // btnNode.textContent = 'Close Acct';
    // childNode.appendChild(btnNode);

    acctparent.append(childNode);
//     <div class="divBox Card">
//          <div class="leftCityCard">
//              <span>City</span>
//              <button id="cityCardShow" class="btn">Show</button>
//          </div>
//          <div id="rightCityCard">
//              <button id="moveIn" class="btn">Move In</button>
//              <input id="moveInOut">
//              <button id="moveOut" class="btn">Move Out</button>
//          </div>
//     </div>
};


function updatePage() {
    let parent = document.getElementById('rightPanel');
    // console.log(parent.lastElementChild);
    let child;
    while (parent.childElementCount>0) {
        child=parent.lastElementChild;
        parent.removeChild(child);
    }
    let x;
    for (x = 0; x < controller.cities.length; x++) {
        addAcctCard(controller.cities[x]);
    }
    totalPopOutput.textContent = controller.getPopulation();
    mostNorthOutput.textContent = controller.getMostNorthern();
    mostSouthOutput.textContent = controller.getMostSouthern();
}



function newKey() {
    const keys = [];
    for (const keyCount in controller.cities) {
        keys.push(controller.cities[keyCount].key);
        // console.log(`object key: `, controller.cities[keyCount]);
    }
    // console.log ('In newKey func: keys[]', keys);
    let i = 0;
    do {
        i++;
    }
    while (keys.indexOf(String(i))>=0);
    return String(i);
}

// console.log('Typeof: '+(typeof newKey())+' | '+newKey());

async function addCity() {
    // const merName = name.value;
    // const merLat = lat.value;
    // const merLong = long.value;
    // const merPop = pop.value;
    // // const cityObj = new City;
    
    const cityObj = {};
    cityObj.key = newKey();
    // const key = newKey();
    
    // replace variable with element.textContent of input field
    
    cityObj.name = cityName.value;
    cityObj.latitude = lat.value;
    cityObj.longitude = long.value;
    cityObj.population = pop.value;
    const resp = await cityFetch.add(cityObj);
    
    // const resp = await cityFetch.add(new City(merName, merLat, merLong, merPop, key));
    
    if (resp.status===200) {
        controller.createCity(new City(cityObj));
        // console.log(controller.cities);
    };
}

// addCity();
// addCity().then(() => console.log(newKey()));



// displayPanel.addEventListener('click', ((e) => {
//     if (e.target.id==='closeAcct') {
//         if (Number(e.target.parentNode.childNodes[1].textContent)===0) {
//             closeAcct(e.target);
//         } else {
//             errMsg.textContent = 'Only empty accounts can be closed.';
//         }
//     }
// }));

// // Declare Functions
// function clearOutputs() {
//     let index;
//     let classes = document.getElementsByClassName('output');
//      for (index = 0; index < classes.length; index++) {
//         classes[index].textContent = "";
//     }
//     newAcctName.value = "";
//     startBal.value = "";
//     amtInput.value = "";
//     accountList.value = "Please select";
// }

// Initialize server on load.
async function init() {
    await cityFetch.load();
    await updatePage();
};
init();
// let promise = new Promise(cityFetch.load()(rebuildCards()));

// cityFetch.load();


// rebuildCards();

window.addEventListener('click', (() => {
    updatePage();
}));

rightPanel.addEventListener('click', ((e) => {
    if (e.target.textContent===`Show`) {
        const name = e.target.previousSibling.textContent
        console.log(`previousSibling.textContent: `, name);
        showCity(name);
        // console.log(`previousElementSibling: `, e.target.previousElementSibling);
        console.log('controller.cities: ', controller.cities);
    };  
}));

randomCity.addEventListener('click', (() => {
    const rando = Math.floor(Math.random() * capitals.capitals.length)
    fetchCapital(capitals.capitals[rando]);
}));

displayDelCity.addEventListener('click', (() => {
    if (!displayKeyOutput.textContent==``) {
        console.log(`Delete Key: `, displayKeyOutput.textContent);
    } else {
        console.log(`select 'show' form a city card on the right pane`);
    }
}));



function showCity(name) {
    for (const keyCount in controller.cities) {
        if (controller.cities[keyCount].name===name) {
            displayCityOutput.textContent = controller.cities[keyCount].name;
            displayLatOutput.textContent = controller.cities[keyCount].latitude;
            displayLongOutput.textContent = controller.cities[keyCount].longitude;
            displayPopOutput.textContent = controller.cities[keyCount].population;
            displayKeyOutput.textContent = controller.cities[keyCount].key;
            displayHemOutput.textContent = controller.cities[keyCount].whichSphere();
            displaySetOutput.textContent = controller.cities[keyCount].howBig();
        } 
    }
    
}

// clCities.addEventListener('click', (() => {
//     console.log(controller.cities);
// }));

// nextKey.addEventListener('click', (() => {
//     console.log(newKey());
// }));

// cityAdd.addEventListener('click', (() => {
//     addCity();
// }));

// keyRead.addEventListener('click', (() => {
//     console.log(cityFetch.read(keyReadInput.value));
// }));
document.addEventListener('DOMContentLoaded', async () => {
    const caps = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/eu`);
    const resp = await caps.json();

    // console.log(resp);
    for (const city in resp) {
        capitals.addCapital(resp[city].capital);
    }
    // console.log(resp);
    // console.log('DOM fully loaded and parsed');
});

async function fetchCapital(city){
    const rCity = await fetch(`https://restcountries.eu/rest/v2/capital/`+city);
    const resp = await rCity.json();
    cityName.value = resp[0].capital;
    lat.value = resp[0].latlng[0];
    long.value = resp[0].latlng[1];
    pop.value = resp[0].population;
    
}
