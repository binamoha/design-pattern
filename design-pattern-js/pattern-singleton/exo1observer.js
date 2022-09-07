class AppleProduct {
    observers = [];
    products = [];
  
    constructor(){}
   
    addProduct(product){
      this.products.push(product);
      this.notifyAllObservers();
    }
   
    getProducts(){
      return this.products
    }
   
    attachObserver(observer){
      this.observers.push(observer);
    }
   
    detachObserver(observer){
      for(let i in this.observers){
        if(this.observers[i].name == observer.name){
          this.observers.splice(i,1)
        }
      }
    }
   
    notifyAllObservers(){
      for (let i of this.observers){
        i.update()
      }
    }
  }
   
   
  class Observer {
    constructor(name, appleProduct){
      this.name = name;
      this.appleProduct = appleProduct;
      if(new.target == Observer){
        throw Error("Classe Abstraite , interdiction d'instancier")
      }
    }
   
    update(){
      throw Error("Méthode à définir")
    }
  }
  
  class Client extends Observer{
    constructor(name, appleProduct, age){
        super(name, appleProduct);
        this.age = age;
    }
  
  
    update(){
        console.log(`${this.name} a bien reçu la notification concernant : ${this.appleProduct.products}.`)
    }
  }
  
  class Concurrent extends Observer{
    constructor(name, appleProduct, logo){
        super(name, appleProduct);
        this.logo = logo;
    }
  
  
    update(){
      console.log(`${this.name} a bien reçu la notification concernant : ${this.appleProduct.products}.`)
    }
  }
  
  let appleProduct = new AppleProduct();
   
  let client1 = new Client("Marc",appleProduct, 26);
  let client2 = new Client("Julie",appleProduct, 24);
  
  let concurrent1 = new Concurrent("Zilo", appleProduct, "zebra")
   
  appleProduct.attachObserver(client1);
  appleProduct.attachObserver(client2);
   
  appleProduct.addProduct("Iphone 15");
  appleProduct.addProduct("Ipad 5 Pro");
  appleProduct.addProduct("Iwatch 6");