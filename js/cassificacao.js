function toggleBar() {
    let toggleBar = document.querySelector(".navList")
    let menuMobile = document.querySelector(".menuMobile")
    let x = document.getElementById("x")

    if(toggleBar.className === "navList"){
        toggleBar.classList.add("active");
        x.style.display = "block"
        document.body.style.overflow = "hidden";
        menuMobile.style.opacity = "0";
    }
    else{
        toggleBar.classList.remove("active");
        x.style.display = "inherit"
        document.body.style.overflow = "inherit";
        menuMobile.style.opacity = "1";
    }
}
