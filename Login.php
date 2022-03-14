<section class="Login-Form">
    <h1>Login</h1>
    <form action="./includes/Login.inc.php" method="POST">
        <label for="username">Your username/Email</label>
        <input type="text" name="username" id="">
        <label for="password">Your password</label>
        <input type="password" name="password" id="">
        <button type="submit" name="submit">Login</button>
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