// Permet de changer la police d'écriture
// @gaoubak
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
// Permet de changer la couleur
// @Ethan
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
// Permet de séléctionné un objet
// @Ethan
function onFocus() {
  let listofitem = document.querySelectorAll(".item");
  // Création des éléments pour changer la taille de l'objet
  tl = document.createElement("div");
  tr = document.createElement("div");
  bl = document.createElement("div");
  br = document.createElement("div");
  t = document.createElement("div");
  // Ajout des éléments pour changer la taille de l'objet
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
  for (let item of listofitem) {
    item.addEventListener("click", () => {
      listofitem.forEach((i) => {
        i.classList.remove("focus");
        i.innerHTML = "";
      });
      item.classList.add("focus");
      if (
        item.classList.contains("circle") ||
        item.classList.contains("rectangle") ||
        item.classList.contains("text")
      ) {
        item.appendChild(tl);
        item.appendChild(tr);
        item.appendChild(br);
        item.appendChild(bl);
      } else if (item.classList.contains("triangle")) {
        item.appendChild(t);
        item.appendChild(br);
        item.appendChild(bl);
      }
    });
  }
}
// Permet d'effacer un objet
// @Ethan
function eraseObject() {
  let objectToErase = document.querySelector(".focus");
  objectToErase.remove();
}
// Permet de bouger un objet
// @Ethan
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
// Permet de changer la taille d'un objet
// @Ethan
function resizable() {
  const resizers = document.querySelectorAll(".resizer");
  let currentResizer;
  let isResizing = false;
  for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);
    // Quand le click de la souris est maintenue
    function mousedown(e) {
      currentResizer = e.target;
      isResizing = true;
      let prevX = e.clientX;
      let prevY = e.clientY;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);
      // Quand la souris bouge
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
          } else if (currentResizer.classList.contains("t")) {
            item.style.height = rect.height + (prevY - e.clientY) + "px";
          }
          prevX = e.clientX;
          prevY = e.clientY;
        }
      }
      // Quand le click de la souris est levé
      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      }
    }
  }
}
// Kader
// Créer un id custom pour chaque forme
let id = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};
// Création de l'objet et de sa forme
function addShape($shape) {
  let board = document.getElementById("board");
  switch ($shape) {
    case "circle":
      shapeC = document.createElement("div");
      shapeC.classList.add("circle");
      shapeC.classList.add("item");
      shapeC.id = id();
      board.appendChild(shapeC);
      break;

    case "triangle":
      shapeT = document.createElement("div");
      shapeT.classList.add("triangle");
      shapeT.classList.add("item");
      shapeT.id = id();
      board.appendChild(shapeT);

      break;

    case "rectangle":
      shapeR = document.createElement("div");
      shapeR.classList.add("rectangle");
      shapeR.classList.add("item");
      shapeR.id = id();
      board.appendChild(shapeR);
      break;

    case "text":
      shapeTT = document.createElement("div");
      shapeTT.classList.add("texte");
      shapeTT.classList.add("item");
      shapeTT.setAttribute("contenteditable", "");
      shapeTT.id = id();
      board.appendChild(shapeTT);
      break;

    default:
      break;
  }
}
//! NE PAS UTILISER
// Fonction permettant de partager le contenu dynamique ajouter par javascript
// Et de le transmettre à php pour une sauvegarde sur le serveur
//! fonctionne mais le serveur ne peut pas récupérer un élément aussi long
//? Abandon de l'option whiteboard et création de l'option blackboard avec canvas le 16/03 dans la matinée

// function divToJson() {
//   let listofitem = document.querySelectorAll(".item");

//   for (let item of listofitem) {
//     listofitem.forEach((i) => {
//       i.classList.remove("focus");
//       i.innerHTML = "";
//     });
//   }
//   let board = document.getElementById("board");
//   let childrens = [];
//   -let elements = board.children
//   -for (let i = 0; i < elements.length; i++) {
//   -    let childrenAndAttributes = elements[i].attributes
//   -    childrens.push(childrenAndAttributes)
//   -}
/* let childrens = [];
    let board = document.getElementById("board");
    for (let i = 0; i < board.innerHTML.length; i++) {
      childrens.push(board.innerHTML);
    }
    let projectname = document.getElementById("projectname").value;
    console.log("Code envoyer"); */
//   for (let i = 0; i < board.innerHTML.length; i++) {
//     childrens.push(board.innerHTML);
//   }
//   console.log(childrens);
//   let projectname = document.getElementById("projectname").value;
//   window.location = `whiteboard.php?board="${childrens}"&projectName=${projectname}`;
// }
let save = () => {
  let board = document.getElementById("board");
  let boardContent = {};
  for (let i = 0; i < board.children.length; i++) {
    let divId = board.children[i].id;
    let Objectshape = board.children[i].classList[0];
    let top = board.children[i].style["top"];
    let left = board.children[i].style["left"];
    boardContent.push = {
      Id: divId,
      Shapes: Objectshape,
      Top: top,
      Left: left,
    };
    console.log(boardContent);
  }
  let projectname = document.getElementById("projectname").value;

  var formData = new FormData();
  formData.append("board", JSON.stringify(boardContent));
  formData.append("projectname", projectname);
  console.log(formData);
  fetch("./includes/saveBoard.inc.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((text) => console.log(text));
};
