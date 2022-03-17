<?php
session_start();
require "./db_connect.inc.php";
require "./functions.inc.php";
$sql = "INSERT INTO projects (author,projectname,board) VALUES (?,?,?);";
$stmt = mysqli_stmt_init($connection);
if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../whiteboard.php?error=marchepasctout");
    exit();
}
$author = $_SESSION['useruid'];
$projectname = $_POST['projectname'];
$board = $_POST['board'];
mysqli_stmt_bind_param($stmt, "sss", $author, $projectname, $board);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
exit();