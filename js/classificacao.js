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
let bkgBox1 = document.querySelector('.bkgContent1');
let bkgBox2 = document.querySelector(".bkgContent2");
let bkgBox3 = document.querySelector(".bkgContent3");
let bkgBox4 = document.querySelector(".bkgContent4");
let bkgBox5 = document.querySelector(".bkgContent5");
let bkgBox6 = document.querySelector(".bkgContent6");
let bkgBox7 = document.querySelector(".bkgContent7");
let bkgBox8 = document.querySelector(".bkgContent8");
let bkgBox9 = document.querySelector(".bkgContent9");
let bkgBox10 = document.querySelector(".bkgContent10");
let verMais = document.querySelector(".labelVerMais");
let arrowVerMaisCor = document.querySelector("#arrowVerMais");
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
    bkgBox1.classList.toggle("meActive");
    bkgBox2.classList.toggle("meActive");
    bkgBox3.classList.toggle("meActive");
    bkgBox4.classList.toggle("meActive");
    bkgBox5.classList.toggle("meActive");
    bkgBox6.classList.toggle("meActive");
    bkgBox7.classList.toggle("meActive");
    bkgBox8.classList.toggle("meActive");
    bkgBox9.classList.toggle("meActive");
    bkgBox10.classList.toggle("meActive");
    verMais.classList.toggle("meActive");
    arrowVerMaisCor.classList.toggle("meActive");
    VerMaisOpen.classList.toggle("meActive");
    footer.classList.toggle("meActive");
})
// fim btn modo Noturno

// boxs
const accordion = document.querySelectorAll('.contentBx') ; 
accordion.forEach(acc => {
    acc.addEventListener('click', function(){
        this.classList.toggle('active')
    })
})

let arrow = document.querySelector("#arrowOne");
let content = document.querySelector('#label') ; 

content.addEventListener("click", () =>{
    arrow.classList.toggle("activeBox");
    arrow.style.transition = ".3s";
})

let arrowTwo = document.querySelector("#arrowTwo");
let contentTwo = document.querySelector('#labelTwo') ; 

contentTwo.addEventListener("click", () =>{
    arrowTwo.classList.toggle("activeBox");
    arrowTwo.style.transition = ".3s";
})

let arrowThree = document.querySelector("#arrowThree");
let contentThree = document.querySelector('#labelThree') ; 

contentThree.addEventListener("click", () =>{
    arrowThree.classList.toggle("activeBox");
    arrowThree.style.transition = ".3s";
})

let arrowFour = document.querySelector("#arrowFour");
let contentFour = document.querySelector('#labelFour') ; 

contentFour.addEventListener("click", () =>{
    arrowFour.classList.toggle("activeBox");
    arrowFour.style.transition = ".3s";
})

let arrowFive = document.querySelector("#arrowFive");
let contentFive = document.querySelector('#labelFive') ; 

contentFive.addEventListener("click", () =>{
    arrowFive.classList.toggle("activeBox");
    arrowFive.style.transition = ".3s";
})

let arrowSix = document.querySelector("#arrowSix");
let contentSix = document.querySelector('#labelSix') ; 

contentSix.addEventListener("click", () =>{
    arrowSix.classList.toggle("activeBox");
    arrowSix.style.transition = ".3s";
})

let arrowSeven = document.querySelector("#arrowSeven");
let contentSeven = document.querySelector('#labelSeven') ; 

contentSeven.addEventListener("click", () =>{
    arrowSeven.classList.toggle("activeBox");
    arrowSeven.style.transition = ".3s";
})

let arrowEight = document.querySelector("#arrowEight");
let contentEight = document.querySelector('#labelEight') ; 

contentEight.addEventListener("click", () =>{
    arrowEight.classList.toggle("activeBox");
    arrowEight.style.transition = ".3s";
})

let arrowNine = document.querySelector("#arrowNine");
let contentNine = document.querySelector('#labelNine') ; 

contentNine.addEventListener("click", () =>{
    arrowNine.classList.toggle("activeBox");
    arrowNine.style.transition = ".3s";
})

let arrowTen = document.querySelector("#arrowTen");
let contentTen = document.querySelector('#labelTen') ; 

contentTen.addEventListener("click", () =>{
    arrowTen.classList.toggle("activeBox");
    arrowTen.style.transition = ".3s";
})

let arrowVerMais = document.querySelector("#arrowVerMais");
let contentVerMais = document.querySelector('#labelVerMais') ; 

contentVerMais.addEventListener("click", () =>{
    arrowVerMais.classList.toggle("activeBox");
    arrowVerMais.style.transition = ".3s";
})
// fim boxs