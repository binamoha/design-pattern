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

lion1.manger(gaz1);


class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'Mon nom est ' + this.carname;
    }
  }
  
  //Classe fille puis classe mere
  class Model extends Car {
    constructor(brand, mod) {
      super(brand); // Attributs qui existaient dans la classe mere , je les mets dans le super
      this.model = mod;
    }

    show() {
      return this.present() + ', et je suis une ' + this.model;
    }
  }
  
  mycar = new Model("Ford", "Mustang");
  console.log(mycar.show());