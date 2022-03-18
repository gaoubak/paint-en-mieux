function colorChange() {
  let objs = document.querySelectorAll(".item");
  let Primarycolor = document.getElementById("primarycolor");
  for (let obj of objs) {
    Primarycolor.addEventListener("input", function (e) {
      Primarycolor.value = this.value;
      let fillColor = this.value;
      obj.style.background = this.value;
    });
    let Secdondarycolor = document.getElementById("secondaryColor");
    Secdondarycolor.addEventListener("input", function (e) {
      Secdondarycolor.value = this.value;
      let bordercolor = this.value;
      console.log(bordercolor);
      obj.style.border = `thick solid ${this.value}`;
      obj.style.borderStyle = "solid";
    });
  }
}
