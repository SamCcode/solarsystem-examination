addEventListener("fetch", (event) => {
    console.log(event)
event.respondWith(
  handleRequest(event.request).catch(
    (err) => new Response(err.stack, { status: 500 })
  )
);
});

const keys = [
'solaris-7BTxHCyHhzIME5TI',
'solaris-ngfeNG1iaq9Q2PJK',
'solaris-zaCmZA74PLKCrD8Y',
'solaris-KwOi5vm2TYNmi8Dd',
'solaris-edVCa1E6zDZRztaq',
'solaris-qqO7Lv5Hg29t5hqI',
'solaris-BHRyCR5Lgznl28Tr',
'solaris-4wOFSa0vV0WtlFYK',
'solaris-NKsTcw3OPrMQPoSz',
'solaris-B2mWxADrthdHqd22',
'solaris-24wDDIiKn23xmDqw',
'solaris-JAaNDtW2DyvIHS96',
'solaris-7BTxHCyHhzIME5TI',
'solaris-tBCC15CdlDcqTJ4b',
'solaris-3PqATVLPR8zw2xRn',
'solaris-i0jmhtjgqKZhp6Hl',
'solaris-vKkkQHqQboi7c6JF',
'solaris-toeJ8M4AzH5F1cFK',
'solaris-fNyMwyY4gQ8NxMpB',
'solaris-fPTHpvozwrJ7H2FT',
'solaris-PxtRFopRoKZwir25',
'solaris-BAPUdN5hTPLuk3iN',
'solaris-pBw2iwKigoB01fI2',
'solaris-HipRojQEq5sRjt3s',
'solaris-2ngXkR6S02ijFrTP',
'solaris-1Cqgm3S6nlMechWO'
];

