const wallContainer = document.querySelector('.wall-container');
const img = document.querySelector('.wall-container-img');
const signUp = document.querySelector('.create-account');
const login = document.querySelector('.log-in');

welcomeImg = "./img/welcome.png";
loginImg = "./img/login.png";

signUp.addEventListener('click',function(event){
    img.style.borderTopLeftRadius = "0px";
    img.style.borderBottomLeftRadius = "0px";
    wallContainer.style.marginLeft = "655px";
    img.style.borderTopRightRadius = "10px";
    img.style.borderBottomRightRadius = "10px";
    img.src = welcomeImg;
});

login.addEventListener('click',function(event){
    img.style.borderTopLeftRadius = "10px";
    img.style.borderBottomLeftRadius = "10px";
    wallContainer.style.marginLeft = "205px";
    img.style.borderTopRightRadius = "0px";
    img.style.borderBottomRightRadius = "0px";
    img.src = loginImg;
});