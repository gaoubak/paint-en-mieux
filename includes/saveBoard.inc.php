<?php
// Ethan
session_start();
require "./db_connect.inc.php";
require "./functions.inc.php";
// Commande SQL pour sauvegarder le projet avec ses attribut
$sql = "INSERT INTO projects (author,projectname,board) VALUES (?,?,?);";
$stmt = mysqli_stmt_init($connection);
if (!mysqli_stmt_prepare($stmt, $sql)) {
    header("location: ../whiteboard.php?error=marchepasctout");
    exit();
}
$author = $_SESSION['useruid']; // Nom de l'utilisateur récupérer via la session
$projectname = $_POST['projectname']; // Attribut 
$board = $_POST['board'];
mysqli_stmt_bind_param($stmt, "sss", $author, $projectname, $board);
mysqli_stmt_execute($stmt);
mysqli_stmt_close($stmt);
exit();