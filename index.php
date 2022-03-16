<?php require_once "./components/header.php" ?>

<div class="welcome-page">
    <div class="logSign-board">
        <h2>Bienvenue sur</h1>
            <h1>Paint en mieux</h1>
            <?php
      if (isset($_SESSION["useruid"])) {
        // Send to dashboard instead of whiteboard
        header('location: ./dashboard.php');
      } else {
        echo '<div class="links"><a href="./signUp.php">Créer un compte</a>|<a href="./Login.php">Se connecter</a></div>';
      }
      ?>
    </div>
</div>
</body>

</html>