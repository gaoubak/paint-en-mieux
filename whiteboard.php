<?php // Ethan
require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<div id="board">
</div>
<script src="./js/whiteboard.js"></script>
<script>
// Tentative de rendu du projet
function renderBoardData(projectname, projectboard) {
    let board = document.getElementById("board")
    let pName = projectname;
    document.getElementById("projectname").value = pName
    let parsedJson = JSON.parse(projectboard);
    shape = document.createElement("div");
    shape.classList.add(parsedJson.push.Shapes);
    shape.classList.add("item");
    shape.id = parsedJson.push.Id;
    shape.style.top = parsedJson.push.Top;
    shape.style.left = parsedJson.push.Left;
    shape.style.height = parsedJson.push.Height;
    shape.style.width = parsedJson.push.Width;
    shape.style.background = parsedJson.push.BgColor
    shape.style.border = parsedJson.push.Border;
    board.appendChild(shape);
}
</script>
<?php
require "./includes/db_connect.inc.php";
require "./includes/functions.inc.php";
if (isset($_POST["board"])) {
    setcookie("projectname", $_POST['projectname']);
    setcookie("id", $_POST['id']);
    setcookie("board", $_POST['board']);
}
if ($_GET['loaddata'] == 'true') {
    echo "<script>renderBoardData(" . "'" . $_COOKIE['projectname'] . "'," . "'" . $_COOKIE['board'] . "'" . ")</script>";
}
exit();
?>