'use strict';


const http = require('http');
const path = require('path');
const express = require('express');

const app = express();


const {port,host} = require('./config.json');

const peliVarasto = require('./pelivarasto/pelivarastokerros');
const peliKirjasto = new peliVarasto();

const palvelin = http.createServer(app);

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'sivumallit'));

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));



// toimii
app.get('/',(req,res)=>res.render('valikko'));


// toimii

app.get('/all', (req,res)=> {
    peliKirjasto.haeKaikkiPelit().then(tulos=>res.render('kaikkiPelit',{tulos}));
});
// aloitus kohta toimii, ja virhe toimii 
// toimii haku
app.get('/yksiPeliSivu',(req,res)=> res.render('yksiPeliSivu', {
    paaotsikko:'Hae',
    otsikko:'Hae',
    toiminto:'/yksiPeliSivu'
}));

app.post('/yksiPeliSivu',(req,res)=> {
    if(!req.body) return res.sendStatus(500);
    const numero = req.body.numero;
    peliKirjasto.hae(numero).then(tulos => res.render('peliSivu', {tulos})).catch(virhe => res.render('statusSivu', {
        paaotsikko:'Virhe',
        otsikko:'Virhe',
        status:virhe
    }));
});

app.get('/lisayslomake', (req,res) => res.render('lomake', {
    paaotsikko:'Lisää peli',
    otsikko:'Lisää uusi peli',
    toiminto:'/lisaa',
    numero:{value:'', readonly:''},
    nimi:{value:'', readonly:''},
    lukumaara:{value:'', readonly:''},
    arvostelu:{value:'', readonly:''},
    genre:{value:'', readonly:''}
}));

// toimii tää pidetään
app.post('/lisaa', (req,res) => {
    if(!req.body) return res.sendStatus(500);
    if(req.body.numero=='') return res.sendStatus(400);
    peliKirjasto.lisaa(req.body)
    .then(status=>lahetaStatusSivu(res,status))
    .catch(error=>lahetaVirheSivu(res,error));
});



//  kokeillaan toista tapaa tehdä lisääminen, aikaisempi lisää pelin mutta statusSivu menee vituiks
// app.post('/lisaa',(req,res)=>{
//     peliKirjasto.lisaa(req.body).then(status=>res.render('statusSivu', {
//         paaotsikko:'Status',
//         ostikko:'Status',
//         status
//     }))
//     .catch(virhe=>res.render('statusSivu', {
//         paaotsikko:'Virhe',
//         otsikko:'Virhe',
//         status: virhe
//     }));
// });
// toimii poistaminen
app.get('/poistaPeli', (req,res) =>res.render('yksiPeliSivu', {
    paaotsikko:'Poista',
    otsikko:'Poista',
    toiminto:'/poistaPeli'
}));

app.post('/poistaPeli', (req,res)=> {
    let peliNumero = req.body.numero;
    peliKirjasto.poista(peliNumero).then(status=>lahetaStatusSivu(res,status))
    .catch(error=>lahetaVirheSivu(res, error));
});

function lahetaVirheSivu(res, error, paaotsikko='Virhe', otsikko='Virhe') {
    lahetaStatusSivu(res, error,paaotsikko,otsikko);
}
function lahetaStatusSivu(res,status,paaotsikko='Status',otsikko='Status'){
    return res.render('statusSivu', {paaotsikko, otsikko, status});
}


app.get('/paivityslomake', (req,res) => res.render('lomake', {
    paaotsikko:'Paivita peli',
    otsikko:'Päivitä pelin tiedot',
    toiminto:'/paivitapeli',
    numero:{value:'', readonly:''},
    nimi:{value:'', readonly:''},
    lukumaara:{value:'', readonly:''},
    arvostelu:{value:'', readonly:''},
    genre:{value:'', readonly:''}


})
);

app.post('/paivitapeli',(req,res) => {
    if(!req.body) return res.sendStatus(500);
    peliKirjasto.paivita(req.body).then(status=>lahetaStatusSivu(res,status)).catch(error=>lahetaVirheSivu(res,error));
});








// palvelin päälle

palvelin.listen(port,host, () =>console.log(`${host}:${port} palvelin kuuntelee`));

