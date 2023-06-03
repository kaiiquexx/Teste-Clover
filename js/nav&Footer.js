// barraHamburger
function toggleBar() {
    let toggleBar = document.querySelector(".navList");
    let menuMobile = document.querySelector(".menuMobile");
    let x = document.getElementById("x");
    let pesquisa = document.querySelector(".pesquisa");

    if (toggleBar.className === "navList") {
        toggleBar.classList.add("active");
        toggleBar.style.zIndex = "3";
        menuMobile.style.zIndex = "2";
        x.style.display = "block";
        document.body.style.overflow = "hidden";
        pesquisa.style.zIndex = "0";
    }
    else {
        toggleBar.classList.remove("active");
        toggleBar.style.zIndex = "2";
        menuMobile.style.zIndex = "3";
        x.style.display = "inherit"
        document.body.style.overflow = "inherit";
        pesquisa.style.zIndex = "4";
    }
}
// fim barraHambuerger

// btn modoNoturno
let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let navMenu = document.querySelector(".navMenu");
let menuMobile = document.querySelector(".fa-bars");
let user = document.querySelector(".userNoturno");
let pesquisa = document.querySelector(".pesquisaNoturno");
let arrow = document.querySelector(".arrowTop");
let footer = document.querySelector("footer");

btn.addEventListener("click", () => {
    btn.classList.toggle("activeButton");
    body.classList.toggle("meActive");
    navMenu.classList.toggle("meActive");
    menuMobile.classList.toggle("meActive");
    user.classList.toggle("meActive");
    pesquisa.classList.toggle("meActive");
    arrow.classList.toggle("meActive");
    footer.classList.toggle("meActive");
})

// return
function scrollArrowTop() {

    if (scrollY > 250) {
        arrow.style.opacity ="1";
        arrow.style.transition =".5s";
        arrow.addEventListener("click", () =>{
            window.scrollTo({
                top:0,
                left:0,
                behavior: "smooth"
            });
        })
    }
    else {
        arrow.style.opacity ="0";
        arrow.style.transition =".5s";
    }

}
window.addEventListener('scroll', scrollArrowTop);