<div class="tool-bar">
    <div class="tools">
        <div class="tool shapes" id="circle">
            <img src="./styles/img/Circle.svg" onclick="addShape('circle')" />
        </div>
        <div class="tool shapes" id="triangle">
            <img src="./styles/img/Triangle.svg" onclick="addShape('triangle')" />
        </div>
        <div class="tool" id="rectange">
            <img src="./styles/img/Rectangle.svg" onclick="addShape('rectangle')" />
        </div>
        <div class="tool shapes" id="txt">
            <img src="./styles/img/Txt.svg" />
        </div>
        <button onclick="runDrag()" class="tool drag" id="position">
            <img src="./styles/img/Position.svg" />
        </button>
        <button onclick="resizeActive()" class="tool resize" id="resize">
            <img src="./styles/img/Resize.svg" />
        </button>
        <div class="tool">
            <input type="color" name="primary-color" id="primarycolor">
        </div>
        <div class="tool">
            <input type="color" name="secondary-color" id="secondaryColor">
        </div>
        <div class="tool" id="Eraser">
            <img src="./styles/img/Erase.svg" />
        </div>
        <button onclick="window.print()" class="tool" id="Save">
            <img src="./styles/img/Save.svg" />
        </button>
    </div>
</div>