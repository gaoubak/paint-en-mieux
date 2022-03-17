<?php
require "./components/header.php";
require "./includes/db_connect.inc.php";
$loadProject = "SELECT projectname,board FROM projects WHERE projectname=" . '"' . $_SESSION["useruid"] . '"';
$getProject = mysqli_query($connection, $loadProject);