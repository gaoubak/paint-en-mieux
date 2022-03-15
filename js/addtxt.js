function changeFont($font){
    let addfont = document.querySelectorAll(".item");
    switch($font) {
        case "BhuTuka":
            font.classList.add("BhuTuka");         
        break;
        case "Smooch":
            font.classList.add("Smooch");         
        break;
        case "Montserrat":
            font.classList.add("Montserrat");         
        break;

    default:
        font.classList.remove("BhuTuka");
        font.classList.remove("Smooch");
        font.classList.remove("Montserrat");
    break;     
    }
}