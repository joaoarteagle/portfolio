
// When the user scrolls the page, execute myFunction
 window.onscroll = function() {stickyMenu()};
 
// Get the navbar
const navbar = document.querySelector("#NavBar") as HTMLElement;
// Get the offset position of the navbar
const sticky = navbar.offsetTop;



//Get the SoftSkills Container
const skillText = document.querySelector(".SoftSkillsContent") as HTMLElement;
const skillPosition = skillText.offsetTop;




function SkillsContent(){


        if(window.screenY >= skillPosition ){
            skillText.classList.add("scroll");

        }else{
            skillText.classList.remove("scroll");
        }



}



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {

    console.log(sticky);

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        
    }
};




//window.addEventListener('scroll', myFunction);