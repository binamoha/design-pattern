class Sujet_Abstrait{
    constructor(nom){
        this.nom =nom;

        if(new.target == Sujet_Abstrait){

        throw Error("VOUS NE POUVEZ PAS INSTANCIER CA")
        }
    }

    ajouterabonne(){
        throw Error("IL FAUT IMPLEMENTER")
    }

    supprimerabonne(){
        throw Error("IL FAUT IMPLEMENTER")
    }
    
   notifieabonnes(){
    throw Error("IL FAUT IMPLEMENTER")  
    }
}

class Sujet_Concret extends Sujet_Abstrait{
    constructor(nom){
        super(nom);
    }

    ajouterabonne(){
        console.log("Abonné ajouté")
    }
}

let obj1 = new Sujet_Concret("monObj");
obj1.ajouterabonne();