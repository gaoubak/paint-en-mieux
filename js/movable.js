// Va dans /deprecated/movable.js si tu veux voir l'ancien script
const item = document.querySelector(".item");

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
