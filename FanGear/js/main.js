$(function () {
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        dots: false,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/logo/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/logo/arrow-black-right.svg" alt=""></button>'
    })

    $('.hero__slider').slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: true,



    });

});