"use strict";
window.onscroll = function () { myFunction(); };
const navbar = document.querySelector("#NavBar");
const sticky = navbar.offsetTop;
function myFunction() {
    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }
}
;
