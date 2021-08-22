// burger-menu
let burger_btn = document.querySelector('.info__btn');
let navigation = document.querySelector('.header__navigation');

burger_btn.addEventListener("click", () => {
    burger_btn.classList.toggle('active_btn');
    navigation.classList.toggle('active_navigation');
});
// burger-menu

// search 
let search_btn = document.querySelector('.search__btn');
let search_input = document.querySelector('.search__input');

search_btn.addEventListener("click", () => {
    search_input.classList.toggle('active_input');
});

// popup
let login_btn = document.querySelector('.menu__login');
let popup = document.querySelector('.popup');
let close_btn = document.querySelector('.form__close-btn');

login_btn.addEventListener("click", () => {
    popup.classList.toggle('active_popup');
});
close_btn.addEventListener("click", () => {
    popup.classList.remove('active_popup');
});
// popup


// slider_intro 
$('.intro__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    asNavFor: '.slider-hover',
    autoplay: true,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 479,
          settings: {
            arrows: true,
            dots: false,
            prevArrow: '<button type="button" class="slick-prev"></button>',
            nextArrow: '<button type="button" class="slick-next"></button>',
          }
        },
    ]
});
$('.slider-hover').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    asNavFor: '.intro__slider',
    draggable: false,
    swipe: false,
});
// slider_intro 


// about_slider
$('.about__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },
        {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              dots: true,
            }
        },
        {
            breakpoint: 1169,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              dots: true,
            }
        },
    ]
});
// about_slider

// wow js
new WOW().init();
// wow js


// courses_slider 
$('.courses__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    mobileFirst: true,
    autoplay: true,
    responsive: [
        {
          breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
          breakpoint: 991,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
          breakpoint: 1169,
            settings: {
                dots: true,
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
    ]
});
// courses_slider


//rating-star
star = document.querySelectorAll('.rating__item');

star.forEach(item => {
    item.addEventListener('click', ()=> {
        item.parentNode.dataset.starNum = item.dataset.value;
    });
});
//rating-star

// heart-select
heart = document.querySelectorAll('.more__icon_heart');

heart.forEach(item => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        item.classList.toggle('select_heart');
    });
});
// heart-select

// teacher_slider 
$('.teachers__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 575,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
              settings: {
                  dots: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
        },
        {
            breakpoint: 1169,
              settings: {
                  dots: true,
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
        },
    ]
});
// teacher_slider 


//campus_slider
$('.campus__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    mobileFirst: true,
    autoplay: true,
    responsive: [
        {
          breakpoint: 575,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 991,
              settings: {
                  dots: true,
                  slidesToShow: 3,
                  slidesToScroll: 3,
              }
        },
        {
            breakpoint: 1169,
              settings: {
                  dots: true,
                  slidesToShow: 4,
                  slidesToScroll: 4,
              }
        },
    ]
});
//campus_slider

// news_slider
$('.news__slider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 7000,
    mobileFirst: true,
    responsive: [
        {
          breakpoint: 767,
            settings: {
                dots: true,
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
    ]
});
$('.news__subslider').slick({
    slidesToShow: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
});
// news_slider


// hover-slider
let prev_btn = document.querySelector('.slick-prev');
let next_btn = document.querySelector('.slick-next');
let slider_hover = document.querySelectorAll('.slider-hover');

prev_btn.addEventListener("mouseover", ()=>{
    slider_hover[0].classList.add('active_slider');
});
prev_btn.addEventListener("mouseout", ()=>{
    slider_hover[0].classList.remove('active_slider');
});
next_btn.addEventListener("mouseover", ()=>{
    slider_hover[1].classList.add('active_slider');
});
next_btn.addEventListener("mouseout", ()=>{
    slider_hover[1].classList.remove('active_slider');
});
// hover-slider

