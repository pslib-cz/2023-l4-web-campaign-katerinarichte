const navSlide = () => {
    const burger = document.querySelector('.home__menu__burger');
    const nav = document.querySelector('.home__menu__links');
    const navLinks = document.querySelectorAll('.home__menu__links li');

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