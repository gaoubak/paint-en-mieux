let objs = document.querySelectorAll(".item");
function changeFont($font){
    switch($font) {
        case "BhuTuka":
            objs.classList.add("BhuTuka")         
        break;
        case "Smooch":
            objs.classList.add("Smooch")         
        break;
        case "Montserrat":
            objs.classList.add("Montserrat")         
        break;

    default:
        objs.classList.remove("BhuTuka")
        objs.classList.remove("Smooch")
        objs.classList.remove("Montserrat")
    break;     
    }
}