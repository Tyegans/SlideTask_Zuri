const track = document.querySelector('.slide_track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.slide_button--right');
const previousButton = document.querySelector('.slide_button--left');
const dotNav = document.querySelector('.slide_nav');
const dot = Array.from(dotNav.children )
 

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);
  
const moveToSlide = (track, currentSlide, targetSlide) =>{
    track.style.transform = 'translateX(-' + targetSlide.style.left; + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

previousButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
})

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;

moveToSlide(track, currentSlide, nextSlide);
}) 