const days = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];
const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

export function returnDayWeek(weatherDate){

    return days[weatherDate.getDay()];
}


export function returnDate(weatherDate){

    const date = weatherDate.getDate()
    const monthActual = months[weatherDate.getMonth()];
    

    return `${date} De ${monthActual}`;
}