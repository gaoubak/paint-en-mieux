<?php

require "./db_connect.inc.php";

if (isset($_POST['submit'])) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $query = "SELECT * FROM users WHERE username = '$username' ";

    $result = mysqli_query($connection, $query);

    if (mysqli_fetch_array($result) > 0) {
        echo "Cet utilisateur existe.";
    } else {
        echo "Cet utilisateur n'existe pas.";
    }
}
