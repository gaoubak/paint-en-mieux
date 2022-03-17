<?php
session_start();
require "./db_connect.inc.php";
$loadProject = "SELECT projectname,board FROM projects";
// WHERE id=" . '"' . $_GET["id"] . '"'
$getProject = mysqli_query($connection, $loadProject);
if (mysqli_num_rows($getProject) > 0) {
    while ($row = mysqli_fetch_assoc($getProject)) {
        var_dump($row);
    }
} else {
    echo "you don't have any projects";
}