let books = [
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIZ-50PYrdnAZlIXJcFMXQQMwkfb-z24qFoWp_nci8AJzDFSyyBxS-45qw_olQGFIsqkg&usqp=CAU",
        name: "JavaScript: The Definitive Guide",
        desc: "JavaScript: The Definitive Guide, is the perfect companion if you want to learn JavaScript. This web development book is suitable for beginners and more advanced users who want to go beyond the basics and become pro JavaScript programmers."
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX-LysDWKc-OfQuwIueGFpSrIg82EUg_JA0Q&usqp=CAU",
        name: "Web Design With HTML, CSS, JavaScript and jQuery",
        desc: "The first title on the list is a set of books by Jon Duckett. These two books are top-rated and with good reason. They cover everything from the basics down to the more advanced web development topics and responsive web design. "
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlMpKN1KO8iLr77xbKy8HFbKPea1zIHMOiKw&usqp=CAU",
        name: "Eloquent JavaScript",
        desc: "Eloquent JavaScript by Marijn Haverbeke is another best-selling JavaScript book. The best part about this web development book is that you can get it in Kindle or paperback format or read the online version for free. "
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaE0Ofr98atUOjj5ViN9zfQyJxG10myfh1Ag&usqp=CAU",
        name: "Secrets of the JavaScript Ninja",
        desc: "The previous books on this list will get you up to speed with JavaScript. But if you want to become a pro, you’ll need to go beyond the basics and master the critical JavaScript concepts. "
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcmh6Yfw5-Nn8BhHjTx4TTj-jajtYveVFL-vAKZ1M_qihs7sHqqeZrOMZRgIx6PijVCYw&usqp=CAU",
        name: "Road To React",
        desc: "Road To React: Your Journey To Master React.js in JavaScript. If you’re a more experienced developer looking to dip your toes into JavaScript frameworks, the Road To React is a great book choice out of the available developer books. "
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx7o8awSkAuGxosCLi-U3j43lYwOcQfRvxSNSk2ezkz_86s5OaTP3hhMG5yu8RWyM6PjQ&usqp=CAU",
        name: "Don’t Make Me Think",
        desc: "While Don’t Make Me Think, Revisited by Steve Krug isn’t a programming book per se, it does shine a light on standard concepts of web usability that go hand in hand with good web development practices. "
    }
];

display(books);

function display(data){
    let div_parent = document.getElementById("library-card-parent");
    data.map((elem, i)=> {
        let div = document.createElement("div");
        div.setAttribute("class", "library-card");

        let img = document.createElement("img");
        img.setAttribute("src", elem.img);
        let h2Div = document.createElement("div");
        let h2 = document.createElement("h2");
        h2.innerText = elem.name;
        h2Div.append(h2);
        let p = document.createElement("p");
        p.innerText = elem.desc;

        div.append(img, h2Div, p);

        div_parent.append(div);
    })
}