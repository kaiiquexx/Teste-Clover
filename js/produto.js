// voltar

let back = document.querySelector(".xNoturno");

back.addEventListener("click", () =>{
    window.history.back();
})

// heart
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


// avaliação
let stars = document.querySelectorAll(".starIcon");

document.addEventListener("click", function(e){
    let classStar = e.target.classList;
    if(!classStar.contains('active')){
        stars.forEach(function(star){
            star.classList.remove('active')
        });
        classStar.add("active");
        console.log(e.target.getAttribute("data-avaliacao"));
    }
})

// modo escuro
let escuro = document.querySelectorAll(".modoEscuro");
var i
btn.addEventListener("click", () =>{
    for (i=0; i <= escuro.length; i++) {
        escuro[i].classList.toggle("meActive");
    }
})