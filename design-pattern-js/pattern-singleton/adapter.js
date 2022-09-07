class Calculator {
    calculer(op1,op2,opr){
        switch(opr){

            case "+": return op1+op2;
            break;

            case "-": return op1-op2;
            break;

            case "*": return op1*op2;
            break;

            case "/": return op1/op2;
            break;

            default: alert("Opérateur non reconnu")


        }
    }
}


class CalculatorV2 {
    add(num1, num2) {
        return num1 + num2;
    }

    sub(num1,num2){
        return num1 - num2;
    }

    div(num1, num2) {
        return num1 / num2;
    }

    mult(num1, num2) {
        return num1 * num2;
      }

}

class CalculatorAdapter {
    constructor(){
        this.calculatrice = new CalculatorV2();
    }

    calculer(op1,op2,opr){
        switch(opr){

            case "+": return this.calculatrice.add(op1,op2);
            break;

            case "-": return this.calculatrice.sub(op1,op2);
            break;

            case "*": return this.calculatrice.mult(op1,op2);
            break;

            case "/": return this.calculatrice.div(op1,op2);
            break;

            default: alert("Opérateur non reconnu")


        }

    }
}


const calculatrice = new CalculatorAdapter();

var mult = calculatrice.calculer(2,3,"*");
console.log(mult);

var division = calculatrice.calculer(25,5,"/");
console.log(division);


var mult = calculatrice.calculer(20,30,"+");
console.log(mult);

var division = calculatrice.calculer(25,5,"-");
console.log(division);