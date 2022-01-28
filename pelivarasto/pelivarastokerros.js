'use strict';

const {STATUSKOODIT,STATUSVIESTIT}= require('./statuskoodit');

const {
    haeKaikkiPelit,
    haeYksiPeli,
    lisaaPeli,
    paivitaPeliVarasto,
    poistaPelivarastosta
} = require('./pelivarastonApufunktiot');

module.exports = class Pelivarasto {
    get STATUSKOODIT() {
        return STATUSKOODIT;
    }


// haekaikkipelit toimii ja testattu
haeKaikkiPelit() {
    return haeKaikkiPelit();
}
hae(numero) {
    return new Promise( async (resolve, reject) => {
        if(!numero) {
            reject(STATUSVIESTIT.EI_LOYTYNYT('<tyhjä>'));
        }
        else {
            const tulos = await haeYksiPeli('numero',numero);
            if(tulos) {
                resolve(tulos);
            }
            else {
                reject(STATUSVIESTIT.EI_LOYTYNYT(numero));
            }
        }
    });
}//loppu hakemistosta

//lisaaminen alkaa, TESTIT LÄPI!
lisaa(peli) {
    return new Promise( async (resolve,reject) => {
        if(await haeYksiPeli('numero',peli.numero)) {
            reject(STATUSVIESTIT.JO_KAYTOSSA(peli.numero));
        }
        else if(await lisaaPeli(peli)) {
            resolve(STATUSVIESTIT.LISAYS_OK(peli.numero));
        }
        else {
            reject(STATUSVIESTIT.EI_LISATTY());
        }
    });
}// läpi

paivita(peli) {
    return new Promise( async (resolve,reject)=> {
        if(await paivitaPeliVarasto(peli)) {
            resolve(STATUSVIESTIT.PAIVITYS_OK(peli.numero));
        }
        else {
            reject(STATUSVIESTIT.EI_PAIVITETTY());
        }
    });
}// end oooof the päivitys

//  läpi

poista(numero) {
    return new Promise( async (resolve,reject)=> {
        if(!numero) {
            reject(STATUSVIESTIT.EI_LOYTYNYT('<tyhjä>'));
        }
        else {
            if(await poistaPelivarastosta(numero)) {
                resolve(STATUSVIESTIT.POISTO_OK(numero));
            }
            else {
                reject(STATUSVIESTIT.EI_POISTETTU());
            }
        }
    });
}






}