let shape = document.getElementById("mydiv");
let Primarycolor = document.getElementById("primarycolor");
Primarycolor.addEventListener("input", function (e) {
  Primarycolor.value = this.value;
  let fillColor = this.value;
  shape.style.background = this.value;
});
let Secdondarycolor = document.getElementById("secondaryColor");
Secdondarycolor.addEventListener("input", function (e) {
  Secdondarycolor.value = this.value;
  let bordercolor = this.value;
  console.log(bordercolor);
  shape.style.border = `thick solid ${this.value}`;
  shape.style.borderStyle = "solid";
});
