document.getElementById("rectangle").onclick(getTool("rectangle"));
document.getElementById("triangle").onclick(getTool("triangle"));
document.getElementById("txt").onclick(getTool("txt"));
document.getElementById("primaryColor");
document.getElementById("secondaryColor");
document.getElementById("Eraser").onclick(getTool("eraser"));
document.getElementById("Save").onclick(SaveFile());

var circle = document.getElementById("circle");
var conteneur = document.getElementById("board");
var img = document.createElement("img");

function getForm() {
  var conteneur = document.getElementById("board");
  if (document.getElementsById("circle").clicked == true) {
    ma_Form = document.createElement("div");
    img = document.createElement("img");
    ma_Form.class = "circle";
    ma_Form.id = new Date.now();
    img.src = "./styles/img/Circle.svg";
    ma_Form.appendChild("img");
    conteneur.appendChild(ma_Form);
  }
  if (document.getElementsById("triangle").clicked == true) {
    ma_Form = document.createElement("div");
    img = document.createElement("img");
    ma_Form.class = "triangle";
    ma_Form.id = new Date.now();
    img.src = "../styles/img/Triangle.svg";
    ma_Form.appendChild("img");
    conteneur.appendChild(ma_Form);
  }
  if (document.getElementsById("rectange").clicked == true) {
    ma_Form = document.createElement("div");
    img = document.createElement("img");
    ma_Form.class = "rectange";
    ma_Form.id = new Date.now();
    img.src = "../styles/img/Rectangle.svg";
    ma_Form.appendChild("img");
    conteneur.appendChild(ma_Form);
  }
  if (document.getElementsById("txt").clicked == true) {
    ma_Form = document.createElement("div");
    img = document.createElement("img");
    ma_Form.class = "tool shapes";
    ma_Form.id = new Date.now();
    img.src = "../styles/img/Txt.svg";
    ma_Form.appendChild("img");
    conteneur.appendChild(ma_Form);
  }
  if (document.getElementsById("txt").clicked == true) {
    ma_Form = document.createElement("div");
    img = document.createElement("img");
    ma_Form.class = "tool shapes";
    ma_Form.id = new Date.now();
    img.src = "../styles/img/Txt.svg";
    ma_Form.appendChild("img");
    conteneur.appendChild(ma_Form);
  }
  // cirle =;
  //Askip y a des balise html/svg qui permettent de faire les forms directement
  // Genre <rectangle/> <circle/>
}
