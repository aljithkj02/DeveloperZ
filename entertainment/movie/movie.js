let movies = [
    {
        img : "https://media2.bollywoodhungama.in/wp-content/uploads/2016/03/The-Social-Network.jpg",
        title : "The Social Network",
        desc : "The whole movie is about how Facebook grew as a business and the various ups and downs it had to face."
    },
    {
        img : "https://fontmeme.com/images/The-Imitation-Game-font.jpg",
        title : "The imitation Game",
        desc : "As a programmer, You will find this movie extremely engaging. Alan Turing, a British mathematician, joins the cryptography team to decipher the German enigma code. With the help of his fellow mathematicians, he builds a machine to crack the codes"
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BNDc2NTE0NzE4N15BMl5BanBnXkFtZTgwMDQ5MzgwMzE@._V1_FMjpg_UX1000_.jpg",
        title : "Pirates of Silicon Valley",
        desc : "This is one of the top notch movie among these programming movies lists. It basically tells the story of how the personal computer was designed by today's giants like Microsoft and Apple."
    },
    {
        img : "https://www.uphe.com/sites/default/files/styles/scale__344w_/public/JOBS_PosterArt_025192191442.png",
        title : "Jobs",
        desc : "The movie sheds light on Stev Job's personal and college life. The movie revolves around how Apple became the business enterprise that it is today."
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjIYPpnLO787GM4DlN3TpPGY86sM_DVJtITONB2BYJQMRS3LBnVriNckIIDRqFFMX_eDY&usqp=CAU",
        title : "Mr. Robot",
        desc : "The show follows the footsteps of Elliot Alderson, a cybersecurity engineer in a cybersecurity firm ‘Allsafe’ by day and vigilante hacker operating from his computer, apprehending no-gooders by night."
    },
    {
        img : "https://m.media-amazon.com/images/M/MV5BMTY0MTc3MzMzNV5BMl5BanBnXkFtZTcwNDE4MjE0NA@@._V1_.jpg",
        title : "Source Code",
        desc : "As the name suggests, there is some code involved :P ,The hero in the movie enters the body of another person using his programming skills."
    },
    {
        img : "https://i.pinimg.com/736x/e8/05/0e/e8050eeeaa56bd0c38a46200171d6f82.jpg",
        title : "The Founder",
        desc : "This movie doesn't involve a programmer but is highly recommended if you want to start you first startup. The movie shows how persistence, determination and hardwork pays off. It's by far the best movie I have seen when it comes to building a business. Besides that it also shows how to scale a business."
    },
    {
        img : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_Oy4rfQi-SovgRqb3BwBtAzdPfN6Yzv036yuSUWDRfj71lf-B3-eHdJ3WgS4M2n3Ipg&usqp=CAU",
        title : "The Social Dilemma",
        desc : "A must watch movie for everyone. Every person living in present world is aware about how he or she is addicted to drug called social media in other words we are being used as lab rats not to discover something new but selling to customers, here advertisers are customers we are just products."
    },
    {
        img : "https://rukminim1.flixcart.com/image/416/416/jf8khow0/poster/f/k/v/small-silicon-valley-tv-show-poster-collection-premium-quality-original-imaf3r93hsqpqnhc.jpeg?q=70",
        title : "Silicon Valley",
        desc : "It is not a movie but TV Series and a must watch if you're a programmer. This is about Richard, a programmer who creates an app called the Pied Piper and tries to get investors for it. Meanwhile, five other programmers struggle to make their mark in Silicon Valley."
    }
];


display(movies);
function display(data){
    let moviesDiv = document.getElementById("box-div");

    data.map((elem, i)=> {
        let box = document.createElement("div");
        box.setAttribute("class", "box");

        let div = document.createElement("div");
         let img = document.createElement("img");
         img.setAttribute("src", elem.img);
        div.append(img);

        let h2 = document.createElement("h2");
         h2.innerText = elem.title;
        let p = document.createElement("p");
         p.innerText = elem.desc;

        box.append(div, h2, p);
        moviesDiv.append(box);
    })
}