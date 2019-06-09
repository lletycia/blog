let hamburger = document.querySelector(".navbar i");
let menu = document.querySelector(".menu");
let navBar = document.querySelector("#sidebar");
let sect = document.querySelector("#sidebar li");

function openMenu(e) {
    menu.classList.toggle("toggle");
    menu.style.transition = "500ms";
    navBar.classList.toggle("toggle");
    sect.classList.toggle("toggle");
}

function changeHamburger(e) {
    hamburger.classList.toggle("toggle");
}

function renderMenu(e) {
    openMenu(e);
    changeHamburger(e);
}

hamburger.addEventListener("click", renderMenu);

