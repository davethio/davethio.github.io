// Change navbar background on scroll, transparent or white
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop === 0) {
      navbar.classList.add('transparent');
    } else {
      navbar.classList.remove('transparent');
    }
});

// hamburger menu on mobile interface
let menu = document.querySelector('.menu-toggle');
let nav = document.querySelector('.nav-links');

menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav-opt").forEach(n => n.addEventListener("click", () => {
  menu.classList.remove("active");
  nav.classList.remove("active");
}));
