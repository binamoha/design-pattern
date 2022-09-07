class IUtilisateur {
    constructor(nom){
        this.nom = nom

        if(new.target==IUtilisateur){
            throw Error("Vous ne pouvez pas instancier cette classe")
        }
    }

    afficherUtilisateur(){
        throw Error("Méthode abstraite à redefinir")
    }
}


class Client extends IUtilisateur {
    constructor(nom){
        super(nom);
    }

    afficherUtilisateur(){
        console.log("Je suis l'utilisateur de nom "+ this.nom)
    }

}


class Employe {
    constructor(nom,poste){
        this.nom = nom;
        this.poste = poste;
    }

    afficherNom(){
        console.log("Je suis "+this.nom)
    }

    afficherPoste(){
        console.log("Je suis "+this.poste)
    }

}

class EmployeAdapter extends IUtilisateur{
    constructor(employe){
        this.employe = employe
    }

    afficherUtilisateur(){
        console.log("Je suis "+ this.employe.afficherNom() +" et je suis au poste de "+ this.employe.afficherPoste())
    }

}

class Program{
    constructor(listUtilisateurs){
        this.listUtilisateurs = listUtilisateurs;
    }

    AfficherUtilisateurs(){
        for(let utilisateur of this.listUtilisateurs){
            utilisateur.afficherUtilisateur()
        }

    }

}

let us1 = new Client("John Doe");
let us2 = new Client("Will Smith");
let us3 = new Employe("William Richard","comptable");
us3 = new EmployeAdapter(us3);



let system = new Program([us1,us2,us3]);
system.AfficherUtilisateurs()