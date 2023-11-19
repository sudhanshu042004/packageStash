export function imageCarousel(prevBtn,nextBtn,slides) {
    let currentSlide = 0;
    let IntervalId = setInterval(() => {
        nextSlide(currentSlide,slides);
    }, 5000);
    slideshow(currentSlide,slides);
    prevBtn.addEventListener('click',()=>{
        clearInterval(IntervalId);
        prevSlide(currentSlide,slides);
    })
    nextBtn.addEventListener('click',()=>{
        clearInterval(IntervalId);
        nextSlide(currentSlide,slides);
    })
    if(currentSlide<0){
        currentSlide=0;
    } else if(currentSlide>slides.length){
        currentSlide=0;
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
            slideshow(currentSlide,slides);
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            slideshow(currentSlide,slides);
    }
    
}
function slideshow(index,slides){
    slides.forEach((slide,i) => {
        if (i==index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}
