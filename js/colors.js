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
