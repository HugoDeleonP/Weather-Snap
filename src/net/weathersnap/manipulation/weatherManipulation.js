import { requestGeoCode } from "../api/meteoCommunication.js";

const apiData = requestGeoCode("Jaraguá do Sul");

export function manipulationComponents(){
    return `
    <main class="weather
    p-[1rem] flex flex-col gap-[1rem]
    bg-[rgb(147,195,252)]  ">

        <div class="weather__time flex flex-col gap-[2rem] justify-between ">

            ${manipulationInformations()}
            ${manipulationQuantity()}
            ${manipulationDetails()}
            ${manipulationMessage()}
            ${manipulationNextDays()}

        </div>



    </main>
    `

}

function manipulationInformations(){
    return `
            <div class="weather__informations flex flex-row justify-between items-start">

                <div class="weather__city-date ">
                    <h2 class="weather__city 
                    text-[1.25rem]
                    font-bold">${apiData.name}, ${apiData.country}</h2>
                    <p class="weather__date"> {dia da semana}, {data}</p>
                </div>

                <div class="weather__icon-functions
                flex flex-row gap-[0.5rem]">
                    <img src="./assets/compare.svg" alt="" 
                    class="bg-[rgb(182,214,253)] p-[0.4rem] rounded-[2rem]">

                    <img src="./assets/share.svg" alt="" 
                    class="bg-[rgb(182,214,253)] p-[0.4rem] rounded-[2rem]">
                </div>

            </div>
    `
}

function manipulationQuantity(){
    return `
        <div class="weather__quantity self-center flex flex-row gap-[1rem]">
                <img src="" alt="Weather image">
                <h2 class="weather__temperature text-[1rem]">
                    {quantidade de temperatura}
                </h2>
        </div>
    `
}

function manipulationDetails(){
    return `
        <div class="weather__details self-center">

            <h3 class="weather__period text-center">
                {Tempo em que está}
            </h3>

            <div class="weather__measurements flex flex-row gap-[1rem]">
                
                <div class="weather__wind">
                    <img src="" alt="">
                    <p>{velocidade de vento} km/h</p>
                </div>

                <div class="weather__umidity">
                    <img src="" alt="">
                    <p>{percentual de umidade}%</p>
                </div>

            </div>

        </div>    
    `
}

function manipulationMessage(){
    return `
        <div class="weather__message bg-[rgb(155,199,252)]">
            <p class="text-center">{mensagem}</p>
        </div>    
    `
}

function manipulationNextDays(){
    return `
        <div class="weather__next-days">

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

    </div>
    `
}