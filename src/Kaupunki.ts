import { Ravintolat } from "./Ravintolat";
import { Ravintola } from "./Ravintola";

export class Kaupunki {
    private _ravintolat: Ravintolat = new Ravintolat();
    private _nimi: string;
    private _lkm: number = 0;

    constructor(nimi: string) {
        this._nimi = nimi;
    }

    get lkm(): number {
        return this._lkm;
    }

    set nimi(nimi: string) {
        this._nimi = nimi;
    }

    get nimi(): string {
        return this._nimi;
    }

    get ravintolat(): Ravintolat {
        return this._ravintolat;
    }

    annaRavintolaNimella(nimi: string): Ravintola {
        let arr = this.ravintolat.annaRavintolat().filter(data => {
            return data.nimi == nimi;
        })        
        if (arr.length == 0 || arr.length > 1) { throw new Error("Ei löydy " + nimi) }
        else return arr[0]; 
    }

    lisaaRavintola(ravintola: Ravintola) {
        this.ravintolat.lisaaRavintola(ravintola);
        this._lkm++;
    }

    annaRavintola(i: number): Ravintola {
        if (i < 0 || this.lkm <= i) { throw new Error("Väärä indeksi: " + i) };
        return this._ravintolat.annaRavintolat()[i];
    }
}