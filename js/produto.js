let heart = document.querySelector("#heart");
let heartBlack = document.querySelector("#heartBlack");

heart.addEventListener("click", () => {
    if (heart.id === ("heart")) {
        heart.classList.add("ON");
        heartBlack.classList.add("ON");
    }
})

heartBlack.addEventListener("click", () => {
    if (heartBlack.id === ("heartBlack")) {
        heartBlack.classList.remove("ON");
        heart.classList.remove("ON");
    }
})

// modo escuro

// modo escuro
let escuro = document.querySelectorAll(".modoEscuro");
var i
btn.addEventListener("click", () =>{
    for (i=0; i <= escuro.length; i++) {
        escuro[i].classList.toggle("meActive");
    }
})