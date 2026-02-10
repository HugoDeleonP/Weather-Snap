const thunderstorm = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232];
const drizzle = [300, 301, 302, 310, 311, 312, 313, 314, 321];
const rain = [500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
const snow = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
const atmosphere = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781];
const clear = [800];
const clouds = [801, 802, 803, 804];

export function filterDescriptionWeatherToImage(apiData){
    const weatherId = apiData["weather"][0]["id"]

    switch(true){
        case thunderstorm.includes(weatherId):

        return "../../../../assets/cloud-lightning-fill.svg";

        case drizzle.includes(weatherId):

        return "../../../../assets/cloud-drizzle-fill.svg";

        case rain.includes(weatherId):

        return "../../../../assets/cloud-rain-fill.svg";

        case snow.includes(weatherId):

        return "../../../../assets/cloud-snow-fill.svg";

        case atmosphere.includes(weatherId):

        return "../../../../assets/cloud-fog2-fill.svg";

        case clear.includes(weatherId):

        return "../../../../assets/clear-fill.svg";

        case clouds.includes(weatherId):

        return "../../../../assets/clouds-fill.svg";

        default:

        console.log("ID INVÁLIDO");
        return null;


    }
    
    
}

export function filterDescriptionWeatherToMessage(apiData){
    const weatherId = apiData["weather"][0]["id"]

    switch(true){
        case thunderstorm.includes(weatherId):

        return "O céu está elétrico hoje! Melhor ficar em casa e curtir o show da janela.";

        case drizzle.includes(weatherId):

        return "Só aquela chuvinha molha-bobo. Nem precisa abrir o guarda-chuva.";

        case rain.includes(weatherId):

        return "Clima perfeito para um café e um bom livro (ou maratonar uma série).";

        case snow.includes(weatherId):

        return "O mundo ficou branco! Hora de fazer bonecos de neve ou se enrolar no cobertor.";

        case atmosphere.includes(weatherId):

        return "O dia amanheceu misterioso. A cidade sumiu no meio da névoa.";

        case clear.includes(weatherId):

        return "Céu de brigadeiro! O dia está pedindo um passeio lá fora.";

        case clouds.includes(weatherId):

        return "O sol tirou uma folga hoje. Luz suave e clima cinza.";

        default:

        console.log("ID INVÁLIDO");
        return null;


    }
    
    
}