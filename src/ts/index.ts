
// When the user scrolls the page, execute myFunction
 window.onscroll = function() {stickyMenu()};
 
// Get the navbar
const navbar = document.querySelector("#NavBar") as HTMLElement;
// Get the offset position of the navbar
const sticky = navbar.offsetTop;

// get the projects element


// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyMenu() {

    console.log(sticky);

    if (window.scrollY >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
        
    }
};




