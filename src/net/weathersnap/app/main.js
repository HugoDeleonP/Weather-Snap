import { manipulationComponents, manipulationNextDays } from "../manipulation/weatherManipulation.js";

import { requestGeoCode } from "../api/meteoCommunication.js";
import setupSearch from "../events/searchButton.js";

const main_component = document.querySelector(".weather");
const nextDays = document.querySelector(".weather__next-days");


async function updateWeather(city = "Jaraguá do Sul"){    

    try{
        const apiDataRealTime = await requestGeoCode(city);

        main_component.innerHTML = manipulationComponents(apiDataRealTime);

        const apiDataNextDays = await requestGeoCode(city, false);

        nextDays.innerHTML = manipulationNextDays(apiDataNextDays);

    }catch(error){
        console.log(error);
    }
}

function main(){
    setupSearch(updateWeather)
}

main()