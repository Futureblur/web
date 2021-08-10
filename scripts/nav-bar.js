const toggleNavBar = () => {
    const burger = document.querySelector('#nav-bar #burger');
    const navBar = document.querySelector('#nav-bar .nav-bar-right');

    burger.classList.toggle('active');
    navBar.classList.toggle('active');
}

const navSlide = () => {
    const burger = document.querySelector('#nav-bar #burger');

    burger.addEventListener('click', () => {
        toggleNavBar();
    });
}

/*const navLinks = () => {
    const navLinks = document.querySelector('#nav-bar-wrapper .nav-bar-right').getElementsByTagName('a');

    for (const link of navLinks) {
        link.addEventListener('click', () => {
            toggleNavBar();
        });
    }
}*/

window.addEventListener("load", function () {
    navSlide();

    //document.addEventListener('scroll', scrollEvent);
});

//Hide when scrolling down
let lastScroll = window.pageYOffset;

function scrollEvent() {
    const currentScroll = window.pageYOffset;

    if (lastScroll > currentScroll) {
        //Scrolling down
        document.getElementById("nav-bar-wrapper").style.top = "0";
    } else {
        //Scrolling up
        if (!document.querySelector(".nav-bar-right").classList.contains('active')) {
            document.getElementById("nav-bar-wrapper").style.top = "-90px";
        }
    }

    lastScroll = currentScroll;
}