import {Kaupungit} from "./Kaupungit";
import {Ravintosuositus} from "./Ravintosuositus";
import {Kaupunki} from "./Kaupunki";

export class Kirjasto {
    private _kaupungit: Kaupungit = new Kaupungit();
    private _ravintosuositus: Ravintosuositus = new Ravintosuositus();

    get kaupungit(): Kaupungit {
        return this._kaupungit;
    }

    get ravintosuositus(): Ravintosuositus {
        return this._ravintosuositus;
    }

    annaKaupungitLkm(): number {
        return this.kaupungit.lkm;
    }

    lisaaKaupunki(kaupunki: Kaupunki) {
        this.kaupungit.lisaaKaupunki(kaupunki);
    }

    
}