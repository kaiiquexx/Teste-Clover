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

// feedback
function feedback(){
    let msg = document.querySelector(".clickYes");
    
    addEventListener("click", () =>{
        msg.classList.add("click");
    })

    // tirar mensagem
    setTimeout(function(){ 
        let msg = document.getElementsByClassName("clickYes");
        while(msg.length > 0){
            msg[0].parentNode.removeChild(msg[0]);
        }
    }, 5000);
    document.onreadystatechange = () => {
        if (document.readyState === 'complete') {
            removeMensagem(); 
        }
    };
}