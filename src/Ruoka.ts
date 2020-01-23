import { Ravintosisalto } from "./Ravintosisalto";

// TODO: Pitäiskö ravintosisältö olla private (En jaksanu rakentaa.)
export class Ruoka {
    private _nimi: string = "";
    public ravintosisalto: Ravintosisalto = new Ravintosisalto();

    get nimi(): string {
        return this._nimi;
    }

    set nimi(nimi: string) {
        this._nimi = nimi;
    }
}