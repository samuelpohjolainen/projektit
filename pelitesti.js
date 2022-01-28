'use strict';

const { luePelit,kirjoitaPelit } = require('./pelivarasto/jsonReaderWriter');


//toimii
//eti miten korjaat json tiedoston oikeaan muotoon HUOM HUOM ********************
luePelit('./pelivarasto/Pohjolainen_Samuel_pelit.json').then(console.log);

//testataan lukeminen/kirjoittaminen
//TOIMIII!!!!!!!!!!!!!!
// (async () => {
//     const luettu = await luePelit('./pelivarasto/Pohjolainen_Samuel_pelit.json')
//     console.log(luettu);
//     const tulos = await kirjoitaPelit('./uusiPeli.json', luettu);
//     console.log(tulos);
// })();
