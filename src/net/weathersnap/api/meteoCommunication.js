const API_KEY = "bcd14548ccdb9f43c17c663a09759876";


async function request(){

    const response = await fetch(""); 
    const dados = response.json();



}

export function returnKey(){
    return API_KEY;
}