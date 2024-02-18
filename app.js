const navSlide = () => {
    const burger = document.querySelector('.navbar__container__burger');
    const nav = document.querySelector('.navbar__container__links');
    const navLinks = document.querySelectorAll('.navbar__container__links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4 + 0.4}s`;
            }
        });
        //Burger animation 
        burger.classList.toggle('toggle');
    });
}
navSlide();