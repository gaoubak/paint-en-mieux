<?php // Ethan
require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<div id="board">
</div>
<script src="./js/whiteboard.js"></script>
<?php
require "./includes/db_connect.inc.php";
require "./includes/functions.inc.php";
exit();
?>