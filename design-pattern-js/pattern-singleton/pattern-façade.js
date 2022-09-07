class RouleurPate{
    constructor(){}

    roulerPater(){
        console.log("Je roule la pate")
    }
}

class PreparateurSauceTomate{
    constructor(){}

    preparerSauceTomate(){
        console.log("Je prépare la sauce tomate")
    }
}


class Garnisseur{
    constructor(){}

    garnir(){
        console.log("Je garnis la pizza")
    }
}

class Four{
    constructor(){}

    cuire(){
        console.log("Cuire la pizza")
    }
}

class Emballeur{
    constructor(){}

    emballer(){
        console.log("Votre pizza est dans la boite")
    }
}

class Pizzaoilo {
    //Façade
    constructor(type){
        this.type = type
    }

    cuisinerPizza(){
        let roul = new RouleurPate();
        roul.roulerPater();

        let pst = new PreparateurSauceTomate();
        pst.preparerSauceTomate();

        let garn = new Garnisseur();
        garn.garnir()


        let foure = new Four();
        foure.cuire();

        if(this.type=="italienne"){
            console.log("Votre pizza italienne est prete")
        }
        else {
            console.log("Votre pizza americaine est prete")

        }

        let emb = new Emballeur();
        emb.emballer();
    }
}

let cuisinier = new Pizzaoilo("italienne");
cuisinier.cuisinerPizza();