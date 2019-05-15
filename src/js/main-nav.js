let openBtn = document.querySelector('.main-nav__toggle--open');
let navList = document.querySelector('.main-nav__list');
let closeBtn = document.querySelector('.main-nav__toggle--close');

openBtn.addEventListener('click', function(event) {
    event.preventDefault();
    navList.style.display = "block";
    closeBtn.style.display = "block";

});

closeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    navList.style.display = "none";
    closeBtn.style.display = "none";
});