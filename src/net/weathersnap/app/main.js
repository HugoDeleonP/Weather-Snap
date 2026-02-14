import {manipulationComponents, manipulationNextDays} from "../manipulation/weatherManipulation.js";

import { getAllDataWeather } from "../api/meteoCommunication.js";
import setupSearch from "../events/searchButton.js";

const mainComponent = document.querySelector(".weather");


async function updateWeather(city = "Jaraguá do Sul"){    

    try{

        const {weather, forecast} = await getAllDataWeather(city);

        mainComponent.innerHTML = manipulationComponents(weather);

        const nextDaysComponent = document.querySelector(".weather__next-days");

        if (nextDaysComponent) {
            nextDaysComponent.innerHTML = manipulationNextDays(forecast);
        } else {
            console.error("Elemento .weather__next-days não encontrado no DOM.");
        }
    }catch(error){
        console.error("Erro ao buscar dados metereológicos: ", error);
    }
}

function main(){

    //updateWeather()
    setupSearch(updateWeather)
}

main()