<?php require "./components/header.php" ?>
<section class="Login-Form">
    <form action="./includes/Login.inc.php" method="POST">
        <h1>Login</h1>
        <div class="uid">
            <label for="username">Your username/Email</label>
            <input type="text" name="uid" id="">
        </div>
        <div class="password">
            <label for="password">Your password</label>
            <input type="password" name="pwd" id="">
        </div>
        <button type="submit" name="submit">Login</button>
        <a href="signUp.php">Do you want to create an account instead ?</a>
    </form>
    <?php
    if (isset($_GET['error'])) {
        if ($_GET['error'] == 'emptyinput') {
            echo "<p class='error'>Fill all fields</p>";
        } else if ($_GET['error'] == 'InvalidUsername') {
            echo "<p class='error'>Your username has an forbidden character</p>";
        } else if ($_GET['error'] == 'invalidEmail') {
            echo "<p class='error'>Your email isn't valid</p>";
        } else if ($_GET['error'] == 'passwordAreDifferent') {
            echo "<p class='error'>The password are not the same</p>";
        } else if ($_GET['error'] == 'usernameTaken') {
            echo "<p class='error'>This username is taken</p>";
        } else if ($_GET['error'] == 'none') {
            echo "<p class='error'>This username is taken</p>";
        }
    }
    ?>
</section>