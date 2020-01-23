import { Ruoka } from "./Ruoka";

export class PaaRuoka extends Ruoka {
    private _lisuke: PaaRuoka[] = new Array();

    constructor() {
        super();
    }

    // Tarviiko näitä ees olla?
    get nimi(): string {
        return this.nimi;
    }

    set nimi(nimi: string) {
        this.nimi = nimi;
    }

    set lisuke(lisuke: PaaRuoka[]) {
        this._lisuke = lisuke;
    }

    get lisuke(): PaaRuoka[] {
        return this._lisuke;
    }

    lisaaLisuke(lisuke: PaaRuoka) {
        this._lisuke.push(lisuke);
    }

    laskeYhteen(): number[] {
        if (this.lisuke.length == 0) return [this.ravintosisalto.kcal, this.ravintosisalto.rasva, this.ravintosisalto.hiilihydraatti, this.ravintosisalto.proteiini];
        let yhteensa = [this.ravintosisalto.kcal, this.ravintosisalto.rasva, this.ravintosisalto.hiilihydraatti, this.ravintosisalto.proteiini];
        this.lisuke.forEach(lis => {
            yhteensa[0] += lis.ravintosisalto.kcal;
            yhteensa[1] += lis.ravintosisalto.rasva;
            yhteensa[2] += lis.ravintosisalto.hiilihydraatti;
            yhteensa[3] += lis.ravintosisalto.proteiini;
        })
        return yhteensa;
    }
}