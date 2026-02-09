const searchInput = document.querySelector("#search__input");
const headerButtonConfirm = document.querySelector(".header__button-confirm");

export default function setupSearch(onSearchExecute){
        
    headerButtonConfirm.addEventListener( "click", () => {
        triggerSearch(onSearchExecute);

    });

    searchInput.addEventListener( "keydown", (event) =>{

        if(event.key === "Enter"){
            triggerSearch(onSearchExecute);
        }
    })

    searchInput.addEventListener( "input", event =>{
        const city = event.target.value;
        
    });



}


function triggerSearch(onSearchExecute){
    const city = searchInput.value;
    if (city) onSearchExecute(city);
}