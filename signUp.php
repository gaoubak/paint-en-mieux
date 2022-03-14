<!-- @Ethan -->
<section class="signUp-Form">
    <h1>Sign Up</h1>
    <form action="./includes/signUp.inc.php" method="POST">
        <label for="email">Your email</label>
        <input type="email" name="email" id="">
        <label for="username">Your username</label>
        <input type="text" name="username" id="">
        <label for="password">Your password</label>
        <input type="password" name="password" id="">
        <label for="pwdcheck">Repeat password</label>
        <input type="password" name="pwdcheck" id="">
        <button type="submit" name="submit">Sign Up</button>
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