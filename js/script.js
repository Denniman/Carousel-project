const carousel = document.querySelector('.carousel')
const previousButton = carousel.querySelector('.previous-button')
const nextButton = carousel.querySelector('.next-button')
const contents = carousel.querySelector('.carousel__contents')
const slides = carousel.querySelectorAll('.carousel__slide')
const dotsContainer = carousel.querySelector('.carousel__dots')

nextButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const nextSlide = currentSlide.nextElementSibling
    const destination = getComputedStyle(nextSlide).left
    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    nextSlide.classList.add('is-selected')
    // Shows previous button
    previousButton.removeAttribute('hidden')
    // Hides next button
    if(!nextSlide.nextElementSibling) {
        nextButton.setAttribute('hidden', true)
    }
    //    Highlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const nextDot = currentDot.nextElementSibling
    currentDot.classList.remove('is-selected')
    nextDot.classList.add('is-selected')
})



previousButton.addEventListener('click', event => {
    const currentSlide = contents.querySelector('.is-selected')
    const previousSlide = currentSlide.previousElementSibling
    const destination = getComputedStyle(previousSlide).left
    contents.style.left = '-' + destination
    currentSlide.classList.remove('is-selected')
    previousSlide.classList.add('is-selected')
    // Shows next button
    nextButton.removeAttribute('hidden')
    // Hides previous button
    if(!previousSlide.previousElementSibling) {
        previousButton.setAttribute('hidden', true)
    }
    // Highlight dot
    const currentDot = dotsContainer.querySelector('.is-selected')
    const previousDot = currentDot.previousElementSibling
    currentDot.classList.remove('is-selected')
    previousDot.classList.add('is-selected')
})

const dots = Array.from(carousel.querySelectorAll('.carousel__dot'))

dots.forEach(dot => {
    dot.addEventListener('click', event => {
        let clickedDotIndex

       for (let index = 0; index < dots.length; index++) {
           if(dots[index] === dot) {
               clickedDotIndex = index
           }
       }
       const slideToShow = slides[clickedDotIndex]
       const destination = getComputedStyle(slideToShow).left
       contents.style.left = '-' + destination
       const currentSlide = contents.querySelector('.is-selected')
       currentSlide.classList.remove('is-selected')
       slideToShow.classList.add('is-selected')
       dots.forEach(d => {d.classList.remove('is-selected') })
       dot.classList.add('is-selected')
    //    Show/hide buttons
    if(clickedDotIndex === 0) {
        previousButton.setAttribute('hidden', true)
        nextButton.removeAttribute('hidden')
    } else if(clickedDotIndex === dots.length -1) {
        previousButton.removeAttribute('hidden')
        nextButton.setAttribute('hidden', true)
    } else {
        previousButton.removeAttribute('hidden')
        nextButton.removeAttribute('hidden')
    }
    })
})

const slideWidth = slides[0].getBoundingClientRect().width

slides[0].style.left = '0px'
slides[1].style.left = slideWidth + 'px'
slides[2].style.left = slideWidth * 2 + 'px'

slides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + 'px'
})







