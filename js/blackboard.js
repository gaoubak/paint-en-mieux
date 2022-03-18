// Code pour la version Canvas du projet
/**
 * Fonction permettant d'ajouter des formes au canvas
 * l'argument est utilisé dans une switch pour décider de la forme à générer
 * @param {Str} $shape
 */
function addShape($shape) {
  var canvas = document.querySelector("canvas");

  // faire en sorte que le canva prenne toute la fenêtre
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  //à utiliser pour créer n'importe quelle forme
  var c = canvas.getContext("2d");

  ////////////////////////// créer un carré (x,y , width, height)
  switch ($shape) {
    case "rectangle":
      (rect = {
        x: 150,
        y: 100,
        w: 123,
        h: 58,
      }),
        (handlesSize = 8),
        (currentHandle = false),
        (drag = false);

      function init() {
        canvas.addEventListener("mousedown", mouseDown, false);
        canvas.addEventListener("mouseup", mouseUp, false);
        canvas.addEventListener("mousemove", mouseMove, false);
      }

      function point(x, y) {
        return {
          x: x,
          y: y,
        };
      }

      function dist(p1, p2) {
        return Math.sqrt(
          (p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y)
        );
      }

      function getHandle(mouse) {
        if (dist(mouse, point(rect.x, rect.y)) <= handlesSize) return "topleft";
        if (dist(mouse, point(rect.x + rect.w, rect.y)) <= handlesSize)
          return "topright";
        if (dist(mouse, point(rect.x, rect.y + rect.h)) <= handlesSize)
          return "bottomleft";
        if (dist(mouse, point(rect.x + rect.w, rect.y + rect.h)) <= handlesSize)
          return "bottomright";
        if (dist(mouse, point(rect.x + rect.w / 2, rect.y)) <= handlesSize)
          return "top";
        if (dist(mouse, point(rect.x, rect.y + rect.h / 2)) <= handlesSize)
          return "left";
        if (
          dist(mouse, point(rect.x + rect.w / 2, rect.y + rect.h)) <=
          handlesSize
        )
          return "bottom";
        if (
          dist(mouse, point(rect.x + rect.w, rect.y + rect.h / 2)) <=
          handlesSize
        )
          return "right";
        return false;
      }

      function mouseDown(e) {
        if (currentHandle) drag = true;
        draw();
      }

      function mouseUp() {
        drag = false;
        currentHandle = false;
        draw();
      }

      function mouseMove(e) {
        var previousHandle = currentHandle;
        if (!drag)
          currentHandle = getHandle(
            point(e.pageX - this.offsetLeft, e.pageY - this.offsetTop)
          );
        if (currentHandle && drag) {
          var mousePos = point(
            e.pageX - this.offsetLeft,
            e.pageY - this.offsetTop
          );
          switch (currentHandle) {
            case "topleft":
              rect.w += rect.x - mousePos.x;
              rect.h += rect.y - mousePos.y;
              rect.x = mousePos.x;
              rect.y = mousePos.y;
              break;
            case "topright":
              rect.w = mousePos.x - rect.x;
              rect.h += rect.y - mousePos.y;
              rect.y = mousePos.y;
              break;
            case "bottomleft":
              rect.w += rect.x - mousePos.x;
              rect.x = mousePos.x;
              rect.h = mousePos.y - rect.y;
              break;
            case "bottomright":
              rect.w = mousePos.x - rect.x;
              rect.h = mousePos.y - rect.y;
              break;

            case "top":
              rect.h += rect.y - mousePos.y;
              rect.y = mousePos.y;
              break;

            case "left":
              rect.w += rect.x - mousePos.x;
              rect.x = mousePos.x;
              break;

            case "bottom":
              rect.h = mousePos.y - rect.y;
              break;

            case "right":
              rect.w = mousePos.x - rect.x;
              break;
          }
        }
        if (drag || currentHandle != previousHandle) draw();
      }
      function move() {
        var x = Math.random(); // this returns a float between 0.0 and 1.0
        c.x = x * canvas.width;
        c.y = y * canvas.height;
      }

      function draw() {
        c.clearRect(0, 0, canvas.width, canvas.height);
        c.fillStyle = "black";
        c.fillRect(rect.x, rect.y, rect.w, rect.h);
        if (currentHandle) {
          var posHandle = point(0, 0);
          switch (currentHandle) {
            case "topleft":
              posHandle.x = rect.x;
              posHandle.y = rect.y;
              break;
            case "topright":
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y;
              break;
            case "bottomleft":
              posHandle.x = rect.x;
              posHandle.y = rect.y + rect.h;
              break;
            case "bottomright":
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y + rect.h;
              break;
            case "top":
              posHandle.x = rect.x + rect.w / 2;
              posHandle.y = rect.y;
              break;
            case "left":
              posHandle.x = rect.x;
              posHandle.y = rect.y + rect.h / 2;
              break;
            case "bottom":
              posHandle.x = rect.x + rect.w / 2;
              posHandle.y = rect.y + rect.h;
              break;
            case "right":
              posHandle.x = rect.x + rect.w;
              posHandle.y = rect.y + rect.h / 2;
              break;
          }
          c.globalCompositeOperation = "xor";
          c.beginPath();
          c.arc(posHandle.x, posHandle.y, handlesSize, 0, 2 * Math.PI);
          c.fill();
          c.globalCompositeOperation = "source-over";
        }
      }

      init();
      draw();
      move();
      break;

    /////////////////////////// créer un cercle / rond
    case "circle":
      c.beginPath();
      c.arc(1000, 300, 50, 0, Math.PI * 2, false);
      c.strokeStyle = "pink";
      c.fillStyle = "blue";
      c.fill();
      c.stroke();
      break;

    /////////////////////////// créer un triangle
    case "triangle":
      c.beginPath();
      c.fillStyle = "cyan";
      c.strokeStyle = "pink";
      c.moveTo(200, 100);
      c.lineTo(100, 200);
      c.lineTo(300, 200);
      c.fill();
      c.stroke();
      break;

    case "text":
      c.beginPath();
      c.fillStyle = "black";
      c.font = "48px serif";
      c.fillText("Hello world", 100, 50);

      // c'était juste un texte voir si les 2 fichiers sont lié

      console.log(canvas);
  }
}
