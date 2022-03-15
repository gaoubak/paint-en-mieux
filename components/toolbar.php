<div class="tool-bar">
    <div class="tools">
        <button onclick='addShape("circle")' class="tool shapes" id="circle">
            <img src="./styles/img/Circle.svg" alt="add circle" />
        </button>
        <button onclick='addShape("triangle")' class="tool shapes" id="triangle">
            <img src="./styles/img/Triangle.svg" alt="add triangle" />
        </button>
        <button onclick="addShape('rectangle')" class="tool" id="rectange">
            <img src="./styles/img/Rectangle.svg" alt="add rectangle" />
        </button>
        <button onclick='addShape("text")' class="tool shapes" id="txt">
            <img src="./styles/img/Txt.svg" alt="add txt" />
        </button>
        <button onclick="runDrag()" class="tool drag" id="position">
            <img src="./styles/img/Position.svg" alt="position" />
        </button>
        <button onclick="resizable()" class="tool resize" id="resize">
            <img src="./styles/img/Resize.svg" alt="resize" />
        </button>
        <div class="tool">
            <input type="color" name="primary-color" id="primarycolor">
        </div>
        <div class="tool">
            <input type="color" name="secondary-color" id="secondaryColor">
        </div>
        <button onclick="" class="tool" id="Eraser">
            <img src="./styles/img/Erase.svg" alt="eraser" />
        </button>
        <!-- à refaire-->
        <button onclick="window.print()" class="tool" id="Save">
            <img src="./styles/img/Save.svg" alt="Save" />
        </button>
        <a href="./includes/Logout.inc.php" class="tool"><img src="./styles/img/Logout.svg" alt="LogOut"></a>
    </div>
</div>