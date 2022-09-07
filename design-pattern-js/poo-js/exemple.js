class Guerrier {
    constructor(HP, AP, DP,) {
        this.HP = HP;
        this.AP = AP;
        this.DP = DP;
    }
    attaquer(guerrier2) {
        guerrier2.HP = guerrier2.HP - this.AP / guerrier2.DP
    }
}
class GuerrierLance extends Guerrier {
    constructor(HP, AP, DP) {
        super(HP, AP, DP)

    }
    puissance() {
        this.AP = this.AP * 2
    }
}





class GuerrierEpee extends Guerrier {
    constructor(HP, AP, DP) {
        super(HP, AP, DP)
    }
    moquerie(guerrier2) {
        guerrier2.DP = guerrier2.DP / 2
    }

}


let GuerrierLance1 = new GuerrierLance(500, 10, 5)
let GuerrierEpee1 = new GuerrierEpee(750, 15, 7)
GuerrierLance1.puissance()
console.log(GuerrierLance1.AP)
GuerrierLance1.attaquer(GuerrierEpee1)
console.log(GuerrierEpee1.HP)

