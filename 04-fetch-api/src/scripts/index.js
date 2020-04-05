import {City} from './130d.js';
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
        controller.createCity(new City(resp[obj]));
    }
};
loadServerData();

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
    buttonNode.className = 'btn';
    buttonNode.textContent = 'Show';
    childNode2.appendChild(buttonNode);

    childNode.appendChild(childNode2);

    let childNode3 = document.createElement("div");
    childNode3.className = 'rightCityCard';

    let buttonNode2 = document.createElement('button');
    buttonNode2.className = 'btn';
    buttonNode2.textContent = 'Move In';
    childNode3.appendChild(buttonNode2);
    
    let input = document.createElement('input');
    input.setAttribute('id','moveInOut'+obj.key);
    input.setAttribute('type','number');
    input.className = 'moveInOut';
    childNode3.appendChild(input);

    let buttonNode3 = document.createElement('button');
    buttonNode3.className = 'btn';
    buttonNode3.textContent = 'Move Out';
    childNode3.appendChild(buttonNode3);

    childNode.appendChild(childNode3);

    acctparent.append(childNode);
};

function updatePage() {
    let parent = document.getElementById('rightPanel');
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

    // displayCityOutput.textContent = "";
    // displayLatOutput.textContent = "";
    // displayLongOutput.textContent = "";
    // displayPopOutput.textContent = "";
    // displayKeyOutput.textContent = "";
    // displayHemOutput.textContent = "";
    // displaySetOutput.textContent = "";
}

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

async function addCity() {
    if (cityName.value==="" ||
        lat.value==="" ||
        long.value==="" ||
        pop.value==="") {
            console.log("Values need to be non-zero.")
        } else {
        const cityObj = {};
        cityObj.key = newKey();
        
        cityObj.name = cityName.value;
        cityObj.latitude = lat.value;
        cityObj.longitude = long.value;
        cityObj.population = pop.value;
        const resp = await cityFetch.add(cityObj);
    
        if (resp.status===200) {
            controller.createCity(new City(cityObj));
        };
        updatePage();
        cityName.value = "";
        lat.value = "";
        long.value = "";
        pop.value = "";
    }
}

// addCity();
// addCity().then(() => console.log(newKey()));

// Initialize server on load.
async function init() {
    await cityFetch.load();
    await updatePage();
};
init();

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

async function fetchCapital(city){
    const rCity = await fetch(`https://restcountries.eu/rest/v2/capital/`+city);
    const resp = await rCity.json();
    cityName.value = resp[0].capital;
    lat.value = resp[0].latlng[0];
    long.value = resp[0].latlng[1];
    pop.value = resp[0].population;
}

// rebuildCards();

// window.addEventListener('click', (() => {
//     updatePage();
// }));

function moveOutCity(num, city) {
    if (num!="") {
        for (const keyCount in controller.cities) {
            if (controller.cities[keyCount].name===city) {
                controller.cities[keyCount].movedOut(num);
                // console.log('city object: ', controller.cities[keyCount]);
                cityFetch.update(controller.cities[keyCount]);
                // console.log(num+' people move out from '+city);
                updatePage();
                clearDisplay();
            }
        }
        
    } else {
        console.log("input must be non-zero.");
    }
}

function moveInCity(num, city) {
    if (num!="") {
        for (const keyCount in controller.cities) {
            if (controller.cities[keyCount].name===city) {
                controller.cities[keyCount].movedIn(num);
                cityFetch.update(controller.cities[keyCount]);
                // console.log(num+' people move in from '+city);
                updatePage();
                clearDisplay();
            }
        }

    } else {
        console.log("input must be non-zero.");
    }
}



rightPanel.addEventListener('click', ((e) => {
    switch(e.target.textContent) {
        case 'Show':
            const name = e.target.previousSibling.textContent
            showCity(name);
            break;
        case 'Move Out':
            const varMoveOut = e.target.previousSibling.value;
            const varCity = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
            moveOutCity(varMoveOut, varCity);
            break;
        case 'Move In':
            const varMoveIn = e.target.nextSibling.value;
            const varCityIn = e.target.parentNode.parentNode.childNodes[0].childNodes[0].textContent;
            moveInCity(varMoveIn, varCityIn);
            break;
    }
}));

function clearDisplay() {
    displayCityOutput.textContent = "";
    displayLatOutput.textContent = "";
    displayLongOutput.textContent = "";
    displayPopOutput.textContent = "";
    displayKeyOutput.textContent = "";
    displayHemOutput.textContent = "";
    displaySetOutput.textContent = "";
};

randomCity.addEventListener('click', (() => {
    const rando = Math.floor(Math.random() * capitals.capitals.length)
    fetchCapital(capitals.capitals[rando]);
}));

displayDelCity.addEventListener('click', (() => {
    if (!displayKeyOutput.textContent==``) {
        cityFetch.delete(displayKeyOutput.textContent);
        controller.deleteCity(displayKeyOutput.textContent);

        clearDisplay();

        updatePage();
        
    } else {
        console.log(`select 'show' form a city card on the right pane`);
    }
}));

cityAdd.addEventListener('click', (() => {
    console.log('Add City');
}));

document.addEventListener('DOMContentLoaded', async () => {
    const caps = await fetch(`https://restcountries.eu/rest/v2/regionalbloc/eu`);
    const resp = await caps.json();

    for (const city in resp) {
        capitals.addCapital(resp[city].capital);
    }
});

cityAdd.addEventListener('click', (() => {
    addCity();
}));
