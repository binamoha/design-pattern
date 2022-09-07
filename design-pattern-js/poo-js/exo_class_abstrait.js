// Exercice sur les classes abstraites :
// La classe Animal est abstraite et déclare uniquement une méthode abstraite nommée action, sans paramètre et qui ne retourne rien.
// La classe Chien hérite de Animal et définit la méthode action qui écrit à l'écran "J'aboie".
// La classe Chat hérite de Animal et définit la méthode action qui écrit à l'écran "Je miaule".


class Animal_abstrait {
    constructor() {
        if (new.target == Animal_abstrait) {

            throw Error("VOUS NE POUVEZ PAS INSTANCIER CA")

        }
    }
    action() {
        throw Error("IL FAUT IMPLEMENTER")

    }

}

class Chien extends Animal_abstrait {

    action() {
        console.log("j'aboie")
    }
}

class Chat extends Animal_abstrait {

    action() {
        console.log("je miaule")
    }
}

let obj1 = new Chat();
let obj2 = new Chien();

obj2.action();
obj1.action();