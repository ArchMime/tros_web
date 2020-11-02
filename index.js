function setMapa(zona){

    var image

    switch (zona) {
        case "norte":
            image ="img/Mapa_norte_Gran_Buenos_Aires.png"
            break;

        case "oeste":
            image="img/Mapa_oeste_Gran_Buenos_Aires.png"
            break;
    
        case"sur":
            image="img/Mapa_sur_Gran_Buenos_Aires.png"
            break;

        default:
            break;
    }

    document.getElementById("mapa").src = image
}


function esVisible(elem){
    var posTopView = window.scrollY;
    var posButView = posTopView + window.innerHeight;
    var elemTop = elem.offsetTop;
    var elemBottom = elemTop + elem.offsetHeight;

    if (posTopView > 200) {
        elem.classList.add("mapaFixed")
        elem.style.left = elem.getBoundingClientRect().x
    }


    console.log(elem.getBoundingClientRect())
    return {postop: posTopView, posbut: posButView, elemtop:elemTop, elemb: elemBottom}
    //((elemBottom < posButView && elemBottom > posTopView) || (elemTop >posTopView && elemTop< posButView));
}

var ele =  document.getElementById("desc")

var x = 0;
function myFunction() {
  document.getElementById("demo").innerHTML = x += 1;
  console.log(esVisible(ele))
}