$(function(){
    $('.banner-section__slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="img/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="img/icon/arrow-right.svg" alt=""></button>',
    });

    $('.tab').on('click', function(e){
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(e.target).addClass('tab--active');
        $($(e.target).attr('href')).addClass('tabs-content--active');

    });

    $('.product-item__favorite').on('click', function(){
        $(this).toggleClass('product-item__favorite--active');

    });

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="img/icon/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="img/icon/arrow-black-right.svg" alt=""></button>',
    });

    $('.filter-style').styler();

    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });
    
    $(".js-range-slider").ionRangeSlider({
        type: "double",
        grid: true,
        min: 0,
        max: 250,
        from: 25,
        to: 100,
        prefix: "$"
    });

    $('.catalog__filter-button').on('click', function(){
        $('.catalog__filter-button').toggleClass('catalog__filter-button--active');
    });
 
        $(".rate-yo").rateYo({
            ratedFill: "#5da68b",
            normalFill: "#c4c4c4",
            spacing: "6px"
        });
       

});

