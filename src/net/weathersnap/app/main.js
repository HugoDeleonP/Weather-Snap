import {manipulationComponents, manipulationNextDays} from "../manipulation/weatherManipulation.js";

import { getAllDataWeather } from "../api/meteoCommunication.js";
import setupSearch from "../events/searchButton.js";

const main_component = document.querySelector(".weather");
const nextDays = document.querySelector(".weather__next-days");


async function updateWeather(city = "Jaraguá do Sul"){    

    try{

        const {weather, forecast} = await getAllDataWeather(city);

        main_component.innerHTML = manipulationComponents(weather);
        nextDays.innerHTML = manipulationNextDays(forecast);

    }catch(error){
        console.error("Erro ao buscar dados metereológicos: ", error);
    }
}
    
function main(){

    //updateWeather()
    setupSearch(updateWeather)
}

main()