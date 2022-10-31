
//switch news section into dark mode
function switchDarkMode(){

    var newsBody = document.body;
    newsBody.classList.toggle('dark-mode-features');

    //change dark mode into cards
    let newsCards = document.getElementsByClassName("recommended-news-card");

    for (var i = 0; i < newsCards.length; i++){
        newsCards[i].classList.toggle("news-card-dark");
    }

    //target dark-mode-btn and change inside text and color
    var darkModeBtn = document.getElementById('dark-mode-btn');
    
    var darkText = "Dark Mode";
    var darkModeBtnText = darkModeBtn.innerHTML;
    
    if (darkText != darkModeBtnText){
        darkModeBtn.innerHTML = darkText;
    }else{
        darkModeBtn.innerHTML = "White Mode"
    }


    //carsoul effect
    var newsCarousel = document.getElementById("news-carousel");
    newsCarousel.classList.toggle('news-carousel-dark');


    //footer 
    const newsFooter = document.querySelector("footer");
    if (newsFooter.style.backgroundColor != "black"){
        newsFooter.style.backgroundColor = "black";
    }else{
        newsFooter.style.backgroundColor = "#eef8ff";
    }

    


}