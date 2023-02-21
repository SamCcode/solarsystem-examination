function generateInfoUi (){
    let data = localStorage.getItem("clickedPlanet")
    data = JSON.parse(data);
    let infoWrapper = document.querySelector(".info-wrapper")
    infoWrapper.innerHTML = `
    <h1 class="planet__name">${data.name}</h1>
    <h2 class="planet__latin-name">${data.latinName}</h2>
    <h3 class="planet__type">${data.type}</h2>
    <p>${data.desc}</p>
    <p> antal jorddygn runt sin egen axel: ${data.rotation}</p>
    <p> antal jorddygn runt solen: ${data.orbitalPeriod}</p>
    <h3>Omkrets:<br><span>${data.circumference}</span></h3>
    <h3>Km från solen:<br><span>${data.distance}</span></h3>
    <h3>Max temp:<br><span>${data.temp.day}</span></h3>
    <h3>Min temp:<br><span>${data.temp.night}</span></h3>
    <h3>Månar:<br><span>${data.moons}</span></h3>
    <a href="../html/index.html">mer info!</a>
    `
}

generateInfoUi()