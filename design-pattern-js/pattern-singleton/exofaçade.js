class ExpertUML{
    constructor(){}

    faireUML(){
        console.log("Je fais les diagrammes de classes")
    }
}

class Designer{
    constructor(){}

    faireDesign(){
        console.log("Je fais la maquette du site")
    }
}

class BackEnd{
    constructor(){}

    coderBackEnd(){
        console.log("Je code le backend")
    }
}

class FrontEnd{
    constructor(){}

    coderFrontEnd(){
        console.log("Je code le front end")
    }
}

class Hebergeur{
    constructor(){}

    heberger(){
        console.log("J'hébèrge le site")
    }
}

class BoiteDev{
    //Façade
    constructor(type){
        this.type = type

}

developperSite(){

    let uml = new ExpertUML();
    uml.faireUML();

    let des = new Designer();
    des.faireDesign();

    let back = new BackEnd();
    back.coderBackEnd();

    let front = new FrontEnd();
    front.coderFrontEnd();

    let heb = new Hebergeur();
    heb.heberger();

    if(this.type=="site vitrine"){
        console.log("Votre site vitrine est terminé")
    }
    else {
        console.log("Votre site vitrine est en cours de test")

    }
 

}

}

let fullstack = new BoiteDev("site vitrine et e-commerce");
fullstack.developperSite();


