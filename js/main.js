// burger меню
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', function () {
    nav.classList.toggle('nav--active');
    burger.classList.toggle('burger--active');
    document.body.classList.toggle('stop-scroll');
})

// Галерея
const swiper = new Swiper("#gallery", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
        prevEl: "#gallery-prev",
        nextEl: "#gallery-next"
    }
})

