export class Ravintosisalto {
    recipeId?: number = 0;
    kcal: number = 0;
    kJ?: number = 0;
    rasva: number = 0;
    tyydyttyneet?: number = 0;
    hiilihydraatti: number = 0;
    sokerit?: number = 0;
    proteiini: number = 0;
    suola?: number = 0;

    // PRINT EI TOIMI NOIN, KU VOI OLLA UNDEFINED.
    /*
    print(): string {
        let string = "";
        string += this.kcal.toString()  +  "kcal, " + 
                  this.kJ.toString()    +  "kJ, " +
                  this.rasva.toString() + " rasvaa, " +
                  "josta tyydyttyneitä: " + this.tyydyttyneet.toString() + ", " + 
                  this.hiilihydraatti.toString() + " hiilihydraatteja, " +
                  "josta sokereita: " + this.sokerit.toString() + ", " +
                  this.proteiini.toString() + " proteiinia, " +
                  this.suola.toString() + " suolaa.";          
        return string;
    }
    */

}