let burger = document.querySelector('.header__burger')
let body = document.querySelector('body')
burger.addEventListener('click', function () {
    if (!burger.classList.contains('active')) {
        burger.classList.add('active');
        body.style.overflow = 'hidden'
    }
    else {
        burger.classList.remove('active');
        body.style.overflow = 'scroll'
    }
})