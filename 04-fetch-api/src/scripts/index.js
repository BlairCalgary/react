import {City} from './130d.js';
import {CityFetch} from './130d.js';
import {Controller} from './130d.js';

const cityFetch = new CityFetch;

// Temporary city data 
const yyc = ("1","Calgary","51.03","-114.37","1285711");
//     "key":"1",
//     "name":"Calgary",
//     "latitude":"51.03",
//     "longitude":"-114.37",
//     "population":"1285711"
// };

// const yk = {
//     "key":"-114.54",
//     "name":"Yellowknife",
//     "latitude":"62.47",
//     "longitude":"-114.54",
//     "population":"-114.54"
// };

// const slc = {
//     "key":"3",
//     "name":"Salt Lake City",
//     "latitude":"40.78",
//     "longitude":"-112.06",
//     "population":"200544"
// };

const controller = new Controller;
controller.createCity(new City("Calgary","51.03","-114.37","1285711","1"));
controller.createCity(new City("Yellowknife","62.47","-114.54","-114.54","2"));
controller.createCity(new City("Salt Lake City","40.78","-112.06","200544","3"));
console.log('controller.cities: ', controller.cities);



function newKey() {
    const keys = [];
    for (const keyCount in controller.cities) {
        keys.push(controller.cities[keyCount].key);
    }
    let i = 0;
    do {
        i++;
    }
    while (keys.indexOf(String(i))>=0);
    return String(i);
}

console.log('Typeof: '+(typeof newKey())+' | '+newKey());

async function addCity() {
    const merName = "Mérida";
    const merLat = "20.98";
    const merLong = "-89.77";
    const merPop = "892363";
    const cityObj = new City;
    cityObj.key = newKey();
    // const key = newKey();
    
    // replace variable with element.textContent of input field
    
    cityObj.name = merName;
    cityObj.latitude = merLat;
    cityObj.longitude = merLong;
    cityObj.population = merPop;
    const resp = await cityFetch.add(cityObj);
    
    // const resp = await cityFetch.add(new City(merName, merLat, merLong, merPop, key));
    
    if (resp.status===200) {
        controller.createCity(cityObj);
        console.log(controller.cities);
    };
}

addCity();
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