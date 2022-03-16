<?php
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
if (isset($_GET["board"]) && isset($_GET["projectName"])) {
    $boardcontent = $_GET["board"];
    $projectName = $_GET["projectName"];
    $author = $_SESSION["useruid"];
    saveProject($connection, $author, $projectName, $boardcontent);
}
?>