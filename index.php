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
    <div class="tool-bar">
        <div class="tools">
            <div class="tool shapes circle "><img src="./styles/img/Circle.svg" /></div>
            <div class="tool shapes triangle"><img src="./styles/img/Triangle.svg" /></div>
            <div class="tool rectange"><img src="./styles/img/Vector-1.svg" /></div>
            <div class="tool shapes txt"><img src="./styles/img/Vector.svg" /></div>
            <div class="tool primary"><input type="color" name="primary-color" id=""></div>
            <div class="tool secondary"><input type="color" name="secondary-color" id=""></div>
            <div class="tool eraser"><img src="./styles/img/Erase.svg" /></div>
            <div class="tool save"><img src="./styles/img/Vector-2.svg" /></div>
        </div>
    </div>
    <div class="board">
        <div id="mydiv"></div>
    </div>
    <script>
    // Make the DIV element draggable:
    dragElement(document.getElementById("mydiv"));

    function dragElement(elmnt) {
        var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    </script>
</body>

</html>