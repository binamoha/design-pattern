class Eleve {

    observers = [];
    notes = [];
    moyenne ;
   
       constructor(nom){
           this.nom = nom;
   
       }
   
       ajouterNote(note){
           //On veut notifier les parents lorsque leur enfant recoit une nouvelle note
           this.notes.push(note);
           this.notifyAllObservers();
       }
   
       getMoyenne(){
           let sum = 0;
           for (let i  in this.notes){
               sum += this.notes[i]
           }
           this.moyenne = sum / this.notes.length;
   
           return this.moyenne;
       }
   
       setMoyenne(moyenne){
           this.moyenne = moyenne;
       }
   
       getNotes(){
           return this.notes
       }
   
       //Ajouter un observateur
       attachObserver(observer){
           this.observers.push(observer);
       }
   
       //Supprimer un observateur
       detachObserver(observer){
           for(let i in this.observers){
               if(this.observers[i].nom == observer.nom){
                   //Ici splice enleve un élement à partir de l'index i
                   this.observers.splice(i,1)
               }
           }
       }
   
       //Notifier tout les observateurs
       notifyAllObservers(){
           for (let i of this.observers){
               i.update()
           }
       }
   
   }
   
   
   class Observer {
       //Classe abstraite
       constructor(nom,eleve){
           this.nom = nom;
           this.eleve = eleve;
           if(new.target == Observer){
               throw Error("Classe Abstraite , interdiction d'instancier")
           }
       }
   
       update(){
           throw Error("Méthode à définir")
       }
   }
   
   
   class ParentsEleve extends Observer{
       constructor(nom,eleve){
           super(nom,eleve)
       }
   
   
       update(){
           console.log(this.nom +" a bien reçu la notification à propos de "+ this.eleve.nom)
           console.log(" j'ai observé ses notes "+ this.eleve.notes)
       }
   }
   
   var elev1 = new Eleve("Raouf");
   
   var no = new ParentsEleve("pere",elev1);
   var mere = new ParentsEleve("mere",elev1)
   
   elev1.attachObserver(no);
   elev1.attachObserver(mere);
   
   elev1.ajouterNote(15);
   elev1.ajouterNote(10);
   elev1.ajouterNote(18);
   
   