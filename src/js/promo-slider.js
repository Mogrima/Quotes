let slideIndex = 1,
    slidesWrapp = document.querySelector('.slider__list'),
    slides = document.querySelectorAll('.slider__item'),
    dotsWrap = document.querySelector('.slider__dots'),
    dots = document.querySelectorAll('.slider__dot');

    // Удаляем класс no-js
    slidesWrapp.classList.remove('slider__list--no-js');

showSlides(slideIndex);

function showSlides(n) {

    // Если дошли до последнего слайда - вернуться на первый
    if (n > slides.length) {
        slideIndex = 1;
    }
    // Чтобы попасть с первого на последний, листая назад
    if (n < 1) {
        slideIndex = slides.length;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for (let i = 0; i < slides.length; i++) {
    //     slides[i].style.display = 'none';
    // }

    dots.forEach((item) => item.classList.remove('promo__dot--active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('promo__dot--active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

dotsWrap.addEventListener('click', function (event) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (event.target.classList.contains('slider__dot') && event.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
});