# Tietokone API

### Konsturkori
-parametrina annetaan tietokoneet sisältävä json-olio
-jos parametri puuttuu, aiheutuu poikkeus **'tietokoneet puuttuvat'**

### Esimerkki:
```js
const Tietokonevarasto = require('./tietokonevarasto');
const tietokoneet = require('./tietokoneet.json');
```

### Esimerkki 1:
Luodaan tietokonevarasto antamalla tietokone-olio parametriksi
```js
const tietokonevarasto = new Tietokonevarasto(tietokoneet);
```

## Esimerkki 2
luodaan tietokonevarasto ilman parametria
```js
const tietokonevarasto = new tietokonevarasto();
```
jolloin aiheutuu poikkeus **'tietokoneet puuttuvat'**

### haeValmistajat()
-palauttaa tietokoneiden valmistajat taulukkona
-valmistaja on taulukossa vain kertaalleen
-jos valmistajia ei löydy, palauttaa tyhjän taulukon

## Esimerkki 1:
```js
tietokonevarasto.haeValmistajat()
```
palauttaa esimerkiksi

```json
["BMI","CERA"]
```

## Esimerkki 2:

Luodaan tietokonrekisteri json-taulukolla
```json
[
    {
            "numero":1,
    "valmistaja":[],
    "tyyppi":"minitorni",
    "varusteet":["näppis","näyttö","hiiri"],
    "hinta":250,
    "ohjelmat":[
        {"nimi":"Teksturi", "hinta": 123},
        {"nimi":"Pasianssi", "hinta":10}
    }
]
```
Kutsu
```js
tietokonevarasto.haeValmistajat()
```
palauttaa tyhjän taulukon, koska yhtään valmistajaa ei löytynyt
```json
[]
```

### haeNumerolla()
-parametrina annetaan tietokoneen numero
-palauttaa numeroa vastaavan tietokoneolion
-jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkuksen 'numerolla ei löydy konetta'

### Esimerkki 1:
```js
tietokonevarasto.haeNumerolla(1)
```
palauttaa
```json
[
    {
    "numero":1,
    "valmistaja":"BMI",
    "tyyppi":"minitorni",
    "varusteet":["näppis","näyttö","hiiri"],
    "hinta":250,
    "ohjelmat":[
        {"nimi":"Teksturi", "hinta": 123},
        {"nimi":"Pasianssi", "hinta":10}
    ]
}
```

### Esimerkki 2:
haetaan numerolla jota ei löydy

```js
tietokonevarasto.haeNumerolla(200)
```
palauttaa
***'numerolla ei löydy konetta'***

### haeNimella()
-parametrina annetaan tietokoneen valmistaja
-palauttaa taulukon, jossa on löytyneiden tietokoneiden numerot
-jos  valmistajalla ei ole tietokonetta, palauttaa tyhjän taulukon
-jos parametri puuttuu, palauttaa tyhjän taulukon

### HaeTyypilla()
-tyyppi annetaan parametrina
-palauttaa taulukon koneita, tyhjä taulukko, jos mitään ei löydy
-aiheuttaa poikkeuksen 'parametri puuttuu', jos parametria ei anneta

### HaeVarusteet()
-parametrina annetaan tietokoneen numero
-palauttaa tietokoneen varusteet taulukkona
-jos varusteita ei ole palauttaa tyhjän taulukon
-aiehuttaa poikkeuksen 'parametri puuttuu', jos parametria ei anneta
-jos numerolla ei ole tietokonetta, aiheuttaa poikkuksen 'numerolla ei löydy konetta'

### haeHinta()
-parametrina annetaan tietokoneen numero
-palauttaa ohjelmien yhteishinnan
-jos tietokoneella eii ole ohjelmia, palauttaa nollan
-jos numerolla ei ole tietokonetta tai parametri puuttuu, aiheuttaa poikkeuksen 'numerolla ei löydy konetta'

### haeOhjelmat()
-parametrina annetaan tietokoneen numero
-palauttaa true, jos tietokoneella on ohjelmia ja false muuten
-jos numerolla ei ole tietokonetta palauttaa false
-jos parametri puuttuu palauttaa false

### haeVarustus()
-parametrina annetaan tietokoneen numero
-palauttaa true, jos tietokoneella on varusteita ja false muuten
-jos numerolla ei ole tietokonetta palauttaa false
-jos parametri puuttuu palauttaa false