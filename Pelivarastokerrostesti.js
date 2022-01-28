'use strict';

const Pelivarasto = require('./pelivarasto/pelivarastokerros');

const varasto = new Pelivarasto();



// varasto.haeKaikkiPelit().then(console.log);
// hakee

// varasto.hae(1).then(console.log).catch(console.log);
// varasto.hae(12).then(console.log).catch(console.log);
//  toimii löytää ja tulee oikea virheellinen ilmoitus alemmasta

// varasto.lisaa({
//     "numero":30,
//     "nimi":"Ukkopekka",
//     "lukumaara":600,
//     "arvostelu":"***",
//     "genre":"Kauhu"
// }).then(console.log).catch(console.log);



// varasto.paivita({
//     "numero":30,
//     "nimi":"Ukkopekkaa",
//     "lukumaara":60000,
//     "arvostelu":"***",
//     "genre":"Huumori"
// }).then(console.log).catch(console.log);

// varasto.poista(30).then(console.log).catch(console.log);

