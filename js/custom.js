// Hero Bannner - Swiper JS
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    effect: 'fade',
    roundLengths: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 4000,
    },
    // cubeEffect: {
    //     shadowOffset: 10,
    // }
});


$('.slick-slider').slick({
    // dots: true,
    // arrows: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 5000,
});

// AOS
AOS.init();

// LightGallery
lightGallery(document.getElementById('image-collage'), {
    thumbnail:true
}); 