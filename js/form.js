var conteneur = document.getElementById("board");
var img = document.createElement("img");

function getForm() {
  var conteneur = document.getElementById("board");
  // Create the Form for paint
  function addShape($shape) {
    switch ($shape) {
      case "circle":
        ma_Form = document.createElement("div");
        img = document.createElement("img");
        ma_Form.class = "circle";
        ma_Form.class = "item";
        ma
        ma_Form.id = 876543;
        img.src = "./styles/img/Circle.svg";
        ma_Form.appendChild(img);
        conteneur.appendChild(ma_Form);
        break;

          case "triangle":
            ma_Form = document.createElement("div");
            img = document.createElement("img");
            ma_Form.class = "triangle";
            ma_Form.id = 123456;
            img.src = "../styles/img/Triangle.svg";
            ma_Form.appendChild(img);
            conteneur.appendChild(ma_Form);
            break;

              case "rectangle":
                ma_Form = document.createElement("div");
                img = document.createElement("img");
                ma_Form.class = "rectangle";
                ma_Form.id = 987654;
                img.src = "../styles/img/Rectangle.svg";
                ma_Form.appendChild(img);
                conteneur.appendChild(ma_Form);
                break;

              default:
                break;
        }
      }
      addShape();
  }
  getForm();
