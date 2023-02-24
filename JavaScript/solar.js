let planetsWrapper = document.querySelector(".planets-wrapper");
let listOfAllPlanets =[];
let searchWrapper = document.querySelector(".search-wrapper")
let content = searchWrapper.innerHTML;

// hämta data
async function fetchPlanetsData (){
    let data = await fetch('https://majazocom.github.io/Data/solaris.json')
    data = await data.json();
    return data;
}

// gör klickbara "planeter"
async function renderPlanetsToUI() {
    let data = await fetchPlanetsData()
    for (let i = 0; i < data.length; i++) {
        listOfAllPlanets.push(data[i]);
        let planetUi = document.createElement("aside");
        planetUi.classList.add("planets");
        planetUi.setAttribute("id", data[i].name);
        planetUi.innerHTML = `<p class="hover-text">${data[i].name}</p>`
        planetsWrapper.appendChild(planetUi);
        planetUi.addEventListener("click", () =>{
            localStorage.setItem("clickedPlanet", JSON.stringify(data[i]));
            renderOnclickUi(data[i]);
        });
    }
}

// rendera info ifall planeterna klickas på
function renderOnclickUi(data) {
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
    <div class="moons">
    <h3>Månar: ${data.moons}</h3>
    </div>
    <span class="left-arrow">&#171</span>
    <a href="../html/info.html">mer info!</a>
    <span class="right-arrow">&#187</span>
    `
    // lägg till eventlyssnare till krysset
    let backX = document.querySelector(".back-x");
        backX.addEventListener("click", () => {
        searchWrapper.innerHTML = content;
        addEventListenerToPlanetSearch()
        })
        // lägg till eventlystnare till pilar
    let leftArrow = document.querySelector(".left-arrow");
    let rightArrow = document.querySelector(".right-arrow");
    leftArrow.addEventListener("click", () => {
        LeftArrowFunction(data)
    })
    rightArrow.addEventListener("click", () => {
        RightArrowFunction(data)
    })
}
// funktion för vänsterpil när du klickat på en planet
function LeftArrowFunction(data) {
    for (let i = 0; i < listOfAllPlanets.length; i++){
        if (listOfAllPlanets[i].name === data.name && listOfAllPlanets[i].id > 0){
            let formerPlanet = listOfAllPlanets[i-1]
            renderOnclickUi(formerPlanet)
            break
        }
    }
}
// funktion för högerpil när du klickat på en planet 
function RightArrowFunction(data) {
    for (let i = 0; i < listOfAllPlanets.length; i++){
        if (listOfAllPlanets[i].name === data.name && listOfAllPlanets[i].id < 8){
            let nextPlanet = listOfAllPlanets[i+1]
            renderOnclickUi(nextPlanet)
            break
        }
    }
}
// gör texten "vill du söka på en planet" klickbar
function addEventListenerToPlanetSearch(){
    let searchText = document.querySelector(".planet-search");
    searchText.addEventListener("click", () =>{
        inputSearchPlanet()
    })
}
// renderar UI till sökrutan samt hanterar sökningar
function inputSearchPlanet() {
    searchWrapper.innerHTML = `
    <input type="text" id="search" style="text-transform: uppercase" placeholder="skriv och tryck enter">
    <span class="placeholder"></span> 
    `
    let input = document.querySelector("#search");
    input.addEventListener("keyup", (keyPress) => {
    let writtenInputChars = input.value;
    let rightWordUi = document.querySelector(".placeholder");
    for (i = 0; i < listOfAllPlanets.length; i++) {
        if (writtenInputChars.length === 0) {
            rightWordUi.innerHTML = ""
        } 
        else if (writtenInputChars.length <= 1 && writtenInputChars.toUpperCase().charAt(0) === listOfAllPlanets[i].name.toUpperCase().charAt(0)){
        rightWordUi.innerHTML = listOfAllPlanets[i].name.toUpperCase();
            if (keyPress.keyCode === 13){
                    localStorage.setItem("clickedPlanet", JSON.stringify(listOfAllPlanets[i]))
                    renderSearchedInfoToUi(listOfAllPlanets[i])
                }
                break
        }
        else if (writtenInputChars.length > 1 && listOfAllPlanets[i].name.toUpperCase().includes(writtenInputChars.toUpperCase()) && writtenInputChars.toUpperCase().charAt(0) === listOfAllPlanets[i].name.toUpperCase().charAt(0)) {
            rightWordUi.innerHTML = listOfAllPlanets[i].name.toUpperCase();
            if (keyPress.keyCode === 13){
            localStorage.setItem("clickedPlanet", JSON.stringify(listOfAllPlanets[i]))
            renderSearchedInfoToUi(listOfAllPlanets[i])
            }
        }
    }
    if (rightWordUi.innerHTML.toUpperCase().includes(writtenInputChars.toUpperCase()) && keyPress.keyCode === 13){
    } 
    else if (keyPress.keyCode === 13){
        wrongCharsSearched()
    }
    if (rightWordUi.innerHTML.toUpperCase().includes(writtenInputChars.toUpperCase())) {
    }
    else {
        rightWordUi.innerHTML = "";
    }
        
    })
}

// renderar information om den sökta planeten till UI 
function renderSearchedInfoToUi(inputSearchPlanet) {
    localStorage.setItem("inputSearchPlanet", JSON.stringify(inputSearchPlanet))
    searchWrapper.innerHTML = `
    <h2>${inputSearchPlanet.name}</h2>
    <button class="back-x">&#10005</button>
    <p">${inputSearchPlanet.desc}</p> 
    <span class="left-searcharrow">&#171</span>
    <a href="../html/info.html">Tryck här för mer info!</a>
    <span class="right-searcharrow">&#187</span>
    
        `
    let backX = document.querySelector(".back-x");
    backX.addEventListener("click", () => {
        searchWrapper.innerHTML = `
        <h1 class="planet-search">Vill du söka på en planet?</h1>
        `
        addEventListenerToPlanetSearch()
    })
    let leftSearchArrow = document.querySelector(".left-searcharrow");
    let rightSearchArrow = document.querySelector(".right-searcharrow");
    leftSearchArrow.addEventListener("click", () => {
        LeftSearchArrowFunction(inputSearchPlanet)
    })
    rightSearchArrow.addEventListener("click", () => {
        RightSearchArrowFunction(inputSearchPlanet)
    })
}

// funktion för vänsterpil när du klickat på en planet
function LeftSearchArrowFunction(data) {
    for (let i = 0; i < listOfAllPlanets.length; i++){
        if (listOfAllPlanets[i].name === data.name && listOfAllPlanets[i].id > 0){
            let formerSearchPlanet = listOfAllPlanets[i-1]
            renderSearchedInfoToUi(formerSearchPlanet)
            break
        }
    }
}
// funktion för högerpil när du klickat på en planet 
function RightSearchArrowFunction(data) {
    for (let i = 0; i < listOfAllPlanets.length; i++){
        if (listOfAllPlanets[i].name === data.name && listOfAllPlanets[i].id < 8){
            let nextSearchPlanet = listOfAllPlanets[i+1]
            renderSearchedInfoToUi(nextSearchPlanet)
            break
        }
    }
}
// vad som händer om man söker fel
function wrongCharsSearched() {
    searchWrapper.innerHTML = `
    <h2>väldigt ledsen men det du sökte var ingen planet...</h2>
    <button class="back-btn">Försök igen</button>
    `
  let backBtn = document.querySelector(".back-btn");
  backBtn.addEventListener("click", () => {
    inputSearchPlanet();
})
}

renderPlanetsToUI()
addEventListenerToPlanetSearch()

