'use strict';

module.exports = class Tietokonerekisteri {
    constructor(tietokonerekisteri) {
        if(tietokonerekisteri) {
        this.tietokonerekisteri=tietokonerekisteri;
    }
    else {
        throw new Error('tietokoneet puuttuvat');
    }
} // konstruktorin loppu

//palauttaa kaikki löydetyt valmistajat kertaalleen taulukossa.
haeValmistajat() {
    let valmistajat = [];
    for(let tietokone of this.tietokonerekisteri) {      
            if(!valmistajat.includes(tietokone.valmistaja) && tietokone.valmistaja!="") {

                valmistajat.push(tietokone.valmistaja);
            }
        
    }
    return valmistajat;
} // haeValmistajat loppu




} // luokka loppuu