function resizable() {
  const resizers = document.querySelectorAll(".resizer");
  let currentResizer;
  let isResizing = false;
  for (let resizer of resizers) {
    resizer.addEventListener("mousedown", mousedown);

    function mousedown(e) {
      currentResizer = e.target;
      isResizing = true;
      let prevX = e.clientX;
      let prevY = e.clientY;
      window.addEventListener("mousemove", mousemove);
      window.addEventListener("mouseup", mouseup);

      function mousemove(e) {
        if (isResizing) {
          const item = document.querySelector(".item");
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
          }
          prevX = e.clientX;
          prevY = e.clientY;
        }
      }
      function mouseup() {
        window.removeEventListener("mousemove", mousemove);
        window.removeEventListener("mouseup", mouseup);
      }
    }
  }
}
