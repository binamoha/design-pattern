//Classe abstraite
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