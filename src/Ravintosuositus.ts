import { Lisukkeet } from "./Lisukkeet";

export class Ravintosuositus {
    lisukkeet: Lisukkeet = new Lisukkeet();

    suositusKcal: number = 750;

    // Näistä yhteensä 100%, sitten katotaa onko ok;
    suositusRasva: number = 30; // E%
    SuositusHiilihydraatti: number = 53; // E%
    SuositusProteiini: number = 17; // E%
    SuositusSokerit: number = 10; // E%

    constructor() {

    }

}