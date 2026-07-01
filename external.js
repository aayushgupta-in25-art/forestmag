const menu = document.querySelector(".two");
const overlay = document.getElementById("background-overlay");
const header = document.querySelectorAll(".headera");
const body = document.body;
// hamburger 
const hamburger = document.getElementById("main");
const mid = document.querySelector(".burger2");
const first = document.querySelector(".burger1");
const last = document.querySelector(".burger3");

const toggleMenu = () => {
    mid.classList.toggle("active");
    first.classList.toggle("active");
    last.classList.toggle("active");
    overlay.classList.toggle("active");
    menu.classList.toggle("active");
    body.classList.toggle("no-scroll");
}

hamburger.addEventListener("click", toggleMenu);

const closeMenu = () => {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("no-scroll");
    mid.classList.remove("active");
    first.classList.remove("active");
    last.classList.remove("active");
}

overlay.addEventListener("click", closeMenu);

for(const link of header){
    link.addEventListener("click", closeMenu);
};
