<?php
// Ethan
// Plan B si jamais le whiteboard ne pouvait pas être sauvegarder 
require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<canvas id="canvas"></canvas>
<script src="./js/blackboard.js"></script>
</body>

</html>