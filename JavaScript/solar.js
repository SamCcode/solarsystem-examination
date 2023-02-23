let planetsWrapper = document.querySelector(".planets-wrapper");
let planetList =[];
let searchWrapper = document.querySelector(".search-wrapper")
let content = searchWrapper.innerHTML;

// hämta data
async function getPlanetsData (){
    let data = await fetch('https://majazocom.github.io/Data/solaris.json')
    data = await data.json();
    return data;
}

async function generateClickableUI() {
    let data = await getPlanetsData()
    for (let i = 0; i < data.length; i++) {
        planetList.push(data[i])
        let planetUi = document.createElement("aside");
        planetUi.classList.add("planets");
        planetUi.setAttribute("id", data[i].name)
        planetUi.innerHTML = `<p class="hover-text">${data[i].name}</p>`
        planetsWrapper.appendChild(planetUi)
        planetUi.addEventListener("click", () =>{
            localStorage.setItem("clickedPlanet", JSON.stringify(data[i]))
            generateInfo(data[i]);
            
        });
    }
}

function generateInfo(data) {
    searchWrapper.innerHTML = `
    <h1 class="planet__name">${data.name}</h1>
    <button class="back-x">&#10005</button>
    <h3 class="planet__latin-name">Latin: ${data.latinName}</h3>
    <div class ="generated-info">
    <h3>Omkrets:<br><span>${data.circumference}</span></h3>
    <h3>Km från solen:<br><span>${data.distance}</span></h3>
    <h3>Max temp:<br><span>${data.temp.day}</span></h3>
    <h3>Min temp:<br><span>${data.temp.night}</span></h3>
    </div>
    <div class="mons">
    <h3>Månar: ${data.moons}</h3>
    </div>
    <a href="../html/info.html">mer info!</a>
    `
    let backX = document.querySelector(".back-x");
        backX.addEventListener("click", () => {
        searchWrapper.innerHTML = content;
        addEventListenerToPlanetSearch()
        })
}

function addEventListenerToPlanetSearch(){
    let searchText = document.querySelector(".planet-search");
    searchText.addEventListener("click", () =>{
        searchPlanet()
    })
}

function searchPlanet() {
    searchWrapper.innerHTML = `
    <input type="text" id="search" style="text-transform: uppercase" placeholder="skriv och tryck enter">
    <span class="placeholder"></span> 
    `
    let input = document.querySelector("#search");
    input.addEventListener("keyup", (keyPress) => {
    let inputValue = input.value;
    console.log(inputValue.toUpperCase());
    let inputSearch = document.querySelector(".placeholder");
    for (i = 0; i < planetList.length; i++) {
        if (inputValue.length === 0) {
            inputSearch.innerHTML = ""
        }
        else if (inputValue.length <= 1 && inputValue.toUpperCase().charAt(0) === planetList[i].name.toUpperCase().charAt(0)){
            inputSearch.innerHTML = planetList[i].name.toUpperCase();
            if (keyPress.keyCode === 13){
                // console.log(inputSearch.innerHTML);
                renderInfoToUi(planetList[i])
                console.log("hej");
            }
            break
        }
        else if (inputValue.length > 1 && planetList[i].name.toUpperCase().includes(inputValue.toUpperCase())) {
            inputSearch.innerHTML = planetList[i].name.toUpperCase();
            if (keyPress.keyCode === 13){
                // console.log(planetList[i]);
                renderInfoToUi(planetList[i])
                console.log("jaaaaa");
            }
            
            
        }
    }

    if (inputSearch.innerHTML.toUpperCase().includes(inputValue.toUpperCase()) && keyPress.keyCode === 13){
    } else if (keyPress.keyCode === 13){
        wrongChars()
    }
    if (inputSearch.innerHTML.toUpperCase().includes(inputValue.toUpperCase())) {}
    else {
        inputSearch.innerHTML = "";
    }
        
        })
    }




function renderInfoToUi(searchPlanet) {
    console.log(searchPlanet);
    localStorage.setItem("searchPlanet", JSON.stringify(searchPlanet))
    searchWrapper.innerHTML = `
    <h2>${searchPlanet.name}</h2>
    <button class="back-x">&#10005</button>
    <p">${searchPlanet.desc}</p> 
    <a href="../html/info.html">Tryck här för mer info!</a>
        `
    let backX = document.querySelector(".back-x");
    backX.addEventListener("click", () => {
        console.log("hej");
        searchWrapper.innerHTML = `
        <h1 class="planet-search">Vill du söka på en planet?</h1>
        `
        addEventListenerToPlanetSearch()
    })
}

function wrongChars() {
    searchWrapper.innerHTML = `
    <h2>väldigt ledsen men det du sökte var ingen planet...</h2>
    <button class="back-btn">Försök igen</button>
    `
  let backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", () => {
    searchPlanet();
})
}


generateClickableUI()
addEventListenerToPlanetSearch()

