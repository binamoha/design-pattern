class Strategy {
    //classe abstraite
    constructor(){
        if(new.target == Strategy){
            throw Error("Classe abstraite à définir")
        }
    }

    execute(a,b){
        throw Error("Méthode à définir")
    }
}


class addStrategy extends Strategy{
    constructor(){
        super()
    }

    execute(a,b){
        return a +b;
    }
}

class subStrategy extends Strategy{
    constructor(){
        super()

    }

    execute(a,b){
        return a - b;
    }
}

class mulStrategy extends Strategy{
    constructor(){
        super()

    }

    execute(a,b){
        return a*b;
    }
}


class Context {
    strategy;
    constructor(){
        
    }

    setStrategy(strategy){
        this.strategy = strategy;
    }

    executeStrategy(a,b){
        this.strategy.execute(a,b)
    }
}

var app = new Context();

var val1 = prompt("Donnez un nombre");
var val2 = prompt("Donnez un autre nombre");
var op = prompt("Quelle opération voulez vous réaliser")

switch (op){
    case "addition":
        app.setStrategy(new addStrategy());
        var res = app.strategy.execute(parseInt(val1),parseInt(val2));
        break;

    case  "soustraction":
        app.setStrategy(new subStrategy());
        var res = app.strategy.execute(parseInt(val1),parseInt(val2));
        break;

    case  "multiplication":
        app.setStrategy(new mulStrategy());
        var res = app.strategy.execute(parseInt(val1),parseInt(val2));
        break;

    
}

console.log("Le résultat de l'opération est "+res)

