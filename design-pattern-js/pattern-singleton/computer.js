// Etape 1 :
// Créez une classe abstraite nommée Computer qui correspond à une classe mère et qui :
// · définit trois signatures (abstraites) de type string :
// o GetRam : qui permet de renvoyer la taille de la RAM.
// o GetHdd : qui permet de renvoyer la taille du Disque Dur.
// o GetCpu : qui permet de renvoyer la cadence du CPU.
// · redéfinit la méthode ToString() afin qu’elle renvoie les infos sur la RAM, Le DD et le CPU
// en une seule chaine de caractères.


class Abstract_Computer{


    constructor(RAM,DD,CPU){
        this._RAM = RAM;
        this._DD = DD;
        this._CPU = CPU;

        if(new.target == Abstract_Computer){

            throw Error("Classe abstraite : impossible d'instancier d'objet")
            }

    }

    getRam(){
        throw Error("Veuillez redefinir la méthode dans la classe fille");
    }

    getDD(){
        throw Error("Veuillez redefinir la méthode dans la classe fille");
    }

    getCPU(){
        throw Error("Veuillez redefinir la méthode dans la classe fille");
    }

    toString(){
        return "Je suis un ordinateur avec "+this.getRam()+" go de RAM\n"+this.getDD()+" go de DD\n"+this.getCPU()+" go de CPU";
    }
}

// Etape 2 :
// Créez deux classes filles PC et Server qui héritent de Computer avec pour chacune :
// · trois propriétés privées : Ram, Hdd, Cpu.
// · un constructeur avec tous les paramètres.
// · les 3 getters (GetRam(), GetHdd() et GetCpu()) qui redéfinissent celles de la classe mère.

class PC extends Abstract_Computer{
    constructor(RAM,DD,CPU) {
        super(RAM,DD,CPU);
    }

    getRam(){
        return this._RAM;
    }

    getDD(){
        return this._DD;
    }

    getCPU(){
        return this._CPU;
    }

}

class Server extends Abstract_Computer{
    constructor(RAM,DD,CPU) {
        super(RAM,DD,CPU);
    }

    getRam(){
        return this._RAM;
    }

    getDD(){
        return this._DD;
    }

    getCPU(){
        return this._CPU;
    }
    
}

class ComputerFactory {
    constructor(){

    }

    static getComputer(RAM,DD,CPU,type){
        if(type=="PC"){
            return new PC(RAM,DD,CPU);
        }
        else if(type=="Server"){
            return new Server(RAM,DD,CPU);
        }
    }
}


let pc1 = ComputerFactory.getComputer(16,520,"i7","PC")
let server1 = ComputerFactory.getComputer(128,3072,"i12","Server")

console.log(pc1.toString())
console.log(server1.toString())