let title = document.querySelectorAll(".title");
let text = document.querySelectorAll(".text");
let titleEnglish = document.querySelectorAll(".titleEnglish");
let textEnglish = document.querySelectorAll(".textEnglish");
let button = document.querySelector("#english");

button.addEventListener("click", () => {
    if ((title.className === "title") && (text.className === "text")){
        title.classList.add("en");
        text.classList.add("en");
        titleEnglish.classList.add("en");
        textEnglish.classList.add("en");
    }
})