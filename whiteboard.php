<?php
require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<div id="board">
</div>
<script src="./js/whiteboard.js"></script>
<script>
function divToJson() {
    let listofitem = document.querySelectorAll(".item");

    for (let item of listofitem) {
        listofitem.forEach((i) => {
            i.classList.remove("focus");
        });
    }
    let board = document.getElementById("board")
    let childrens = []
    // let elements = board.children
    // for (let i = 0; i < elements.length; i++) {
    //     let childrenAndAttributes = elements[i].attributes
    //     childrens.push(childrenAndAttributes)
    // }
    for (let i = 0; i < board.innerHTML.length; i++) {
        childrens.push(board.innerHTML)
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