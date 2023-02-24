function generateInfoUi (){
    let data = localStorage.getItem("clickedPlanet")
    data = JSON.parse(data);
    let infoWrapper = document.querySelector(".info-wrapper")
    infoWrapper.innerHTML = `
    <h1 class="planet__name">${data.name}</h1>
    <h3 class="planet__latin-name">Latinskt namn: ${data.latinName}</h3>
    <h3 class="planet__type">Typ av planet: ${data.type}</h2>
    <p>${data.desc}</p>
    <h3> antal jorddygn runt sin egen axel: ${data.rotation}</h3>
    <h3> antal jorddygn runt solen: ${data.orbitalPeriod}</h3>
    <div class ="data-wrapper">
    <h3>Omkrets:<br>${data.circumference}</h3>
    <h3>Km från solen:<br>${data.distance}</h3>
    <h3>Max temp: ${data.temp.day}</h3>
    <h3>Min temp: ${data.temp.night}</h3>
    </div>
    <div class="mons">
    <h3>Månar:<br>${data.moons}</h3>
    
    <a href="../html/index.html">Tillbaka!</a>
    `
}

generateInfoUi()