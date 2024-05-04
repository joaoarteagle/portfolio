"use strict";
window.onscroll = function () { stickyMenu(); };
const navbar = document.querySelector("#NavBar");
const sticky = navbar.offsetTop;
function stickyMenu() {
    console.log(sticky);
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
;
