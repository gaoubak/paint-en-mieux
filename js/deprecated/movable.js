//@Ethan
// let draggableActive = true;
// function runDrag() {
//   if (draggableActive) {
//     let draggableActive = false;
//     return;
//   } else {
//     console.log("activé");
//     let draggableActive = true;
//     // Make the DIV element draggable:
//     dragElement(document.getElementById("mydiv"));
//     function dragElement(elmnt) {
//       var pos1 = 0,
//         pos2 = 0,
//         pos3 = 0,
//         pos4 = 0;
//       if (document.getElementById(elmnt.id + "board")) {
//         // if present, the board is where you move the DIV from:
//         document.getElementById(elmnt.id + "board").onmousedown = dragMouseDown;
//       } else {
//         // otherwise, move the DIV from anywhere inside the DIV:
//         elmnt.onmousedown = dragMouseDown;
//       }

//       function dragMouseDown(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // get the mouse cursor position at startup:
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         document.onmouseup = closeDragElement;
//         // call a function whenever the cursor moves:
//         document.onmousemove = elementDrag;
//       }

//       function elementDrag(e) {
//         e = e || window.event;
//         e.preventDefault();
//         // calculate the new cursor position:
//         pos1 = pos3 - e.clientX;
//         pos2 = pos4 - e.clientY;
//         pos3 = e.clientX;
//         pos4 = e.clientY;
//         // set the element's new position:
//         elmnt.style.top = elmnt.offsetTop - pos2 + "px";
//         elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
//       }

//       function closeDragElement() {
//         // stop moving when mouse button is released:
//         document.onmouseup = null;
//         document.onmousemove = null;
//         let draggableActive = false;
//       }
//     }
//   }
// }
// @Kader
/* var myForm = document.querySelector("form");
var square = document.querySelector(".square");

myForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("jai envoyé le formulaire");
});

square.addEventListener("click", function (event) {
  console.log("je suis le click", event);
});

square.addEventListener("mouseover", function (event) {
  console.log("je suis le over", event);
});

var hasDoneDown = false;

square.addEventListener("mousedown", function (event) {
  hasDoneDown = true;
  console.log("je suis le down", event);
});

square.addEventListener("mouseup", function (event) {
  hasDoneDown = false;
  console.log("je suis le up", event);
});

square.addEventListener("mousemove", function (event) {
  // console.log('je suis le move', event);

  if (hasDoneDown) {
    var x = event.clientX - 50;
    var y = event.clientY - 50;

    square.style.left = x + "px";
    square.style.top = y + "px";
  }
}); */
