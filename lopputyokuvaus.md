# TESTAUSLOPPUTYÖ

## Tietokonerekisteri
-Tee tietokonerekisteri-luokka tietokonetietojen käsittelyyn. Tietovarastona käytetään json tiedostoa.

## Tarvittavat toiminnot

### Konsturkori
-parametrina annetaan tietokoneet sisältävä json-olio
-jos parametri puuttuu, aiheutuu poikkeus 'tietokoneet puuttuvat'

### Haetaan kaikkien tietokoneiden valmistajat
-palauttaa tietokoneiden valmistajat taulukkona
-valmistaja on taulukossa vain kertaalleen
-jos valmistajia ei löydy, palauttaa tyhjän taulukon

### Haetaan tietokone numerolla
-parametrina annetaan tietokoneen numero
-palauttaa numeora vastaavan tietokoneolion
-jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkuksen 'numerolla ei löydy konetta'

### Haetaan tietokone valmistajan nimellä
-parametrina annetaan tietokoneen valmistaja
-palauttaa taulukon, jossa on löytyneiden tietokoneiden numerot
-jos  valmistajalla ei ole tietokonetta, palauttaa tyhjän taulukon
-jos parametri puuttuu, palauttaa tyhjän taulukon

### Haetaan kaikki tietyn tyyppiset tietokoneet
-tyyppi annetaan parametrina
-palauttaa taulukon koneita, tyhjä taulukko, jos mitään ei löydy
-aiheuttaa poikkeuksen 'parametri puuttuu', jos parametria ei anneta

### Haetaan tietokoneen varusteet
-parametrina annetaan tietokoneen numero
-palauttaa tietokoneen varusteet taulukkona
-jos varusteita ei ole palauttaa tyhjän taulukon
-aiehuttaa poikkeuksen 'parametri puuttuu', jos parametria ei anneta
-jos numerolla ei ole tietokonetta, aiheuttaa poikkuksen 'numerolla ei löydy konetta'

### Palauttaa tietokoneen ohjelmien yhteyshinnan
-parametrina annetaan tietokoneen numero
-palauttaa ohjelmien yhteishinnan
-jos tietokoneella eii ole ohjelmia, palauttaa nollan
-jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

### Palauttaa tiedon onko tietokoneella ohjelmia
-parametrina annetaan tietokoneen numero
-palauttaa true, jos tietokoneella on ohjelmia ja false muuten
-jos numerolla ei ole tietokonetta palauttaa false
-jos parametri puuttuu palauttaa false

### Palauttaa tiedon onko tietokoneella varusteita
-parametrina annetaan tietokoneen numero
-palauttaa true, jos tietokoneella on varusteita ja false muuten
-jos numerolla ei ole tietokonetta palauttaa false
-jos parametri puuttuu palauttaa false

## Suunnittele testit
-Aloita tekemällä testitapaukset
-Tee testitapaukset edellä olevien rajapintakuvasten mukaan
-Käytä myös "mielikuvitusta" erilaisten tilanteiden löytämiseksi
-Testitapaukset ovat sinun tulkintasi rajapinnasta. Tässä ei ole oikeita tai vääriä vastauksia.

##Tee tietokone projeksi
-Käytä tietokoneet.json tiedostoa tiedon lähteenä
-Tee rajapintakuvauksen mukaiset testitapaukset projektikansioon Markdown-tiedostoon
-Muodosta package.json
    -npm init -y
-Asenna jest kehitysriippuvuudeksi
    -npm install jest --save-dev
-Tee kansio __test__ testeille
-muokkaa package.json lisäämällä jest test scriptiin