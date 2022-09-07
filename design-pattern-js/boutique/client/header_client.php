<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div>
      <a href="http://exo.com/boutique/index.php" class="navbar-brand">Accueil</a>
      <a href="http://exo.com/boutique/client/solde.php" class="navbar-brand">Solde</a>
      <a href="http://exo.com/boutique/client/categorie.php" class="navbar-brand">Femme</a>
      <a href="http://exo.com/boutique/client/categorie.php" class="navbar-brand">Homme</a>
    </div>
    <div>
      <!-- si le client n'est pas connecté -->
      <a href="http://exo.com/boutique/client/login.php" class="navbar-brand">Sign In</a>
      <a href="http://exo.com/boutique/client/inscription.php" class="navbar-brand">Sign Up</a>

      <!-- si le client est connecté -->
      <a href="#" class="navbar-brand">Mes achats</a>
      <form method="post" class="d-flex">
        <button name="logout" class="btn btn-outline-success" type="submit">Deconnexion</button>
      </form>
    </div>
  </div>
</nav>
