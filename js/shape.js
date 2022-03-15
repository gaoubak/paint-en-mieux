
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
      shapeTT.appendChild(text);
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
addShape();
