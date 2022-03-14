<?php

if (isset($_POST['submit'])) {

    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $pwdcheck = $_POST['pwdcheck'];

    // error handling

    require "./db_connect.inc.php";
    require "./functions.inc.php";
    if (EmptyInputSignUp($name, $email, $password, $pwdcheck) !== false) {
        header("location: ../signUp.php?error=emptyinput");
        exit();
    }
    if (InvalidUsername($name) !== false) {
        header("location: ../signUp.php?error=InvalidUsername");
        exit();
    }
    if (InvalidEmail($email) !== false) {
        header("location: ../signUp.php?error=invalidEmail");
        exit();
    }
    if (pwdMatch($password, $pwdcheck) !== false) {
        header("location: ../signUp.php?error=passwordAreDifferent");
        exit();
    }
    if (UsernameExist($connection, $name, $email) !== false) {
        header("location: ../signUp.php?error=usernameTaken");
        exit();
    }

    createUser($connection, $name, $email, $password);
} else {
    header("location: ../signUp.php");
    exit();
}