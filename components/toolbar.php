<?php
// Ethan
// Tool bar avec l'include de l'actuel toolbar 
// à l'origine pour permettre d'avoir différent type d'outils si on était sur la version canvas ou la version html 
// de paint
?>
<div class="tool-bar">
    <div class="tools">
        <a href="dashboard.php" class="tool shapes" id="home">
            <img src="./styles/img/home.svg" alt="select" />
        </a>
        <?php require "./components/whiteboard.nav.php"; ?>
    </div>
</div>