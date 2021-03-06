import { Ruoka } from "./Ruoka";
import { Ravintosisalto} from "./Ravintosisalto";

export class Lisukkeet {
    salaatti: Ruoka;
    salaattisekoitus: Ruoka;
    salaatinkastike: Ruoka;
    ruisleipa: Ruoka;
    margariini: Ruoka;
    maito: Ruoka;

    lisukkeet: Ruoka[] = new Array();

    constructor() {
        this.salaatti = new Ruoka();
    this.salaatti.nimi = "salaatti";
    this.salaatti.ravintosisalto = {kcal: 34, rasva: 0.2, proteiini: 0.8, hiilihydraatti: 7.9};

    this.salaattisekoitus = new Ruoka();
    this.salaattisekoitus.nimi = "salaattisekoitus";
    this.salaattisekoitus.ravintosisalto = {kcal: 70, rasva: 0.7, proteiini: 2.4, hiilihydraatti: 14.6};

    this.salaatinkastike = new Ruoka();
    this.salaatinkastike.nimi = "salaatinkastike"
    this.salaatinkastike.ravintosisalto = {kcal: 63, rasva: 6.4, proteiini: 0, hiilihydraatti: 1.7};

    this.ruisleipa = new Ruoka();
    this.ruisleipa.nimi = "ruisleipä";
    this.ruisleipa.ravintosisalto = {kcal: 65, rasva: 0.4, proteiini: 1.9, hiilihydraatti: 15.6};

    this.margariini = new Ruoka();
    this.margariini.nimi = "margariini";
    this.margariini.ravintosisalto = {kcal: 36, rasva: 4.2, proteiini: 0, hiilihydraatti: 0};

    this.maito = new Ruoka();
    this.maito.nimi = "maito";
    this.maito.ravintosisalto = {kcal: 68, rasva: 0.2, proteiini: 6.1, hiilihydraatti: 9.8};
     
    this.lisukkeet = [this.salaatti, this.salaattisekoitus, this.salaatinkastike, this.ruisleipa, this.margariini, this.maito];
   
    let kokonaisuus = new Ruoka();
    kokonaisuus.nimi = "yhteensä";
    kokonaisuus.ravintosisalto = new Ravintosisalto();
    kokonaisuus.ravintosisalto.kcal = 0;
    kokonaisuus.ravintosisalto.rasva = 0; 
    kokonaisuus.ravintosisalto.proteiini = 0; 
    kokonaisuus.ravintosisalto.hiilihydraatti = 0;  
    this.lisukkeet.forEach(ruoka => {
        kokonaisuus.ravintosisalto.kcal += ruoka.ravintosisalto.kcal;
        kokonaisuus.ravintosisalto.rasva += ruoka.ravintosisalto.rasva;
        kokonaisuus.ravintosisalto.proteiini += ruoka.ravintosisalto.proteiini;
        kokonaisuus.ravintosisalto.hiilihydraatti += ruoka.ravintosisalto.hiilihydraatti;
    })
    this.lisukkeet.push(kokonaisuus);   
    }    
}
