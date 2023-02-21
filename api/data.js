let bodies = [
    {
        id: 0,
        type: 'star', // star, planet
        name: 'Solen',
        latinName: 'Solis',
        rotation: 83950000000, // jord dygn
        circumference: 4379000, // km omkrets
        temp: {
            day: 6000, // Celcius vid ytan
            night: 6000
        }, 
        distance: 0, // km från solen
        orbitalPeriod: 0, // jorddygn
        desc: 'Solen är stjärnan i solsystemet och det är runt den som de övriga delarna i solsystemet kretsar. Dess stora massa på 332 830 jordmassor ger den i dess innandöme en densitet som är hög nog för att upprätthålla fusion. Fusionen avger enorma mängder energi till rymden genom elektromagnetisk strålning, såsom synligt ljus.',
        moons: []
    },
    {
        id: 1,
        type: 'planet',
        name: 'Merkurius',
        latinName: 'Mercurialis',
        rotation: 58,
        circumference: 15329,
        temp: {
            day: 430,
            night: -173
        },
        distance: 57910000,
        orbitalPeriod: 88,
        desc: 'Merkurius är den planet som ligger närmast solen och är den minsta planeten (0,055 jordmassor). Merkurius har inga naturliga satelliter och dess enda kända geologiska strukturer förutom nedslagskratrar är kullar, klippor och dalar som troligen bildades under dess tidigaste historia. Merkurius nästan obetydliga atmosfär består av atomer som blåsts dit från solen av solvinden. Den relativt stora järnkärnan och tunna manteln har inte kunnat förklaras, men den främsta hypotesen är att de yttre lagren försvann från planeten vid en enorm kollision med ett annat planetariskt objekt.',
        moons: []
    },
    {
        id: 2,
        type: 'planet',
        name: 'Venus',
        latinName: 'Venus',
        rotation: 116,
        circumference: 38025,
        temp: {
            day: 430,
            night: -173
        },
        distance: 10820000,
        orbitalPeriod: 225,
        desc: 'Venus har nästan samma storlek som jorden (0,815 jordmassor). Venus är även på många andra sätt lik jorden då den har en tjock silikatmantel runt en järnkärna, en betydande atmosfär och sannolikt geologisk aktivitet. Men det finns även stora skillnader; Venus är mycket torrare än jorden och dess atmosfär är nästan 90 gånger tätare. Venus har inga naturliga satelliter och är den varmaste planeten i solsystemet med en yttemperatur på över 400 °C. Den höga temperaturen beror till största delen på mängden av växthusgaser, främst koldioxid, i atmosfären. Det finns inga definitiva bevis på att Venus i dag är geologiskt aktiv, men den saknar ett magnetfält som skulle förhindra att atmosfären försvinner ut i rymden. Detta kan betyda att atmosfären regelbundet fylls på av vulkanutbrott. Atmosfären är mycket tjock och består till största delen av koldioxid. Venus kallas även för aftonstjärna eller morgonstjärna eftersom planeten, beroende på fas, med blotta ögat kan ses från jorden antingen på kvällen eller morgonen. Mellan faserna kommer Venus för nära solen och kan då inte ses från jorden.',
        moons: []
    },
    {
        id: 3,
        type: 'planet',
        name: 'Jorden',
        latinName: 'Tellus',
        rotation: 1,
        circumference: 40075,
        temp: {
            day: 30,
            night: -10
        },
        distance: 149600000,
        orbitalPeriod: 365,
        desc: 'Jorden är den största och mest kompakta av de inre planeterna. Jorden är den enda av planeterna som konstaterats ha geologisk aktivitet och är även den enda planeten som med säkerhet härbärgerar liv. Dess flytande hydrosfär är unik bland stenplaneterna och jorden är också den enda planeten hos vilken plattektonik har observerats. Jordens atmosfär skiljer sig markant från de andra planeternas, vilket förklaras av att närvaron av levande organismer har förändrat atmosfären till att innehålla fritt syre, i dag motsvarande 21 procent.',
        moons: ['Månen']
    },
    {
        id: 4,
        type: 'planet',
        name: 'Mars',
        latinName: 'Mars',
        rotation: 1,
        circumference: 21344,
        temp: {
            day: -60,
            night: -140
        },
        distance: 55758006,
        orbitalPeriod: 687,
        desc: 'Mars är den fjärde planeten från solen och solsystemets näst minsta planet. Den har fått sitt namn efter den romerska krigsguden Mars och kallas ibland för "den röda planeten" på grund av sitt rödaktiga utseende. Den röda färgen beror på stora mängder järnoxid som finns fördelat över ytan och i atmosfären.',
        moons: ['Phobos', 'Deimos']
    },
    {
        id: 5,
        type: 'planet',
        name: 'Jupiter',
        latinName: 'Lovis',
        rotation: 0.4,
        circumference: 439264,
        temp: {
            day: -140,
            night: -140
        },
        distance: 750290000,
        orbitalPeriod: 4324,
        desc: 'Jupiter är den femte planeten från solen och är med stor marginal solsystemets största planet. Dess massa är 2,5 gånger så stor som alla de andra planeternas sammanlagda massa. Planeten är en så kallad gasjätte och man är inte säker på om planeten ens har en fast kärna.',
        moons: ['Europa', 'Ganymedes', 'Io', 'Callisto', 'Amalthea', 'Himalia']
    },
    {
        id: 6,
        type: 'planet',
        name: 'Saturnus',
        latinName: 'Saturnus',
        rotation: 0.4,
        circumference: 378675,
        temp: {
            day: -178,
            night: -178
        },
        distance: 1400000000,
        orbitalPeriod: 10585,
        desc: 'Saturnus är den sjätte planeten från solen och den näst största i solsystemet. Den är en gasjätte, känd sedan förhistorisk tid. Galileo Galilei var den första att observera den genom ett teleskop år 1610.',
        moons: ['Tethys', 'Titan', 'Aegir', 'Titan', 'Bergelmir', 'Bestla', 'Calypso', 'Daphnis', 'Dione', 'Enceladus', 'Epimetheus', 'Fenrir', 'Fornjot', 'Greip', 'Helene', 'Hyperion', 'Hyrrokkin', 'Janus', 'Jarnsaxa', 'Kari', 'Loge', 'Mimas','Pan', 'Pandora', 'Phoebe', 'Prometheus', 'Rhea', 'Skoll', 'Tarqeq', 'Tethys', 'Titan']
    },
    {
        id: 7,
        type: 'planet',
        name: 'Uranus',
        latinName: 'Uranus',
        rotation: 0.7,
        circumference: 160590,
        temp: {
            day: -205,
            night: -225
        },
        distance: 2871000000,
        orbitalPeriod: 30660,
        desc: 'Uranus är den sjunde planeten från solen. Uranus är en av solsystemets fyra jätteplaneter - Jupiter, Saturnus, Uranus och Neptunus - och är av ungefär samma storlek som Neptunus. Planetens diameter är ungefär 50 000 km och massan cirka 14,5 jordmassor.',
        moons: ['Titania', 'Umbriel', 'Miranda', 'Oberon', 'Ariel', 'Desdemona', 'Puck']
    },
    {
        id: 8,
        type: 'planet',
        name: 'Neptunus',
        latinName: 'Neptunus',
        rotation: 0.7,
        circumference: 155600,
        temp: {
            day: -193,
            night: -193
        },
        distance: 4495000000,
        orbitalPeriod: 60225,
        desc: 'Neptunus är den åttonde planeten från solen. Neptunus är en så kallad gasjätte, och har fått sitt namn efter havsguden Neptunus i romersk mytologi. Den 24 augusti 2006, då Internationella astronomiska unionen beslutade att Pluto inte längre var en planet, blev Neptunus den yttersta planeten i solsystemet.',
        moons: ['Triton', 'Sao', 'Hippocamp', 'Proteus', 'Despina', 'Nereid', 'Thalassa', 'Galatea', 'Neso', 'Halimede', 'Larissa','Psamathe', 'Naiad', 'Laomedeia']
    }
]
