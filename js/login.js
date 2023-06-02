let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector(".btn-success");

button.addEventListener("click", () => {
    if ((email.value == "adm@clover.com") && (password.value == "restritoclover")) {
        window.location.href = "restrito.html"
    }

    else if ((email.value == "teste@clover.com") && (password.value == "testeclover")) {
        window.location.href = "home.html"
    }

    else {
        alert("Erro no Login")
    }
})

// verSenha
let verSenha = document.querySelector(".eye");
let ver = document.querySelector("#ver");
let desver = document.querySelector("#desver");

verSenha.addEventListener("click", () =>{
    if(password.type=="password"){
        password.type="text";
        ver.classList.add("eyeActive");
        desver.classList.add("eyeActive");
    }
    else{
        password.type="password";
        ver.classList.remove("eyeActive");
        desver.classList.remove("eyeActive");
    }
})
