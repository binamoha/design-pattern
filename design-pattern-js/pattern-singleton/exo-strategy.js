class PaiementStrategy {
    //classe abstraite
    constructor(){
        if(new.target == PaiementStrategy){
            throw Error("Classe abstraite à définir")
        }
    }

    execute(montant){
        throw Error("Méthode à définir")
    }
}


class PaypalStrategy extends PaiementStrategy{
    constructor(id,password){
        super()
        this.id = id;
        this.password = password;
        
    }

    execute(montant){
        console.log(montant+"$payée par paypal");

    }
}

class CarteDeCrediStrategy extends PaiementStrategy{
    constructor(num , crypto ,date){
        super()
        this.num = num;
        this.crypto = crypto;
        this.date = date;


        

    }

    execute(montant){
        console.log(montant+"$payée par paypal");
        
    }
}


class Article {
    strategy;
    constructor(nom, prix){
        this.nom = nom;
        this.prix = prix;
        
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    Payer(montant){
        this.strategy.execute(montant)
    }
}

var souri = new Article("souri","17£")
var clavier = new Article("clavier","25£")
souri.setStrategy( new PaypalStrategy("miloud","1234") )
souri.Payer("17£")