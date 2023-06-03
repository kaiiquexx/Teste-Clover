// voltar

let back = document.querySelector(".xNoturno");

back.addEventListener("click", () =>{
    window.history.back();
})

// modo escuro
let escuro = document.querySelectorAll(".modoEscuro");
var i
btn.addEventListener("click", () =>{
    for (i=0; i <= escuro.length; i++) {
        escuro[i].classList.toggle("meActive");
    }
})