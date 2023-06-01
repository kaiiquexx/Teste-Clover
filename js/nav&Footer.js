// barraHamburger
function toggleBar() {
    let toggleBar = document.querySelector(".navList");
    let menuMobile = document.querySelector(".menuMobile");
    let x = document.getElementById("x");
    let pesquisa = document.querySelector(".pesquisa");

    if (toggleBar.className === "navList") {
        toggleBar.classList.add("active");
        toggleBar.style.zIndex = "4";
        menuMobile.style.zIndex = "5";
        x.style.display = "block";
        document.body.style.overflow = "hidden";
        menuMobile.style.opacity = "0";
        pesquisa.style.zIndex = "0";
    }
    else {
        toggleBar.classList.remove("active");
        toggleBar.style.zIndex = "4";
        menuMobile.style.zIndex = "1";
        x.style.display = "inherit"
        document.body.style.overflow = "inherit";
        menuMobile.style.opacity = "1";
        pesquisa.style.zIndex = "5";
    }
}
// fim barraHambuerger

// btn modoNoturno
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let navMenu = document.querySelector(".navMenu");
let menuMobile = document.querySelector(".menuMobileNoturno");
let user = document.querySelector(".userNoturno");
let pesquisa = document.querySelector(".pesquisaNoturno");
let footer = document.querySelector("footer");

btn.addEventListener("click", () =>{
    btn.classList.toggle("activeButton");
    body.classList.toggle("meActive");
    navMenu.classList.toggle("meActive");
    menuMobile.classList.toggle("meActive");
    user.classList.toggle("meActive");
    pesquisa.classList.toggle("meActive");
    footer.classList.toggle("meActive");
})