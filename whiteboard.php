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
<script>
    function divToJson() {
        let board = document.getElementById("board")
        let childrens = []
        let elements = board.children
        for (let i = 0; i < elements.length; i++) {
            let childrenAndAttributes = elements[i].attributes
            childrens.push(childrenAndAttributes)
        }
        console.log(childrens);
        let projectname = document.getElementById("projectname").value
        window.location = `whiteboard.php?board="${childrens}"&projectName=${projectname}`
    }
</script>
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