import {filterDescriptionWeatherToImage, filterDescriptionWeatherToMessage} from "../service/descriptionWeatherFilter.js"; 
import { returnDayWeek, returnDate } from "../service/weatherDate.js";

export function manipulationComponents(apiData){

    const mainWeather = document.querySelector(".weather");
    mainWeather.classList.toggle('animate-pulse') 


    return `


        <div class="weather__time flex flex-col gap-[2rem] justify-between ">

            ${manipulationInformations(apiData)}
            ${manipulationQuantity(apiData)}
            ${manipulationDetails(apiData)}
            ${manipulationMessage(apiData)}

        </div>

        
        

    `

}

function manipulationInformations(apiData){

    console.log(`${apiData.sys.country}`);

    const weatherDate = new Date(apiData["dt"]  * 1000);
    
    

    return `
            <div class="weather__informations flex flex-row justify-between items-start">

                <div class="weather__city-date ">
                    <h2 class="weather__city 
                    text-[0.75rem] font-bold
                    md:text-[1.5rem]
                    ">${apiData["name"]}, ${apiData["sys"]["country"]}</h2>
                    <p class="weather__date text-[0.5rem]
                    md:text-[1rem]
                    "> ${returnDayWeek(weatherDate)}, ${returnDate(weatherDate)}</p>
                </div>

                <div class="weather__icon-functions
                flex flex-row gap-[0.5rem]">
                    <img src="./assets/compare.svg" alt="" 
                    class="bg-[#02819E] p-[0.4rem] rounded-[2rem]">

                    <img src="./assets/share.svg" alt="" 
                    class="bg-[#02819E] p-[0.4rem] rounded-[2rem]">
                </div>

            </div>
    `
}

function manipulationQuantity(apiData){
    return `
        <div class="weather__quantity self-center flex flex-row items-center gap-[1rem]">
                <img src="${filterDescriptionWeatherToImage(apiData)}" alt="Weather image"
                class="h-[5rem]">
                <h2 class="weather__temperature text-[3rem]
                font-bold">
                    ${Math.floor(apiData["main"]["temp"]) }°C
                </h2>
        </div>
    `
}

function manipulationDetails(apiData){
    const description = apiData["weather"][0]["description"];

    const firstLetterCapital = description.charAt(0).toUpperCase();
    const remainingDescription = description.slice(1);
    return `
        <div class="weather__details self-center">

            <h3 class="weather__period text-center">
                ${firstLetterCapital+remainingDescription}
            </h3>

            <div class="weather__measurements flex flex-row gap-[1rem] px-[-2rem]">
                
                <div class="weather__wind flex flex-row gap-[0.5rem]">
                    <img src="./assets/wind.svg" alt="">
                    <p>${apiData["wind"]["speed"]} km/h</p>
                </div>

                <div class="weather__umidity flex flex-row gap-[0.5rem]">
                    <img src="./assets/droplet.svg" alt="">
                    <p>${apiData["main"]["humidity"]} %</p>
                </div>

            </div>

        </div>    
    `
}

function manipulationMessage(apiData){
    return `
        <div class="weather__message bg-[#02819E]">
            <p class="text-center">${filterDescriptionWeatherToMessage(apiData)}</p>
        </div>    
    `
}

export function manipulationNextDays(apiData){

    const firstDay = apiData["list"][4];
    const firstDayDate = new Date(firstDay["dt"] * 1000);

    const secondDay = apiData["list"][12];
    const secondDayDate = new Date(secondDay["dt"] * 1000);


    const thirdDay = apiData["list"][20];
    const thirdDayDate = new Date(thirdDay["dt"] * 1000);


    return `

        <h3 class="
            text-[0.75rem] font-bold
            md:text-[1.5rem]
            rounded-md h-10 w-[25%]
            bg-[#01586B]
        ">
        Próximos dias</h3>

        <div class="weather__days-information flex flex-row justify-between gap-[2rem]">

            <div class="weather__first-day flex flex-col
            rounded-md h-20 w-[100%]
            bg-[#02819E]
            ">
                <p class="weather__day">${returnDayWeek(firstDayDate)}</p>
                <img src="${filterDescriptionWeatherToImage(firstDay)}" alt="" class="weather__image">
                <p class="weather__day-temperature">${Math.floor(firstDay["main"]["temp"]) }°C</p>
            </div>

            <div class="weather__second-day
            rounded-md h-20 w-[100%]
            bg-[#02819E]
            ">
                <p class="weather__day">${returnDayWeek(secondDayDate)}</p>
                <img src="${filterDescriptionWeatherToImage(secondDay)}" alt="" class="weather__image">
                <p class="weather__day-temperature">${Math.floor(secondDay["main"]["temp"]) }°C</p>
            </div>

            <div class="weather__third-day
            rounded-md h-20 w-[100%]
            bg-[#02819E]
            ">
                <p class="weather__day">${returnDayWeek(thirdDayDate)}</p>
                <img src="${filterDescriptionWeatherToImage(thirdDay)}" alt="" class="weather__image">
                <p class="weather__day-temperature ">${Math.floor(thirdDay["main"]["temp"]) }°C</p>
            </div>

        </div>

    `
}