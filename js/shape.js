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
  tl.classList.add("resizer"); // Top left
  tr.classList.add("resizer"); //Top Right
  bl.classList.add("resizer"); //Bottom Left
  br.classList.add("resizer"); //Bottom Right
  t.classList.add("resizer"); //Top
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
      shapeT.class = "triangle";
      shapeT.class = "item";
      shapeT.id = id();
      board.appendChild(shapeT);
      shapeT.appendChild(t, br, bl);
      break;

    case "rectangle":
      shapeR = document.createElement("div");
      shapeR.class = "rectangle";
      shapeR.class = "item";
      shapeR.id = id();
      board.appendChild(shapeR);
      shapeR.appendChild(tl, tr, bl, br);
      break;

    case "text":
      shapeTT = document.createElement("input");
      shapeTT.class = "texte";
      shapeTT.class = "item";
      shapeTT.id = id();
      board.appendChild(shapeTT);
      shapeTT.appendChild(tl, tr, bl, br);
      break;

    default:
      break;
  }
}
addShape();