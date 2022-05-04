window.onscroll = function() {stickyNav()};

var navbar = document.getElementById("navbar");
var containerOffset = document.getElementById("grid-container-main")
var sticky = navbar.offsetTop;

function stickyNav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};