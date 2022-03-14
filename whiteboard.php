<?php
require "./components/header.php";
require "./components/toolbar.php"; ?>
<div id="board">
    <div id="mydiv"></div>
</div>
<script>
let resizebtn = document.getElementById("resize ");
let resizeActive = () => {
    console.log("app init");
    let object = document.getElementById("mydiv");
    let active = null;
    if (active == true || active == null) {
        object.className = "Resize-Active";
    } else {
        object.classList.remove("Resize-Active");
    }
};
</script>
<script src="./js/resize.js"></script>
<script src="./js/colors.js"></script>
<script src="./js/movable.js"></script>
<script src="./js/form.js"></script>