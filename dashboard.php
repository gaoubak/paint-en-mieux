<?php
require "./components/header.php";
require "./includes/db_connect.inc.php";
$getProjectsCommand = "SELECT projectname,author FROM projects";
$getProjects = mysqli_query($connection, $getProjectsCommand);
if (mysqli_num_rows($getProjects) > 0) {
    while ($row = mysqli_fetch_assoc($getProjects)) {
        echo "Project: " . $row["projectname"] . " Author: " . $row["author"];
    }
} else {
    echo "you don't have any projects";
}
mysqli_close($connection);