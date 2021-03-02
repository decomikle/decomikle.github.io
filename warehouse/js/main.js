$(function () {
    $('.top__slider').slick({
        autoplay: true,
        fade: true,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            },
        ]


    });

    $('.gallery__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: false
                }
            },
        ]


    });

    $('.menu__btn').on('click', function () {
        $('.menu__list').toggleClass('menu__list--active');

    });

});







