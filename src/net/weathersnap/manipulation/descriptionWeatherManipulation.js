

export default function chooseImageDescriptionWeather(){
    const weatherId = apiData["weather"][0]["id"]

    const thunderstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
    const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
    const rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
    const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
    const atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
    const clear = 800;
    const clouds = [801, 802, 803, 804];

    switch(true){
        case thunderstorm.includes(weatherId):

        return "../../../assets/cloud-lightning-fill";

        case drizzle.includes(weatherId):

        break;

        case rain.includes(weatherId):

        break;

        case snow.includes(weatherId):

        break;

        case atmosphere.includes(weatherId):

        break;

        case clear.includes(weatherId):

        break;

        case clouds.includes(weatherId):

        return "../../../assets/clouds-fill";

        default:

        console.log("ID INVÁLIDO");
        break;


    }
    
    
}