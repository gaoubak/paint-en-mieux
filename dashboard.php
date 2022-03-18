<?php
// Ethan
require "./components/header.php";
require "./includes/db_connect.inc.php";
// Connection à la db en séléctionnent uniquement les projets de l'utilisateur connecté
$getProjectsCommand = "SELECT projectname,author,id FROM projects WHERE author=" . '"' . $_SESSION["useruid"] . '"';
$getProjects = mysqli_query($connection, $getProjectsCommand);
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
}
?>

<div class="dashboard">
    <nav class="dashboard-nav">
        <h1>My project</h1>
        <ul>
            <li><a href="intel.php"><img src="./styles/img/info.svg" alt=""></a></li>
            <li><a href="https://github.com/paint-en-mieux/paint-en-mieux"><img src="./styles/img/github.svg"
                        alt=""></a></li>
            <li><a class="logout" href="./includes/Logout.inc.php"><img src="./styles/img/logout.svg" alt=""></a></li>
        </ul>
    </nav>
    <section class="project-dashboard">
        <div id="addCard">
            <img class="create-project" src="./styles/img/add.svg" alt="">
            <h3>Create new project</h3>
        </div>
        <div id="createproject" class="invisible">
            <div class="with-whiteboard">
                <a href="whiteboard.php">Create just a draft</a>
            </div>
            <div class="with-blackboard">
                <a href="blackboard.php">Create a permanent board</a>
            </div>
        </div>
        <?php
        // boucle pour rendre les projets et si inexistant affiche un message indiquant qu'il n'y a pas de projet 
        if (mysqli_num_rows($getProjects) > 0) {
            while ($row = mysqli_fetch_assoc($getProjects)) {
                echo "<button onclick='load({$row["id"]})' class='project-card " . $row['author'] . "'><h2 class='project-name'>Project:</h2><span>" . $row["projectname"] . "</span>" . "<h3 class='author'>Author: " . $row["author"] . "</h3></button>";
            }
        } else {
            echo "you don't have any projects";
        }
        ?>
    </section>
</div>
<?php
mysqli_close($connection); ?>
<script>
// surveille le clique sur le bouton ajouter 
// et rajoute/ enlève des class html pour montrer les boutons
let addBtn = document.getElementById("addCard");
let options = document.getElementById("createproject");
addBtn.addEventListener("click", () => {
    if (options.classList.contains("visible")) {
        options.classList.remove("visible");
        options.classList.add("invisible");
    } else {
        options.classList.remove("invisible");
        options.classList.add("visible");
    }
});
</script>
<script src="./js/dashboard.js"></script>