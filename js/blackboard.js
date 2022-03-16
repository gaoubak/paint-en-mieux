let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
canvas.height = window.innerHeight - 70;
canvas.width = window.innerWidth - 20;
canvas.addEventListener("mousedown", mousedown);
function mousedown(e) {
  window.addEventListener("mousemove", drag);
  window.addEventListener("mouseup", drop);

  let prevX = e.clientX;
  let prevY = e.clientY;

  function drag(e) {
    let newX = prevX - e.clientX;
    let newY = prevY - e.clientY;

    const rect = canvas.getBoundingClientRect();
    function draw(posX, posY) {
      ctx.clearRect(posX, posY, canvas.width, canvas.height);
      x = posX;
      y = posY;
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
    }
    x = rect.left - newX;
    y = rect.top - newY;
    draw(x, y);
  }
  function drop() {
    window.removeEventListener("mousemove", drag);
    window.removeEventListener("mouseup", drop);
  }
}
