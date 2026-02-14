const API_KEY = "bcd14548ccdb9f43c17c663a09759876";

async function requestGeoCode(city){

    const geoCode = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`

    const responseGeoCode = await fetch(geoCode); 
    const geoData = await responseGeoCode.json();

    return geoData[0];  

}


async function requestWeather(lat, lon){

    const weatherCode = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&units=metric&type=hour`

    const responseWeatherCode = await fetch(weatherCode);
    return await responseWeatherCode.json();

}


async function requestForecast(lat, lon){
    
    const forecastCode = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=23&appid=${API_KEY}&lang=pt_br&units=metric&type=hour`

    const responseForecast = await fetch(forecastCode);
    return await responseForecast.json();

}

export async function getAllDataWeather(city){
    const coords = await requestGeoCode(city);
   
    const [weather, forecast] = await Promise.all([
        requestWeather(coords.lat, coords.lon),
        requestForecast(coords.lat, coords.lon)
    ])

    return {weather, forecast};

}