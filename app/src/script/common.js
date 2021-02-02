const sliderItem = document.querySelectorAll('.slider__item'),
sliderIndicators = document.querySelectorAll('.slider__indicator'),
prevSlide = document.querySelector('.prev_slide'),
nextSlide = document.querySelector('.next_slide'),
viewMore = document.querySelector('.viewMore-links'),
backOnTop = document.querySelector('.slider__item-linkTop');

function change(el) {
    if (el == prevSlide) {
        active--
        if (active < 0) {
            active = 0
        } else {
            sliderItem[active].classList.add('active')
            sliderItem[active + 1].classList.remove('active')
            sliderItem[active + 1].style = 'top: 100%'
            sliderItem[active].style = 'top: 0'
            sliderIndicators[active].classList.add('active')
            sliderIndicators[active + 1].classList.remove('active')  
        }
    } else if (el == nextSlide) {
        active++
        if (active >= sliderItem.length) {
            active = sliderItem.length - 1
        } else {
            sliderItem[active].classList.add('active')
            sliderItem[active - 1].classList.remove('active')
            sliderItem[active - 1].style = 'top: -100%'
            sliderItem[active].style = 'top: 0'
            sliderIndicators[active].classList.add('active')
            sliderIndicators[active - 1].classList.remove('active')
        }
        
    }
}
let active = 0
let time = true
for (let i = 0; i < sliderItem.length; i++) {
    sliderItem[i].addEventListener('wheel', (e) => {
        if(time == true){
            if (e.deltaY >= 100) {
                change(nextSlide)
            } else if (e.deltaY <= -100) {
                change(prevSlide)
            }
            time = false
            setTimeout(() => {
                time = true
            }, 1500)
        }
    })
}
for (let i = 0; i < sliderIndicators.length; i++) {
        sliderIndicators[i].addEventListener('click', () => {
            if (sliderIndicators[i].classList.contains('active')) { } else {
                if(time == true){
                    if (i > active) {
                        for (let j = active; j < i; j++) {
                            change(nextSlide)
                        }
                    } else {
                        for (let j = active; j > i; j--) {
                            change(prevSlide)
                        }
                    }
                    time = false
                    setTimeout(() => {
                        time = true
                    }, 2000)
                }
            }
        })
}
for (let i = 0; i < sliderIndicators.length; i++) {
        viewMore.addEventListener('click', () => {
            if (sliderIndicators[i].classList.contains('active')) { } else {
                if(time == true){
                    if (i > active) {
                        for (let j = active; j < i; j++) {
                            change(nextSlide)
                        }
                    } else {
                        for (let j = active; j > i; j--) {
                            change(prevSlide)
                        }
                    }
                    time = false
                    setTimeout(() => {
                        time = true
                    }, 2000);
                }
            }
        })
}
for (let i = 0; i < sliderIndicators.length; i++) {
        backOnTop.addEventListener('click', () => {
            if (sliderIndicators[i].classList.contains('active')) { } else {
                if(time == true){
                    if (i > active) {
                        for (let j = active; j < i; j++) {
                            change(nextSlide)
                        }
                    } else {
                        for (let j = active; j > i; j--) {
                            change(prevSlide)
                        }
                    }
                    time = false
                    setTimeout(() => {
                        time = true
                    }, 2000);
                }
            }
        })
}
 
 
 



//  TOUCH

let moveDownX;
let moveDownY;
let clientX;
let clientY;
function getTouches(e) {
    return e.touches
  }
  function TouchStart(e) {
    if (e.type === "mousedown") {
      clientX = e.clientX
      clientY = e.clientY
    } else {
      moveDownX = getTouches(e)[0].clientX
      moveDownY = getTouches(e)[0].clientY
    }
  }
  function TouchMove(e) {
    let xUp = null
    let yUp = null
    if (!moveDownX || !moveDownY) {
      return
    }
    if (e.type === "mouseup") {
      xUp = e.clientX
      yUp = e.clientY
    } else {
      xUp = e.touches[0].clientX
      yUp = e.touches[0].clientY
    }
    let x = moveDownX - xUp
    let y = moveDownY - yUp
    if (Math.abs(x) > Math.abs(y)) {} else {
        if(time == true){
            if (y > 0) {
                change(nextSlide);
              } else if (y < 0) {
          
                change(prevSlide);
              }
              time = false
              setTimeout(() => {
                  time = true
              }, 3000)
        }
    }
    moveDownX = null
    moveDownY = null
  }
  document.addEventListener("touchstart", TouchStart, false)
  document.addEventListener("touchmove", TouchMove, false)
  document.addEventListener("mousedown", TouchStart, false)
  document.addEventListener("mouseup", TouchMove, false)


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
  