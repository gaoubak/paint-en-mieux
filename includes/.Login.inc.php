<?php
session_start();
require "./db_connect.inc.php";

if (isset($_POST['submit'])) {
    $username = $_POST['uid'];
    $password = $_POST['pwd'];

    $query = "SELECT * FROM users WHERE username = '$username' ";

    $result = mysqli_query($connection, $query);
    if (mysqli_fetch_array($result, MYSQLI_NUM) > 0) {
        $data = $result->fetch_all();
        if (password_verify($password, $data["password"])) {
            echo "Connexion effectuée";
            $_SESSION["uid"] = $username;
        }
    } else {
        echo "Cet utilisateur n'existe pas.";
    }
} else {
    header('location: ../Login.php');
    exit();
}
//UsernameExist($connection, $name, $email)
