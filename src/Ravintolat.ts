import { Ravintola } from "./Ravintola";

export class Ravintolat {
    private _alkiot: Ravintola[] = new Array();
    private _lkm: number = 0;

    get lkm(): number {
        return this._lkm;
    }

    get alkiot(): Ravintola[] {
        return this._alkiot;
    }

    lisaaRavintola(ravintola: Ravintola) {
        this._alkiot.push(ravintola);
        this._lkm++;
    }

    annaRavintola(i: number): Ravintola {
        if ( i < 0 || this.lkm <= i) { throw new Error("Väärä indeksi: " + i)};
        return this.alkiot[i];
    }

    annaRavintolaNimella(nimi: string): Ravintola {
        let arr = this.alkiot.filter(data => {
            return data.nimi == nimi;
        })        
        if (arr.length == 0 || arr.length > 1) {throw new Error("Ei löydy " + nimi )}
        else return arr[0];
    }

    annaRavintolat(): Ravintola[] {
        return this._alkiot;
    }
}