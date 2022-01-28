'use strict';

const path = require('path');

const pelivarasto = path.join(__dirname,'Pohjolainen_Samuel_pelit.json');

const { luePelit,kirjoitaPelit} = require('./jsonReaderWriter.js');


async function haeKaikkiPelit() {
    return luePelit(pelivarasto)
};

//kokeillaan
// console.log(pelivarasto);

// testattu ja toimii
// find palauttaa undefined, jos mitään ei löydy. Muutetaan arvoksi null
async function haeYksiPeli(avain,arvo) {
    const pelitaulukko = await luePelit(pelivarasto);
    return pelitaulukko.find(peli => peli[avain]==arvo) || null;

};

// ekana katotaan onko peli jo siellä, mikäli ei ole pushataan sinne uusi
async function lisaaPeli(uusiPeli) {
    const peli = await luePelit(pelivarasto);
    if(peli.find(peli=>peli.numero == uusiPeli.numero)) {
        return false;
    }
    else {
        peli.push( {
            numero: +uusiPeli.numero,
            nimi: uusiPeli.nimi,
            lukumaara: +uusiPeli.lukumaara,
            arvostelu: uusiPeli.arvostelu,
            genre: uusiPeli.genre
        });
        return await kirjoitaPelit(pelivarasto,peli);
    }
};

async function paivitaPeliVarasto(peli) {
    let pelitaulukko = await luePelit(pelivarasto);
    const vanhaPeli = pelitaulukko.find(vanha=>vanha.numero==peli.numero);
    if(vanhaPeli) {
        Object.assign(vanhaPeli, {
            numero:+peli.numero,
            nimi:peli.nimi,
            lukumaara:+peli.lukumaara,
            arvostelu:peli.arvostelu,
            genre:peli.genre
        });
        return await kirjoitaPelit(pelivarasto,pelitaulukko);
    }
    else {
        return false;
    }
};

async function poistaPelivarastosta(numero) {
    let pelitaulukko = await luePelit(pelivarasto);
    const i=pelitaulukko.findIndex(peli=>peli.numero==numero);
    if(i<0) return false;
    pelitaulukko.splice(i,1);
    return await kirjoitaPelit(pelivarasto,pelitaulukko);
   
}

module.exports = { haeKaikkiPelit,haeYksiPeli,lisaaPeli,paivitaPeliVarasto,poistaPelivarastosta}