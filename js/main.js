var swiper = new Swiper(".mySwiper", {
    loop:true,
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menu__mobile__content')
let menuOpen = false;
menuBtn.addEventListener('click', () => {

  if(!menuOpen) {
    menu.classList.add('menu__open');
    menuBtn.classList.add('openBtn');
    menuOpen = true;
  } else {
    menu.classList.remove('menu__open');
    menuBtn.classList.remove('openBtn');
    menuOpen = false;
  }
});