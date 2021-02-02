const formBtn = document.querySelector('.form__btn')

formBtn.addEventListener('click', () => {

    const name = document.querySelector('.name');
    const email = document.querySelector('.email');
    const text = document.querySelector('.message');
    fetch(`https://api.telegram.org/bot1479089608:AAEAgLcW44H2YU6lMLHBxgpHqMqy1Y_OrCQ/sendMessage?chat_id=-430451129&parse_mode=html&text= 
       name: ${name.value}%0A
       Email: ${email.value}%0A
       Message: ${text.value}`)
    name.value = '';
    email.value = '';
    text.value = '';
})


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