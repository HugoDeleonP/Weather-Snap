const API_KEY = "bcd14548ccdb9f43c17c663a09759876";

export async function requestGeoCode(city){

    const geoCode = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`

    const responseGeoCode = await fetch(geoCode); 
    const geoData = await responseGeoCode.json();

    return requestWeather(geoData);

}

async function requestWeather(geoData){

    const weatherCode = `https://api.openweathermap.org/data/2.5/weather?lat=${geoData[0].lat}&lon=${geoData[0].lon}&appid=${API_KEY}`

    const responseWeatherCode = await fetch(weatherCode);
    const dados = await responseWeatherCode.json();

    console.log(dados);

    return dados;

}