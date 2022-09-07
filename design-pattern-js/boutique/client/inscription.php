<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <title>Inscription</title>
</head>
<body>
<?php include "header_client.php"; ?>
<div class="container">
  <form action="traitement_client.php" method="post">
    <div class="form-group">
      <label for="">Nom</label>
      <input type="text" name="nom" class="form-control">
    </div>

    <div class="form-group">
      <label for="">Prenom</label>
      <input type="text" name="prenom" class="form-control">
    </div>

    <div class="form-group">
      <label for="">Email</label>
      <input type="email" name="email" class="form-control">
    </div>

    <div class="form-group">
      <label for="">Mot de passe</label>
      <input type="password" name="password" class="form-control">
    </div>

    <div class="form-group">
      <button class="btn btn-primary" name="register">Inscription</button>
    </div>
  </form>
</div>
</body>
</html>