let slideIndex = 1,
    slidesWrapp = document.querySelector('.slider__list'),
    slides = document.querySelectorAll('.slider__item'),
    dotsWrap = document.querySelector('.slider__dots'),
    dots = document.querySelectorAll('.slider__dot');

    // People Slider
    let slidesPeople = document.querySelectorAll('.people__item'),
    dotsWrapPeople = document.querySelector('.people_dots'),
    dotsPeople = document.querySelectorAll('.people__dot');

    // Удаляем класс no-js
    slidesWrapp.classList.remove('slider__list--no-js');

let promoWidth = slides.length;
let peopleWidth = slidesPeople.length;

function showSlides(n, lgth, slds, dts, dtsClsAct) {

    // Если дошли до последнего слайда - вернуться на первый
    if (n > lgth) {
        slideIndex = 1;
    }
    // Чтобы попасть с первого на последний, листая назад
    if (n < 1) {
        slideIndex = lgth;
    }

    // slides.forEach((item) => item.style.display = 'none');
    for (let i = 0; i < lgth; i++) {
        slds[i].style.display = 'none';
    }

    dts.forEach((item) => item.classList.remove(dtsClsAct));

    slds[slideIndex - 1].style.display = 'block';
    dts[slideIndex - 1].classList.add(dtsClsAct);
}

showSlides(slideIndex, promoWidth, slides, dots, "promo__dot--active");
showSlides(slideIndex, peopleWidth, slidesPeople, dotsPeople, "people__dot--active");

function plusSlides(n, lgth, slds, dts, dtsClsAct) {
    showSlides((slideIndex += n), lgth, slds, dts, dtsClsAct);
}

function currentSlide(n, lgth, slds, dts, dtsClsAct) {
    showSlides((slideIndex = n), lgth, slds, dts, dtsClsAct);
}

function dotsClick(dtsWrp, dts, lgth, slds, dtsClsAct, dtsClsContain) {
    dtsWrp.addEventListener('click', function (event) {
        for (let i = 0; i < dts.length + 1; i++) {
            if (event.target.classList.contains(dtsClsContain) && event.target == dts[i - 1]) {
                currentSlide(i, lgth, slds, dts, dtsClsAct);
            }
        }
    });
}

dotsClick(dotsWrap, dots, promoWidth, slides, "promo__dot--active", "slider__dot");
dotsClick(dotsWrapPeople, dotsPeople, peopleWidth, slidesPeople, "people__dot--active", "people__dot");
