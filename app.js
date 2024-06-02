//carousel
const hamburgerButton = document.querySelector("#hamburger-menu");
const MobileMenu = document.querySelector("#mobile-menu");
let isMenuOpened = false;

const HamburgerButtonHandeler = () => {
    if(isMenuOpened){
        hamburgerButton.children[0].classList.remove("cross-bar-1")
        hamburgerButton.children[1].style.opacity = '1'
        hamburgerButton.children[2].classList.remove("cross-bar-2")
        MobileMenu.style.transform = "translateX(-100%)"
        isMenuOpened = false;
    }
    else{
        hamburgerButton.children[0].classList.add("cross-bar-1")
        hamburgerButton.children[1].style.opacity = '0'
        hamburgerButton.children[2].classList.add("cross-bar-2")
        MobileMenu.style.transform = "translateX(0)"
        isMenuOpened = true;
    }
}

hamburgerButton.addEventListener('click', HamburgerButtonHandeler);

const navBar = document.querySelector('nav')

let lastPosn = 0;
window.addEventListener("scroll", () => {

    if (window.scrollY > lastPosn){
        navBar.style.transform = "translateY(-100%)";
    }
    else {
        navBar.style.transform = "translateY(0)";
    }
    lastPosn = window.scrollY;
})
