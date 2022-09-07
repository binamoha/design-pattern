class Database {
  
    constructor(data,taille) {

      this._data = data;
      this._taille = taille;


      //Pattern Singleton
      if (Database.exists) {
        return Database.instance;
      }
      //L'objet ou l'on est
      Database.instance = this;
      // Si l'objet existe ou pas
      Database.exists = true;
      return this;
      
    }
  
    getData() {
      return this._data; //Convention pour dire que l'attribut est private
    }
  
    setData(data) {
      this._data = data;
    }
  }

  // usage
  const mongo = new Database('mongo');
  console.log(mongo.getData()); // mongo
  
  const mysql = new Database('mysql');
  console.log(mysql.getData()); // mongo