class Formateur{
    //Classe abstraite
    constructor(nom,prenom,domaines){
        this.nom = nom;
        this.prenom = prenom;
        this.domaines = domaines;

        if(new.target==Formateur){
            throw  Error("Classe abstraite : impossible d'instancier")
        }
    }

    presentation(){
       throw Error("Presentation  méthode abstraite à  redéfinir")
    }
}


class FormateurTPlein extends Formateur{
    constructor(nom,prenom,domaines){
        super(nom,prenom,domaines);
    }

    presentation(){
        console.log("Bonjour ! je suis "+this.nom+" "+this.prenom+"  et je suis un formateur à temps plein  spécialisé dans ");
        
        for(domaine of this.dev.domaines){
            console.log(domaine)
        }
    }

}

class FormateurTPartiel extends Formateur{
    constructor(nom,prenom,domaines){
        super(nom,prenom,domaines);
    }

    presentation(){
        console.log("Bonjour ! je suis "+this.nom+" "+this.prenom+"  et je suis un formateur à temps partiel  spécialisé dans ");
        
        for(domaine of this.dev.domaines){
            console.log(domaine)
        }
    }

}

class Dev {
    constructor(nom,prenom,domaines,experience){
        this.nom = nom;
        this.prenom = prenom;
        this.domaines = domaines;
        this.experience =experience;
    }

    coder(langage){
        console.log("Okay je vais vous coder une application en langage "+langage)
    }
    
}

class DevAdapter  {

    constructor(dev){
        this.dev = dev;
    }

    presentation(){
        
    
        console.log("Bonjour ! je suis " + this.dev.nom + " "+this.dev.prenom+" , j'ai +"+ this.dev.experience+" année d'experience et je serais votre formateur à temps partiel et  je suis spécialisé dans ");
        
        for(let domaine of this.dev.domaines){
            console.log(domaine)
        }

    }

}



class Formation {
    constructor(titre,duree,formateur){
        this.titre = titre;
        this.duree = duree;
        this.formateur = formateur;
    }
}

let form1 = new FormateurTPartiel("Raouf","Chiboub",["JS","PHP","Design Pattern"]);
let form2 = new FormateurTPlein("Yasmine","Bouamra",["JS","GIT","Bootstrap"]);
let dev1 = new Dev("Larbi","Harkat",["JS","Java","Bootstrap"],5);

dev1 = new DevAdapter(dev1);

let formation1 = new Formation("Dev web",6,dev1);
dev1.presentation()