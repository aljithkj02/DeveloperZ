let circle = document.querySelector(".circle");
let earth = document.querySelector(".earth");
window.onmousemove = function (e) {
    let x = e.clientX/-2;
    let y = -e.offsetX;
    circle.style.transform = "perspective(1000px) rotateY(" + x + "deg) rotateX(15deg) translateY(-30px)";
    earth.style.backgroundPositionX = y + "px";
}