// LOGIN 
isUser();
function isUser(){
    let user = JSON.parse(localStorage.getItem("user")) || false;
    let signin = document.getElementById("signin");
    let logout = document.getElementById("logout");
    if(user){
        signin.style="display: none";
        logout.style = "display: block";
    }else{
        signin.style="display: block";
        logout.style = "display: none";
    }
}

let logout = document.getElementById("logout");
logout.addEventListener("click", ()=> {
    let val  = confirm("sure?")
    if(val === true){
        localStorage.setItem("user", false);
        isUser();
    }
});