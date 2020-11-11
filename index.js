function setMapa(zona) {

    var image

    switch (zona) {
        case "n":
            image = "img/Mapa_norte_Gran_Buenos_Aires.png"
            break;

        case "o":
            image = "img/Mapa_oeste_Gran_Buenos_Aires.png"
            break;

        case "s":
            image = "img/Mapa_sur_Gran_Buenos_Aires.png"
            break;

        default:
            break;
    }

    document.getElementById("mapa").src = image
}
