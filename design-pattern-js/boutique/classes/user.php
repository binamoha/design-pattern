<?php
class User{
  private static $connexion;
  // 
  public static function setConnexion(){
    try{
      self::$connexion = new PDO('mysql:host=localhost;dbname=boutique', 'root', 'root');
    }catch(Exception $e){
      echo $e->getMessage();
    }
  }
  // 
  public static function inscription($nom, $prenom, $email, $mdp){
    // hasher le mot de passe
    $mdp = password_hash($mdp, PASSWORD_DEFAULT);
    // preparer la requette
    $request = self::$connexion->prepare("INSERT INTO users (nom_user, prenom, email, mot_de_passe, type) VALUES (?, ?, ?, ?, ?)");
    // executer la requette 
    if($request->execute(array($nom, $prenom, $email, $mdp, "Admin"))){
      header("Location: http://exo.com/boutique/client/login.php");
    }else{
      
    }
  }
}
