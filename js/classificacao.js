// barraHamburger
function toggleBar() {
    let toggleBar = document.querySelector(".navList");
    let menuMobile = document.querySelector(".menuMobile");
    let x = document.getElementById("x");
    let pesquisa = document.querySelector(".pesquisa");

    if (toggleBar.className === "navList") {
        toggleBar.classList.add("active");
        toggleBar.style.zIndex = "1";
        x.style.display = "block";
        document.body.style.overflow = "hidden";
        menuMobile.style.opacity = "0";
        pesquisa.style.zIndex = "0";
    }
    else {
        toggleBar.classList.remove("active");
        toggleBar.style.zIndex = "4";
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
let x = document.querySelector(".xNoturno")
let textTittle = document.querySelector(".tittle");
let textSub = document.querySelector(".sub");
let box1 = document.querySelector(".bkgModoEscuro1");
let box2 = document.querySelector(".bkgModoEscuro2");
let box3 = document.querySelector(".bkgModoEscuro3");
let box4 = document.querySelector(".bkgModoEscuro4");
let box5 = document.querySelector(".bkgModoEscuro5");
let box6 = document.querySelector(".bkgModoEscuro6");
let box7 = document.querySelector(".bkgModoEscuro7");
let box8 = document.querySelector(".bkgModoEscuro8");
let box9 = document.querySelector(".bkgModoEscuro9");
let box10 = document.querySelector(".bkgModoEscuro10");
let verMais = document.querySelector(".labelVerMais");
let VerMaisOpen = document.querySelector(".verMais");
let footer = document.querySelector("footer");

btn.addEventListener("click", () =>{
    btn.classList.toggle("activeButton");
    body.classList.toggle("meActive");
    navMenu.classList.toggle("meActive");
    menuMobile.classList.toggle("meActive");
    user.classList.toggle("meActive");
    pesquisa.classList.toggle("meActive");
    x.classList.toggle("meActive");
    textTittle.classList.toggle("meActive");
    textSub.classList.toggle("meActive");
    box1.classList.toggle("meActive");
    box2.classList.toggle("meActive");
    box3.classList.toggle("meActive");
    box4.classList.toggle("meActive");
    box5.classList.toggle("meActive");
    box6.classList.toggle("meActive");
    box7.classList.toggle("meActive");
    box8.classList.toggle("meActive");
    box9.classList.toggle("meActive");
    box10.classList.toggle("meActive");
    verMais.classList.toggle("meActive");
    VerMaisOpen.classList.toggle("meActive");
    footer.classList.toggle("meActive");
})
// fim btn modo Noturno

// boxs

// fim boxs
