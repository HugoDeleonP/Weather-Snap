import {filterDescriptionWeatherToImage, filterDescriptionWeatherToMessage} from "../service/descriptionWeatherFilter.js"; 

export function manipulationComponents(apiData){
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

    const dayWeek = Date(apiData["dt"]  * 1000);

    return `
            <div class="weather__informations flex flex-row justify-between items-start">

                <div class="weather__city-date ">
                    <h2 class="weather__city 
                    text-[0.75rem] font-bold
                    md:text-[1.5rem]
                    ">${apiData["name"]}, ${apiData["sys"]["country"]}</h2>
                    <p class="weather__date text-[0.5rem]
                    md:text-[1rem]
                    "> ${dayWeek}, {data}</p>
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

            <div class="weather__measurements flex flex-row gap-[1rem]">
                
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
    return `

        <h3>Próximos dias</h3>

        <div class="weather__days-information flex flex-row">

            <div class="weather__first-day flex flex-col ">
                <p class="weather__day">{dia da semana}</p>
                <img src="" alt="" class="weather__image">
                <p class="weather__day-temperature">{temperatura} °C</p>
            </div>

            <div class="weather__second-day">
                <p class="weather__day">{dia da semana}</p>
                <img src="" alt="" class="weather__image">
                <p class="weather__day-temperature">{temperatura} °C</p>
            </div>

            <div class="weather__third-day">
                <p class="weather__day">{dia da semana}</p>
                <img src="" alt="" class="weather__image">
                <p class="weather__day-temperature ">{temperatura} °C</p>
            </div>

        </div>

    `
}