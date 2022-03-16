function changeFont($font) {
  let addfont = document.querySelectorAll(".item");
  switch ($font) {
    case "BhuTuka":
      for (let fonttext of addfont) {
        fonttext.classList.remove("Smooch");
        fonttext.classList.remove("Montserrat");
        fonttext.classList.add("BhuTuka");
      }
      break;
    case "Smooch":
      for (let fonttext of addfont) {
        fonttext.classList.remove("Montserrat");
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.add("Smooch");
      }
      break;
    case "Montserrat":
      for (let fonttext of addfont) {
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.remove("Smooch");
        fonttext.classList.add("Montserrat");
      }
      break;

    default:
      for (let fonttext of addfont) {
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.remove("Smooch");
        fonttext.classList.remove("Montserrat");
      }
      break;
  }
}
function colorChange() {
  let obj = document.querySelector(".focus");
  let Primarycolor = document.getElementById("primarycolor");
  let Secdondarycolor = document.getElementById("secondaryColor");
  Primarycolor.addEventListener("input", (e) => {
    let bg = Primarycolor.value;
    obj.style.backgroundColor = bg;
    obj = null;
  });
  Secdondarycolor.addEventListener("input", (e) => {
    let bg = Secdondarycolor.value;
    obj.style.border = "thick solid" + bg;
    obj = null;
  });
}
function onFocus() {
  let listofitem = document.querySelectorAll(".item");

  for (let item of listofitem) {
    item.addEventListener("click", () => {
      listofitem.forEach((i) => {
        i.classList.remove("focus");
      });
      item.classList.add("focus");
    });
  }
}
function eraseObject() {
  let objectToErase = document.querySelector(".focus");
  objectToErase.remove();
}
function runDrag() {
  const item = document.querySelector(".focus");
  if (item == null) {
    alert("First select a shape with the select button");
  } else {
    item.addEventListener("mousedown", mousedown);

    function mousedown(e) {
      window.addEventListener("mousemove", drag);
      window.addEventListener("mouseup", mouseup);

      let prevX = e.clientX;
      let prevY = e.clientY;

      function drag(e) {
        let newX = prevX - e.clientX;
        let newY = prevY - e.clientY;

        const rect = item.getBoundingClientRect();

        item.style.left = rect.left - newX + "px";
        item.style.top = rect.top - newY + "px";

        prevX = e.clientX;
        prevY = e.clientY;
      }

      function mouseup() {
        window.removeEventListener("mousemove", drag);
        window.removeEventListener("mouseup", mouseup);
      }
    }
  }
}
function resizable() {
  const resizers = document.querySelectorAll(".resizer");
  let currentResizer;
  let isResizing = false;
  for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
      currentResizer = e.target;
      isResizing = true;
      let prevX = e.clientX;
      let prevY = e.clientY;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        if (isResizing) {
          const item = document.querySelector(".focus");
          const rect = item.getBoundingClientRect();

          if (currentResizer.classList.contains("br")) {
            item.style.width = rect.width - (prevX - e.clientX) + "px";
            item.style.height = rect.height - (prevY - e.clientY) + "px";
          } else if (currentResizer.classList.contains("bl")) {
            item.style.width = rect.width + (prevX - e.clientX) + "px";
            item.style.height = rect.height - (prevY - e.clientY) + "px";
          } else if (currentResizer.classList.contains("tr")) {
            item.style.width = rect.width - (prevX - e.clientX) + "px";
            item.style.height = rect.height + (prevY - e.clientY) + "px";
          } else if (currentResizer.classList.contains("tl")) {
            item.style.width = rect.width + (prevX - e.clientX) + "px";
            item.style.height = rect.height + (prevY - e.clientY) + "px";
          }
          prevX = e.clientX;
          prevY = e.clientY;
        }
      }
      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      }
    }
  }
}
// Create unique id
let id = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
// Create the Form for paint
function addShape($shape) {
  var board = document.getElementById("board");
  var con1 = document.createElement("div");
  tl = document.createElement("div");
  tr = document.createElement("div");
  bl = document.createElement("div");
  br = document.createElement("div");
  t = document.createElement("div");
  tl.classList.add("tl"); // Top left
  tr.classList.add("tr"); //Top Right
  bl.classList.add("bl"); //Bottom Left
  br.classList.add("br"); //Bottom Right
  t.classList.add("t"); //Top
  tl.classList.add("resizer");
  tr.classList.add("resizer");
  bl.classList.add("resizer");
  br.classList.add("resizer");
  t.classList.add("resizer");
  switch ($shape) {
    case "circle":
      shapeC = document.createElement("div");
      shapeC.classList.add("circle");
      shapeC.classList.add("item");
      shapeC.id = id();
      board.appendChild(shapeC);
      shapeC.appendChild(tl);
      shapeC.appendChild(tr);
      shapeC.appendChild(br);
      shapeC.appendChild(bl);
      break;

    case "triangle":
      shapeT = document.createElement("div");
      shapeT.classList.add("triangle");
      shapeT.classList.add("item");
      shapeT.id = id();
      board.appendChild(shapeT);
      shapeT.appendChild(t);
      shapeT.appendChild(br);
      shapeT.appendChild(bl);
      break;

    case "rectangle":
      shapeR = document.createElement("div");
      shapeR.classList.add("rectangle");
      shapeR.classList.add("item");
      shapeR.id = id();
      board.appendChild(shapeR);
      shapeR.appendChild(tl);
      shapeR.appendChild(tr);
      shapeR.appendChild(bl);
      shapeR.appendChild(br);
      break;

    case "text":
      shapeTT = document.createElement("div");
      shapeTT.classList.add("texte");
      shapeTT.classList.add("item");
      shapeTT.setAttribute("contenteditable", "");
      shapeTT.id = id();
      board.appendChild(shapeTT);
      shapeTT.appendChild(tl);
      shapeTT.appendChild(tr);
      shapeTT.appendChild(bl);
      shapeTT.appendChild(br);
      break;

    default:
      break;
  }
}
