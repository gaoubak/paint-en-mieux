<?php
// J'utilise pas PDO pcq on est en PHP procédurale pas OOP donc 🖕🖕🖕🖕🖕
$ip = "localhost";
$dbUsername = "root";
$dbPass = "";
$dbName = "paintenmieux";

$connection = mysqli_connect($ip, $dbUsername, $dbPass, $dbName);
if (!$connection) {
    die("Connection to db failed : " . mysqli_connect_error());
}