class Animal {
    constructor(nom,taille){
        this.nom = nom;
        this.taille = taille;
    }
}

class Lion extends Animal {
    constructor(nom,taille){
        super(nom,taille);
        this.etat = "affamé"
    }

    manger(animal){
        this.etat = "repu"
        console.log(this.nom+ " a mangé "+ animal.nom)
    }
}
  

class Gazelle extends Animal {
    constructor(nom,taille){
        super(nom,taille);
    }

}

let lion1 = new Lion("Simba");
let gaz1 = new Gazelle("Bambie");

lion1.manger(gaz1)