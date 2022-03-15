function changeFont($font) {
  let addfont = document.querySelectorAll(".item");
  switch ($font) {
    case "BhuTuka":
      for (let fonttext of addfont) {
        fonttext.classList.remove("Smooch");
        fonttext.classList.remove("Montserrat");
        fonttext.classList.add("BhuTuka");
      }
      break;
    case "Smooch":
      for (let fonttext of addfont) {
        fonttext.classList.remove("Montserrat");
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.add("Smooch");
      }
      break;
    case "Montserrat":
      for (let fonttext of addfont) {
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.remove("Smooch");
        fonttext.classList.add("Montserrat");
      }
      break;

    default:
      for (let fonttext of addfont) {
        fonttext.classList.remove("BhuTuka");
        fonttext.classList.remove("Smooch");
        fonttext.classList.remove("Montserrat");
      }
      break;
  }
}
