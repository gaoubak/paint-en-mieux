<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Paint en mieux</title>
    <link rel="stylesheet" href="./styles/styles.css" />
    <meta http-equiv="refresh" content="30" />
</head>

<body>
    <?php require "./components/toolbar.php" ?>
    <div id="board">
        <div id="mydiv"></div>
    </div>
    <script src="./js/resize.js"></script>
    <script>
    let shape = document.getElementById("mydiv");
    let Primarycolor = document.getElementById('primarycolor');
    Primarycolor.addEventListener('input', function(e) {
        Primarycolor.value = this.value;
        let fillColor = this.value;
        shape.style.background = this.value
    });
    let Secdondarycolor = document.getElementById('secondaryColor');
    Secdondarycolor.addEventListener('input', function(e) {
        Secdondarycolor.value = this.value;
        let bordercolor = this.value;
        console.log(bordercolor)
        shape.style.border = `thick solid ${this.value}`
        shape.style.borderStyle = "solid"
    });
    </script>
</body>

</html>