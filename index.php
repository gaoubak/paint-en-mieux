<?php require_once "./components/header.php" ?>


<h2>Bienvenue sur</h1>
  <h1>Paint en mieux</h1>
  <?php
  if ($userloggedin) {
    include "./whiteboard.php";
  } else {
    echo '<div><a href="./php/signUp.php">Créer un compte</a><a href="./php/Login.php">Se connecter</a></div>';
  }
  ?>

  </body>

  </html>