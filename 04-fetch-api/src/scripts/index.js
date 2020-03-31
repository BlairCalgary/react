import {City} from './130d.js';
import {Shitty} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';

const cityFetch = new CityFetch;
const controller = new Controller;

// Load server data to use this session
async function loadServerData() {
    const resp = await cityFetch.all();
    for (const obj in resp) {
        // console.log(resp[obj]);
        controller.createCity(new Shitty(resp[obj]));
    }
    // return resp[0];
    // console.log('controller.cities 2: ', controller.cities);
    // console.log(newKey());
};
// loadServerData();
// f().then(resp => console.log(resp));

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
        controller.createCity(new Shitty(cityObj));
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

reloadServer.addEventListener('click', (() => {
    cityFetch.load();
}));

loadData.addEventListener('click', (() => {
    loadServerData();
}));

clCities.addEventListener('click', (() => {
    console.log(controller.cities);
}));

nextKey.addEventListener('click', (() => {
    console.log(newKey());
}));

cityAdd.addEventListener('click', (() => {
    addCity();
}));

keyRead.addEventListener('click', (() => {
    console.log(cityFetch.read(keyReadInput.value));
}));
