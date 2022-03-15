<?php
require "./components/header.php";
require "./components/toolbar.php"; ?>
<div id="board">
</div>
<script>
</script>
<script src="./js/colors.js"></script>
<script src="./js/shape.js"></script>
<script src="./js/movable.js"></script>
<script src="./js/resize.js"></script>
<script src="./js/addtxt.js"></script>
<script src="./js/focus.js"></script>
<?php
function getBoardContent($projectName)
{
    require "./includes/db_connect.inc.php";
    require "./includes/functions.inc.php";

    $author = $_SESSION["useruid"];
    $boardcontent = $_GET["uid"];
    saveProject($connection, $author, $projectName, $boardcontent);
}
?>
<script src="./js/project.inc.js"></script>