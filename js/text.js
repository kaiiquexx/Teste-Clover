// modo escuro
let x = document.querySelector(".xNoturno");
let p = document.querySelector(".text");
let tittle = document.querySelector(".tittle");
let line = document.querySelector(".line");
let pQuestion = document.querySelector(".pQuestion");

btn.addEventListener("click", () =>{
    x.classList.toggle("meActive");
    p.classList.toggle("meActive");
    tittle.classList.toggle("meActive");
    line.classList.toggle("meActive");
    pQuestion.classList.toggle("meActive");
})