import { Kirjasto } from "./Kirjasto";
import { Kaupunki } from "./Kaupunki";
//import parseIngredients from "./parse";

let source: string = "ruokalista.json";

let kirjasto:  Kirjasto = new Kirjasto();
let jyvaskyla: Kaupunki = new Kaupunki("Jyväskylä");
kirjasto.lisaaKaupunki(jyvaskyla);
console.log(kirjasto);

async function getData(url: string) {
    console.log('lähettii hakee dataa');
    //const proxyurl = "https://cors-anywhere.herokuapp.com/";
    //const response = await fetch(proxyurl + url);
    const response = await fetch(url);
    return response.json()
}

getData(source).then(data => {
    console.log(data.results.fi);
})