/* ======================= typing animation ======================= */
var typed = new Typed(".typing", {
    strings: ["Web Designer", "Web Developer", "Cyber Security Analyst", "Project Manager"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
// Menu active class on click
const navLinks = document.querySelectorAll('.nav li a');

function removeActiveClasses() {
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
}

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        removeActiveClasses();
        this.classList.add('active');
    });
});