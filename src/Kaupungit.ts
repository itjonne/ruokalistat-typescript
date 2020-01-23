import { Kaupunki } from "./Kaupunki";

export class Kaupungit {
    private _alkiot: Kaupunki[] = new Array();
    private _lkm: number = 0;

    get lkm(): number {
        return this._lkm;
    }

    get alkiot(): Kaupunki[] {
        return this._alkiot;
    }

    lisaaKaupunki(kaupunki: Kaupunki) {  
        this._alkiot.push(kaupunki);
        this._lkm++;
    }

    annaKaupunki(i: number) {
        if (i < 0 || this.lkm <= i) { throw new Error("Väärä indeksi: " + i) };
        return this.alkiot[i];
    }

    annaKaupunkiNimella(nimi: string): Kaupunki {
        let arr = this.alkiot.filter(data => {
            return data.nimi == nimi;
        })
        
        if (arr.length == 0 || arr.length > 1) {throw new Error("Ei löydy")}
        else return arr[0];
    }
}