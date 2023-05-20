// barraHamburger
function toggleBar() {
    let toggleBar = document.querySelector(".navList")
    let menuMobile = document.querySelector(".menuMobile")
    let x = document.getElementById("x")

    if (toggleBar.className === "navList") {
        toggleBar.classList.add("active");
        x.style.display = "block"
        document.body.style.overflow = "hidden";
        menuMobile.style.opacity = "0";
    }
    else {
        toggleBar.classList.remove("active");
        x.style.display = "inherit"
        document.body.style.overflow = "inherit";
        menuMobile.style.opacity = "1";
    }
}
// fim barraHambuerger

// btn modoNoturno
let btn = document.querySelector("#btn")

btn.addEventListener("click", () =>{
    btn.classList.toggle("activeButton");
})
// fim btn modo Noturno

// boxs
const accordion = document.querySelectorAll('.contentBx') ; 
accordion.forEach(acc => {
    acc.addEventListener('click', function(){
        this.classList.toggle('active'); 
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