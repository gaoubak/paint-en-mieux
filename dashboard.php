<?php
require "./components/header.php";
require "./includes/db_connect.inc.php";
$getProjectsCommand = "SELECT projectname,author FROM projects";
$getProjects = mysqli_query($connection, $getProjectsCommand);
?>

<div class="dashboard">
    <nav class="dashboard-nav">
        <h1>My project</h1>
        <ul>
            <li><a href="intel.php">How to use whiteboard</a></li>
            <li><a href="https://github.com/paint-en-mieux/paint-en-mieux">OpenSource project</a></li>
            <li><a class="logout" href="./includes/Logout.inc.php">Logout</a></li>
        </ul>
    </nav>
    <section class="project-dashboard">
        <div id="addCard">
            <img class="create-project" src="./styles/img/add.svg" alt="">
            <h3>Create new project</h3>
        </div>
        <?php
        if (mysqli_num_rows($getProjects) > 0) {
            while ($row = mysqli_fetch_assoc($getProjects)) {
                echo "<div class='project-card'><h2 class='project-name'>Project:</h2><span>" . $row["projectname"] . "</span>" . "<h3 class='author'>Author: " . $row["author"] . "</h3></div>";
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
let addBtn = document.getElementById("addCard")
addBtn.addEventListener("click", () => {
    console.log("Créer un projet");
})
</script>