let hamburger = document.querySelector(".navbar i");
let menu = document.querySelector(".menu");

function openMenu(e) {
    menu.classList.toggle("toggle");
    menu.style.transition = "500ms";
}

function changeHamburger(e) {
    hamburger.classList.toggle("toggle");
}

function renderMenu(e) {
    openMenu(e);
    changeHamburger(e);
}

hamburger.addEventListener("click", renderMenu);

