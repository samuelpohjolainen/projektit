'use strict';

const fs = require('fs').promises;

//tehdään lukeminen

async function luePelit(pelivarasto) {
    try {
        const data = await fs.readFile(pelivarasto, 'utf-8');
        return JSON.parse(data);
    }
    catch(virhe) {
        return [];
    }
}

//kirjoittaminen

async function kirjoitaPelit(pelivarasto,data) {
    try{
        await fs.writeFile(pelivarasto,JSON.stringify(data,null,4), {
            encoding:'utf-8',
            flag:'w'
        });
        return true;
    }
    catch(virhe) {
        return false;
    }
}

module.exports = {luePelit,kirjoitaPelit}