<?php
class Produit{
  private static $connexion;

  public static function setConnexion(){
    try{ //  essayer d'etablir la connexion avec la bd
      self::$connexion = new PDO('mysql:host=localhost;dbname=gestion_stock','admin','passer');
    }catch(Exception $e){ // si non on affiche une erreur
      echo "erreur => ".$e->getMessage();
    }
  }
  // methode pour ajouter un produit
  public static function ajouterProduit($ref, $nom, $quantite, $commentaire, $idF){
    // preparer la requette pour enregistrer un produit
    $request = self::$connexion->prepare("INSERT INTO `produits`(`reference`, `nom_produit`, `quantite`, `commentaire_produit`, `fournisseur_id`) VALUES (?,?,?,?,?)");
    // executer la requette
    $request->execute(array($ref, $nom, $quantite, $commentaire, $idF));
    header("Location: ajout_produit.php");
  }

  // methode pour lister les produits
  public static function listeProduit(){

  }

  // methode pour modifier un produit
  public static function modifierProduit($id){

  }

  public static function supprimerProduit($id){

  }
  // methode pour recuperer les informations d'un produit
  public static function infoProduit($id){
    // preaprer la requette
    $request = self::$connexion->prepare("SELECT * FROM produits WHERE id = ?");
    // executer la requette
    $request->execute(array($id));
    // retourner le resultat
    return $request->fetch();
  }
}