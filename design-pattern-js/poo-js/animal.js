class Animal{

    constructor(nom, taille, poids){
        this.nom = nom;
        this.taille = taille;
        this.poids = poids;
    }
}
class Carnivore extends Animal{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }

    Manger(animal){
        console.log(this.nom+" a mangé "+ animal.nom);
    }

}

class Herbivore extends Animal{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }
    Manger(){
        console.log(this.nom+ " a mangé de l'herbe");
    }
    
}

class Lion extends Carnivore{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }

}

class Tigre extends Carnivore{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }
    
}

class Gazelle extends Herbivore{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }
    
}

class Bison extends Herbivore{
    constructor(nom,taille,poids){
        super(nom,taille,poids)
    }
    
}



let lion1 = new Lion("Scar",110,190);
let gazelle1 = new Gazelle("Bambie",88,23);

gazelle1.Manger();

lion1.Manger(gazelle1);