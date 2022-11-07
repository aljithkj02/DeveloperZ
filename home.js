
// NAVBAR 
var navBar = document.querySelector("nav");
window.onscroll = function (){
    var top = window.scrollY;
    // console.log(top)
    if(top > 100){
        navBar.style="background: url('img/bg3.jpg'); transition: 0.5s";
    }else{
        navBar.style="background: transperent; transition: 0.5s";
    }
}

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

// FEATURES

let roadMapBox = document.getElementById("roadMapBox");
roadMapBox.addEventListener("click", function(){
    window.location.href="services/roadmap/roadmap.html";
});

let libraryBox = document.getElementById("libraryBox");
libraryBox.addEventListener("click", function(){
    window.location.href="services/library/library.html";
});

let communication = document.getElementById("communication");
communication.addEventListener("click", function(){
    window.location.href="services/communication/communication.html";
});

let dsa = document.getElementById("dsa");
dsa.addEventListener("click", function(){
    window.location.href="services/dsa/dsa.html";
});

let logic = document.getElementById("logic");
logic.addEventListener("click", function(){
    window.location.href="services/logic/logic.html";
});

let teckBox = document.getElementById("teckBox");
teckBox.addEventListener("click", function(){
    window.location.href="News/news.html";
});




// ENTERTAINMENT 

let movies = document.getElementById("movies");
movies.addEventListener("click", function(){
    window.location.href="entertainment/movie/movie.html";
});




