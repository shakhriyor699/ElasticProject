document.querySelector('#date').addEventListener('focus', () => {
    document.querySelector('#date').nextElementSibling.style.opacity = 1
})
document.querySelector('#time').addEventListener('focus', () => {
    document.querySelector('#time').nextElementSibling.style.opacity = 1
})
document.querySelector('#address').addEventListener('focus', () => {
    document.querySelector('#address').nextElementSibling.style.opacity = 1
})
document.querySelector('#name').addEventListener('focus', () => {
    document.querySelector('#name').nextElementSibling.style.opacity = 1
})
document.querySelector('#phone').addEventListener('focus', () => {
    document.querySelector('#phone').nextElementSibling.style.opacity = 1
})
document.querySelector('#email').addEventListener('focus', () => {
    document.querySelector('#email').nextElementSibling.style.opacity = 1
})



// fetch
const link = document.querySelector('.book__btn')
let checkbox = [...document.querySelectorAll('.checkbox_text')]
let selectBtn = document.querySelectorAll('.select_btn')
checkbox.forEach(i =>{
    i.addEventListener('click', function (e) {
        i.classList.toggle('active')
    })
}) 

selectBtn.forEach(function (Btn) {
    Btn.addEventListener('click', (e) => {
        selectBtn.forEach(i => i.classList.remove('active'))
        e.target.classList.add('active')
    })
})


link.addEventListener('click', () => {
    const checkboxActive = document.querySelectorAll('.checkbox_text.active')
    const selectBtnActive = document.querySelectorAll('.select_btn.active')
    const selectDate1 = document.querySelector('.selected1')
    const selectDate2 = document.querySelector('.selected2')
    const selectDate3 = document.querySelector('.selected3')
    let selectBtn = document.querySelectorAll('.select_btn')
    const dateInput1 = document.querySelector('.date__input-enter1')
    const dateInput2 = document.querySelector('.date__input-enter2')
    const dateInput3 = document.querySelector('.date__input-enter3')
    let booking = ''
   let checkVal
   let check=''
//    let select = ''

   checkboxActive.forEach(element => {
        checkVal = element.innerHTML
        check =  check +  checkVal
    });


    if (check == null || selectDate1.value == '' || selectDate2.value == '' || selectDate3.value == ''  || dateInput1.value == '' || dateInput2.value == '' || dateInput3.value == '') {
        
        
        alert('Заполните')
    }else{
        let select = ''
        selectBtn.forEach(function(e){
            if(e.classList.length == 3){
               if(e==0) {
                select = `<h3>'Basic'</h3>`
               } else if (e==1){
                select = 'Standart'
               }
                else if (e==3){
                select = 'Premium'
               }
            }
        })
        fetch(`https://api.telegram.org/bot1423840005:AAGpsC5CRlZDblHoYyiu9Wis27wYnUmtOZY/sendMessage?chat_id=2719618_mode=html&text= 
        Photoshoot: ${check}
        %0A
        Date: ${selectDate1.value}
        %0A
        Time: ${selectDate2.value}
        %0A
        Address: ${selectDate3.value}
        %0A
        Package: ${select}
        %0A
        Name: ${dateInput1.value}
        %0A
        Phone: ${dateInput2.value}
        %0A
        Email: ${dateInput3.value}
        `)
    }
    setTimeout(() => {
        location.reload();
    }, 1500);
})



// burger 




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



