const API_KEY = "bcd14548ccdb9f43c17c663a09759876";

export async function requestGeoCode(city, inRealTime = true){

    const geoCode = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`

    const responseGeoCode = await fetch(geoCode); 
    const geoData = await responseGeoCode.json();

    console.log(geoData[0].name)

    if(inRealTime){
        return Promise.resolve(requestWeather(geoData));
    }
    else{
        return Promise.resolve(requestForecast(geoData));
    }

}


async function requestWeather(geoData){

    const weatherCode = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_KEY}&lang=pt_br&units=metric&type=hour`

    const responseWeatherCode = await fetch(weatherCode);
    const dados = await responseWeatherCode.json();

    console.log(dados.name);

    return dados;

}


async function requestForecast(geoData){
    
    const forecastCode = `https://api.openweathermap.org/data/2.5/forecast?lat=${geoData[0].lat}&lon=${geoData[0].lon}&cnt=10&appid=${API_KEY}&lang=pt_br&units=metric&type=hour`

    const responseForecast = await fetch(forecastCode);
    const dados = await responseForecast.json();

    console.log(dados["list"][0]);

    return dados;

}