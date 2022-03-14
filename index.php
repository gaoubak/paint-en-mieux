<?php require_once "./components/header.php" ?>

<div class="welcome-page">
  <h2>Bienvenue sur</h1>
    <h1>Paint en mieux</h1>
    <?php
    if (isset($_SESSION["useruid"])) {
      // Send to dashboard instead of whiteboard
      header('location: ./whiteboard.php');
    } else {
      echo '<div class="links"><a href="./php/signUp.php">Créer un compte</a>|<a href="./Login.php">Se connecter</a></div>';
    }
    ?>
</div>
</body>

</html>