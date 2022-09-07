class Vehicule {
    constructor(nom,vitesse,poids)
    {
        this.nom = nom;
        this.vitesse = vitesse;
        this.poids = poids;

        if(new.target == Vehicule){
            throw Error("VOUS NE POUVEZ PAS INSTANCIER CA")
            }
    }

    deplacer(){
        console.log('Déplacement de la marchandise en cours')
    }
}


class VehiculeMarin extends Vehicule{
    constructor(nom,vitesse,poids){
        super(nom,vitesse,poids);
    }
    deplacer(){
        console.log('Déplacement de la marchandise en cours par voie marine')
    }
}


class VehiculeTerrestre extends Vehicule{
    constructor(nom,vitesse,poids){
        super(nom,vitesse,poids);
    }
    deplacer(){
        console.log('Déplacement de la marchandise en cours par voie teresstre')
    }
}

class VehiculeAerien extends Vehicule{
    constructor(nom,vitesse,poids){
        super(nom,vitesse,poids);
    }
    deplacer(){
        console.log('Déplacement de la marchandise en cours par voie aerienne')
    }
}



class VehiculeFactory {

    constructor(){
    }

    creerVehicule(nom,vitesse,poids,type){
        
        if(type=="marin"){
            return new VehiculeMarin(nom,vitesse,poids);
        }
        else if(type=="terrestre"){
            return new VehiculeTerrestre(nom,vitesse,poids);
        }
        else if(type=="aerien"){
            return new VehiculeTerrestre(nom,vitesse,poids);
        }

    }

}

let usine = new VehiculeFactory();

// let bateau = new VehiculeMarin("Ferry",100,80);
let bateau = usine.creerVehicule("Ferry",100,80,"marin");
bateau.deplacer()