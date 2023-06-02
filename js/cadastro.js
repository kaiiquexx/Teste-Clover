// verSenha

let verSenha = document.querySelector(".eye");
let verSenha2 = document.querySelector(".eye2");
let input = document.querySelector("#password");
let inputConfirm = document.querySelector("#confirmPassword");
let ver1 = document.querySelector("#ver1");
let desver1 = document.querySelector("#desver1");
let ver2 = document.querySelector("#ver2");
let desver2 = document.querySelector("#desver2");

verSenha.addEventListener("click", () =>{
    if(input.type=="password"){
        input.type="text";
        ver1.classList.add("eyeActive");
        desver1.classList.add("eyeActive");
    }
    else{
        input.type="password";
        ver1.classList.remove("eyeActive");
        desver1.classList.remove("eyeActive");
    }
})

verSenha2.addEventListener("click", () =>{
    if(inputConfirm.type=="password"){
        inputConfirm.type="text";
        ver2.classList.add("eyeActive");
        desver2.classList.add("eyeActive");
    }
    else{
        inputConfirm.type="password";
        ver2.classList.remove("eyeActive");
        desver2.classList.remove("eyeActive");
    }
})