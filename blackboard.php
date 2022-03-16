<?php require "./components/header.php";
require "./components/toolbar.php";
if (!isset($_SESSION["useruid"])) {
    header("location: index.php");
} ?>
<canvas id="canvas"></canvas>
<script>
window.addEventListener('load', () => {
    const canvas = document.getElementById("canvas")
    const context = canvas.getContext("2d");
    canvas.height = window.innerHeight - 70;
    canvas.width = window.innerWidth - 50;
    // context.fillRect(x,y,largeur,hauteur)
    //context.fillRect(50, 150, 200, 500)
    //context.strokeRect(260, 150, 200, 500)
    // let painting
})
</script>
</body>

</html>