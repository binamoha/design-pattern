
// Exercice 1: 
// On veut créer une simulation d'aéroport 
// On aura besoin des classes Aéroport , Avion , Avion de chasse , Avion de transport , et Pilote 
// Il peut y avoir plusieurs avions dans un aéroport et plusieurs pilote, mais il n'y qu'un seul aéroport !



class Aeroport{
    constructor(pays, nom) {

        this.pays = pays;
        this.nom = nom;


        if (Aeroport.exists) {
            return Aeroport.instance;
          }
          Aeroport.instance = this;
          Aeroport.exists = true;
          return this;
          
        }

        getNom() {
            return this.nom; 
          }
        
          setNom(nom) {
            this.nom = nom;
          }
}

class Pilote {
    constructor(id, nom){

        this.id =id;
        this.nom =nom; 

    }
  }


  class Avion {
    constructor(voler, destination){

        this.voler = voler;
        this.destination = destination;   
    }