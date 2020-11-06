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



document.getElementById('lista').onclick = function changeContent() {
    
    var contenedor =  document.getElementById("desc")
    
    console.log(contenedor.getBoundingClientRect().height)
    
    contenedor.style.height = contenedor.getBoundingClientRect().height
 }