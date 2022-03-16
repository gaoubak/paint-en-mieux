<?php require "./components/header.php" ?>
<section class="signUp-Form">
    <form action="./includes/signUp.inc.php" method="POST">
        <h1>Sign Up</h1>
        <div class="email">
            <label for="email">Your email</label>
            <input type="email" name="email" id="">
        </div>
        <div class="username">
            <label for="username">Your username</label>
            <input type="text" name="username" id="">
        </div>

        <div class="password"><label for="password">Your password</label>
            <input type="password" name="password" id="">
        </div>
        <div class="passCheck"> <label for="pwdcheck">Repeat password</label>
            <input type="password" name="pwdcheck" id="">
        </div>

        <button type="submit" name="submit">Sign Up</button>
        <a href="Login.php">Did you wanted to login instead ?</a>
    </form>
    <?php
    if (isset($_GET['error'])) {
        if ($_GET['error'] == 'wrongLogin') {
            echo "<p class='error'>One of the two fields is wrong</p>";
        } else if ($_GET['error'] == 'emptyinput') {
            echo "<p class='error'>Fill up all the fields</p>";
        }
    }
    ?>
</section>