const burger = document.querySelector('.burger i');
const navContainer = document.querySelector('.nav-bar');
const navLinks = document.querySelectorAll('.nav-bar li');
burger.addEventListener('click', () => {
    burger.classList.toggle('fa-times');
    navContainer.classList.toggle('right');
});
navLinks.forEach(function (link) {
    link.addEventListener('click', () => {
        if (navContainer.classList.contains("right")) {
            navContainer.classList.remove('right');
        }
        if (burger.classList.contains('fa-times')) {
            burger.classList.remove('fa-times');
        }
    })
});