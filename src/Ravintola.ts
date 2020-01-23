export class Ravintola {
    // private _ruokalista: Ruoka[] = new Array();
    private _nimi: string;
    private _aukiolo: string = "";
    private _lkm: number = 0;

    constructor(nimi: string) {
        this._nimi = nimi;
    }

    get nimi(): string {
        return this._nimi;
    }

    set nimi(nimi: string) {
        this._nimi = nimi;
    }

    set aukiolo(aukiolo: string) {
        this._aukiolo = aukiolo;
    }

    get aukiolo(): string {
        return this._aukiolo;
    }

    get lkm(): number {
        return this._lkm;
    }
 
    /*
    lisaaRuoka(ruoka: Ruoka) {
        this._ruokalista.push(ruoka);
        this._lkm++;
    }
    */
    
}