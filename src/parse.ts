export function parseIngredients(data: any) {
    console.log(data.results.fi);
    let teksti = data.results.fi;
    let n = teksti.search("per 100g:");
    let sisalto = teksti.slice((n + 9), teksti.length).trim();

    // Nyt on sellanen temppu, et voi olla raskas?! :D
    let numerot = sisalto.split("").filter( (x: string) => {
       return x.match(/[0-9 \.]+/g);
    }).join("").replace(" . ", "").replace(" . ", "").replace(/  +/g, ' ');
   
    return numerot.split(" ");

}