class Personne {
    lieu ="Doranco";

    constructor(nom,prenom,age){
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    presentation(){
        console.log("Je m'appelle "+this.nom+" "+this.prenom)
    }

    calcul(a,b){
        return a+b;
    }

}

let p1 = new Personne("Chiboub","Raouf",22);
p1.lieu = "Doranco";

p1.presentation()
console.log(p1.calcul(17,-5))