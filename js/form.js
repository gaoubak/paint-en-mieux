
  // Create the Form for paint
  function addShape($shape) {
    var board = document.getElementById("board");
    var con1 = document.createElement("div");
    tl = document.createElement("div");
    tr = document.createElement("div");
    bl = document.createElement("div");
    br = document.createElement("div");
    t = document.createElement("div");
    tl.classList.add = "tl";// Top left
    tr.classList.add = "tr";//Top Right
    bl.classList.add = "bl";//Bottom Left
    br.classList.add = "br";//Bottom Right
    t.classList.add = "t";//Top
    // Create unique id
      let id = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
      }

    switch ($shape) {
      case "circle":
        shapeC = document.createElement("div");
        ma_Form.classList.add = "circle";
        shapeC.classList.add = "item";
        shapeC.id = id();
        board.appendChild(shapeC);
        break;

          case "triangle":
            shapeT = document.createElement("div");
            shapeT.classList.add = "triangle";
            shapeT.classList.add = "item";
            shapeT.id = id();
            board.appendChild(shapeT);
            shapeT.appendChild(t,bl,br);
            break;

              case "rectangle":
                shapeR = document.createElement("div");  
                shapeR.classList.add = "rectangle";
                shapeR.classList.add = "item";
                shapeR.id = id();
                board.appendChild(shapeR);
                shapeR.appendChild(tl,tr,bl,br);
                break;

                case "text":
                  shapeTT = document.createElement("input");  
                  shapeTT.classList.add = "texte";
                  shapeTT.classList.add = "item";
                  shapeTT.id = id();
                  shapeTT.appendChild(tl,tr,bl,br);
                  board.appendChild(shapeTT);
                break;


              default:
                break;
        }
      }
      addShape();
