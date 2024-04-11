"use strict";
window.onscroll = function () { stickyMenu(); };
const navbar = document.querySelector("#NavBar");
const sticky = navbar.offsetTop;
const skillText = document.querySelector(".SoftSkillsContent");
const skillPosition = skillText.offsetTop;
function SkillsContent() {
    if (window.screenY >= skillPosition) {
        skillText.classList.add("scroll");
    }
    else {
        skillText.classList.remove("scroll");
    }
}
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
