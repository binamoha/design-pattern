<?php
require_once "classes/produit.php";
Produit::setConnexion();
$produits = Produit::listeProduit();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
  <title>Document</title>
</head>
<body>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Reference</th>
          <th>Nom</th>
          <th>Fournisseur</th>
          <th>Quantite</th>
          <th>Commentaire</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <?php foreach($produits as $p){ ?>
          <tr>
            <td><?= $p['id'] ?></td>
            <td><?= $p['reference'] ?></td>
            <td><?= $p['nom_produit'] ?></td>
            <td><?= $p['fournisseur_id'] ?></td>
            <td><?= $p['quantite'] ?></td>
            <td><?= $p['commentaire_produit'] ?></td>
            <td>
              <a class="btn btn-warning" href="modifier_produit.php?id=<?= $p['id'] ?>">Modifier</a>
              <a class="btn btn-danger" href="">Spprimer</a>
            </td>
          </tr>
        <?php } ?>
      </tbody>
    </table>
  </div>
</body>
</html>