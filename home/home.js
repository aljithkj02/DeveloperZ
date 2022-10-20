// EARTH 

let circle = document.querySelector(".circle");
let earth = document.querySelector(".earth");
let earthSection = document.querySelector("#earthSection");
let nav = document.querySelector("#nav");
earthSection.onmousemove = function (e) {
    let x = e.clientX/-4;
    let y = -e.offsetX;
    circle.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(15deg) translateY(-30px)";
    earth.style.backgroundPositionX = y + "px";
}

nav.onmousemove = function (e) {
    let x = e.clientX/-4;
    let y = -e.offsetX;
    circle.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(15deg) translateY(-30px)";
    earth.style.backgroundPositionX = y + "px";
}

// ENTERTAINMENT 