async function handleRequest(request) {
const { pathname } = new URL(request.url);

if (pathname === "/"){
  return new Response('Solaris API by ZoCom. \nEndpoints avaible are /key and /bodies.', { status: 200 })
}

if (pathname.startsWith("/bodies")) {

  let requestHeaders = Object.fromEntries(request.headers);

  if(!keys.includes(requestHeaders['x-zocom'])){
    return new Response(JSON.stringify({ msg: 'No valid key found in request. Make sure you add the x-zocom header with valid key.' }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  if(request.method !== 'GET'){
    return new Response(JSON.stringify({ msg: 'This endpoint only accepts method GET.' }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const bodies = [
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
          distance: 0, // km fr??n solen
          orbitalPeriod: 0, // jorddygn
          desc: 'Solen ??r stj??rnan i solsystemet och det ??r runt den som de ??vriga delarna i solsystemet kretsar. Dess stora massa p?? 332 830 jordmassor ger den i dess innand??me en densitet som ??r h??g nog f??r att uppr??tth??lla fusion. Fusionen avger enorma m??ngder energi till rymden genom elektromagnetisk str??lning, s??som synligt ljus.',
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
          desc: 'Merkurius ??r den planet som ligger n??rmast solen och ??r den minsta planeten (0,055 jordmassor). Merkurius har inga naturliga satelliter och dess enda k??nda geologiska strukturer f??rutom nedslagskratrar ??r kullar, klippor och dalar som troligen bildades under dess tidigaste historia. Merkurius n??stan obetydliga atmosf??r best??r av atomer som bl??sts dit fr??n solen av solvinden. Den relativt stora j??rnk??rnan och tunna manteln har inte kunnat f??rklaras, men den fr??msta hypotesen ??r att de yttre lagren f??rsvann fr??n planeten vid en enorm kollision med ett annat planetariskt objekt.',
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
          desc: 'Venus har n??stan samma storlek som jorden (0,815 jordmassor). Venus ??r ??ven p?? m??nga andra s??tt lik jorden d?? den har en tjock silikatmantel runt en j??rnk??rna, en betydande atmosf??r och sannolikt geologisk aktivitet. Men det finns ??ven stora skillnader; Venus ??r mycket torrare ??n jorden och dess atmosf??r ??r n??stan 90 g??nger t??tare. Venus har inga naturliga satelliter och ??r den varmaste planeten i solsystemet med en yttemperatur p?? ??ver 400 ??C. Den h??ga temperaturen beror till st??rsta delen p?? m??ngden av v??xthusgaser, fr??mst koldioxid, i atmosf??ren. Det finns inga definitiva bevis p?? att Venus i dag ??r geologiskt aktiv, men den saknar ett magnetf??lt som skulle f??rhindra att atmosf??ren f??rsvinner ut i rymden. Detta kan betyda att atmosf??ren regelbundet fylls p?? av vulkanutbrott. Atmosf??ren ??r mycket tjock och best??r till st??rsta delen av koldioxid. Venus kallas ??ven f??r aftonstj??rna eller morgonstj??rna eftersom planeten, beroende p?? fas, med blotta ??gat kan ses fr??n jorden antingen p?? kv??llen eller morgonen. Mellan faserna kommer Venus f??r n??ra solen och kan d?? inte ses fr??n jorden.',
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
          desc: 'Jorden ??r den st??rsta och mest kompakta av de inre planeterna. Jorden ??r den enda av planeterna som konstaterats ha geologisk aktivitet och ??r ??ven den enda planeten som med s??kerhet h??rb??rgerar liv. Dess flytande hydrosf??r ??r unik bland stenplaneterna och jorden ??r ocks?? den enda planeten hos vilken plattektonik har observerats. Jordens atmosf??r skiljer sig markant fr??n de andra planeternas, vilket f??rklaras av att n??rvaron av levande organismer har f??r??ndrat atmosf??ren till att inneh??lla fritt syre, i dag motsvarande 21 procent.',
          moons: ['M??nen']
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
          desc: 'Mars ??r den fj??rde planeten fr??n solen och solsystemets n??st minsta planet. Den har f??tt sitt namn efter den romerska krigsguden Mars och kallas ibland f??r "den r??da planeten" p?? grund av sitt r??daktiga utseende. Den r??da f??rgen beror p?? stora m??ngder j??rnoxid som finns f??rdelat ??ver ytan och i atmosf??ren.',
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
          desc: 'Jupiter ??r den femte planeten fr??n solen och ??r med stor marginal solsystemets st??rsta planet. Dess massa ??r 2,5 g??nger s?? stor som alla de andra planeternas sammanlagda massa. Planeten ??r en s?? kallad gasj??tte och man ??r inte s??ker p?? om planeten ens har en fast k??rna.',
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
          desc: 'Saturnus ??r den sj??tte planeten fr??n solen och den n??st st??rsta i solsystemet. Den ??r en gasj??tte, k??nd sedan f??rhistorisk tid. Galileo Galilei var den f??rsta att observera den genom ett teleskop ??r 1610.',
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
          desc: 'Uranus ??r den sjunde planeten fr??n solen. Uranus ??r en av solsystemets fyra j??tteplaneter - Jupiter, Saturnus, Uranus och Neptunus - och ??r av ungef??r samma storlek som Neptunus. Planetens diameter ??r ungef??r 50 000 km och massan cirka 14,5 jordmassor.',
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
          desc: 'Neptunus ??r den ??ttonde planeten fr??n solen. Neptunus ??r en s?? kallad gasj??tte, och har f??tt sitt namn efter havsguden Neptunus i romersk mytologi. Den 24 augusti 2006, d?? Internationella astronomiska unionen beslutade att Pluto inte l??ngre var en planet, blev Neptunus den yttersta planeten i solsystemet.',
          moons: ['Triton', 'Sao', 'Hippocamp', 'Proteus', 'Despina', 'Nereid', 'Thalassa', 'Galatea', 'Neso', 'Halimede', 'Larissa','Psamathe', 'Naiad', 'Laomedeia']
      }
  ];

  return new Response(JSON.stringify({ bodies: bodies }), {
    headers: { "Content-Type": "application/json" },
  });
}

if (pathname.startsWith("/key")) {

  if(request.method === 'POST'){

    let resp = { key: keys[Math.floor(Math.random()*keys.length)] };
    return new Response(JSON.stringify(resp), {
      headers: { "Content-Type": "application/json" },
    });

  } else {
    return new Response(JSON.stringify({ msg: 'This endpoint only accepts POST method.' }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }
}
}
