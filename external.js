const hamburgericon = document.querySelector(".hamburger");
const menu = document.querySelector(".two");
const overlay = document.getElementById("background-overlay");
const cross = document.querySelector(".cross-icon");
const body = document.body;

hamburgericon.addEventListener("click", () => {
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
    hamburgericon.classList.add("active");
    cross.classList.add("active");
});

cross.addEventListener("click", () => {
    cross.classList.toggle("active");
    hamburgericon.classList.toggle("active");
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("no-scroll");
    cross.classList.remove("active");
    hamburgericon.classList.remove("active");
});
