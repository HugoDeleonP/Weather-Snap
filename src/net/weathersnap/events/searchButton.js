const searchInput = document.querySelector("#search__input");
const headerButtonConfirm = document.querySelector(".header__button-confirm");

export default function setupSearch(onSearchExecute){
        
    headerButtonConfirm.addEventListener( "click", () =>{
        const city = searchInput.value;
        if (city) onSearchExecute(city);

    });

    searchInput.addEventListener( "input", event =>{
        const city = event.target.value;
        
    });

}


