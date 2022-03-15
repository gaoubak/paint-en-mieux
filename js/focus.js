function onFocus() {
  let listofitem = document.querySelectorAll(".item");

  for (let item of listofitem) {
    item.addEventListener("click", () => {
      listofitem.forEach((i) => {
        i.classList.remove("focus");
      });
      item.classList.add("focus");
    });
  }
}
function eraseObject() {
  let objectToErase = document.querySelector(".focus");
  objectToErase.remove();
}
