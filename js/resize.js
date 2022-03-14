document.getElementById("resize").addEventListener("click", resizeActive());

let resizeActive = () => {
  console.log("app init");
  let object = document.getElementById("mydiv");
  let active = null;
  if (active == true || active == null) {
    object.className = "Resize-Active";
  } else {
    object.classList.remove("Resize-Active");
  }
};
