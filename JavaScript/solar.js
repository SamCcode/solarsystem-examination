let planetsWrapper = document.querySelector(".planets-wrapper");
let planetList =[];
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
        planetsWrapper.appendChild(planetUi)
        planetUi.addEventListener("click", () =>{
            localStorage.setItem("clickedPlanet", JSON.stringify(data[i]))
            generateInfo(data[i]);
            
        });
    }
}

function generateInfo(data) {
    let planetInfo = document.querySelector(".planet-info");
    planetInfo.innerHTML = `
    <h1 class="planet__name">${data.name}</h1>
    <h2 class="planet__latin-name">${data.latinName}</h2>
    <h3>Omkrets:<br><span>${data.circumference}</span></h3>
    <h3>Km från solen:<br><span>${data.distance}</span></h3>
    <h3>Max temp:<br><span>${data.temp.day}</span></h3>
    <h3>Min temp:<br><span>${data.temp.night}</span></h3>
    <h3>Månar:<br><span>${data.moons}</span></h3>
    <a href="../html/info.html">mer info!</a>
    `
}


function searchPlanet() {
    let input = document.querySelector("#search");
    let header = document.querySelector("header");
    input.addEventListener("change", () => {
        for (i = 0; i < planetList.length; i++) {
            console.log(planetList[i].name);
            if (input.value === planetList[i].name) {
                localStorage.setItem("clickedPlanet", JSON.stringify(planetList[i]))
            header.innerHTML = `
            <h1 class="header__h1">SOLSYSTEMET</h1>
            <section class="header__value">
            <h2>Du har sökt på ${planetList[i].name}!</h2>
            <a href="../html/info.html">Yaaay, ge mig info!</a>
            <a href="../html/info.html">Näääy, jag vill söka igen!</a>
            </section>
            `
                return;
            }
        }
            header.innerHTML = `
            <h1 class="header__h1">SOLSYSTEMET</h1>
            <section class="header__novalue">
            <h2>väldigt ledsen men det du sökte var ingen planet...</h2>
            <a href="../html/index.html">Försök igen!</a>
            </section>
            `
          console.log('value not found')
          input.value = "";
    })
}
searchPlanet()
generateClickableUI()

