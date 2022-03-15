var board = document.getElementById("board");


function getForm() {
  var board = document.getElementById("board");
  var con1 = document.createElement("div");
  tl = document.createElement("div");
  tr = document.createElement("div");
  bl = document.createElement("div");
  br = document.createElement("div");
  t = document.createElement("div");
  tl.class = "tl";// Top left
  tr.class = "tr";//Top Right
  bl.class = "bl";//Bottom Left
  br.class = "br";//Bottom Right
  t.class = "t";//Top
  // Create unique id
    let id = () => {
      return Math.floor((1 + Math.random()) * 0x10000)
          .toString(16)
          .substring(1);
    }
  

  // Create the Form for paint
  function addShape($shape) {
    switch ($shape) {
      case "circle":
        shapeC = document.createElement("div");
        ma_Form.class = "circle";
        shapeC.class = "item";
        shapeC.id = id();
        shapes.appendChild(img);
        board.appendChild(shapes);
        break;

          case "triangle":
            shapeT = document.createElement("div");
            shapeT.class = "triangle";
            shapeT.class = "item";
            shapeT.id = id();
            shapeT.appendChild(t,bl,br);
            board.appendChild(shapeT);
            break;

              case "rectangle":
                shapeR = document.createElement("div");  
                shapeR.class = "rectangle";
                shapeR.class = "item";
                shapeR.id = id();
                shapeR.appendChild(tl,tr,bl,br);
                board.appendChild(shapeR);
                break;

                case "text":
                  shapeTT = document.createElement("input");  
                  shapeTT.class = "texte";
                  shapeTT.class = "item";
                  shapeTT.id = id();
                  shapeTT.appendChild(tl,tr,bl,br);
                  board.appendChild(shapeTT);
                break;


              default:
                break;
        }
      }
      addShape();
  }
  getForm();