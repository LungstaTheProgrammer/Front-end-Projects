let headerVid = document.getElementById('myVidHeader')
headerVid.controls = false
headerVid.muted = true
headerVid.loop = true
headerVid.autoplay = true
headerVid.load()

function splitScroll() {
    const controller = new ScrollMagic.Controller()

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.about-title',
        triggerHook: 0
    })
    .setPin('.about-title')
    // .addIndicators()
    .addTo(controller)
}

splitScroll()

function SlideShow(slideId, dotsId) {
    this.slideIndex = 1
    this.slides = document.querySelectorAll(slideId)
    this.dots = document.querySelectorAll(dotsId)
    this.plusSlides = function(n) {
        if (this.slideIndex < 4) 
        this.showSlides(this.slideIndex += n); 
    }
    this.minusSlides = function(n) {
        if (this.slideIndex > 1)
        this.showSlides(this.slideIndex -= n)
    }
    this.currentSlide = function(n) {
        this.showSlides(this.slideIndex = n);
    }
    this.showSlides = function(n) {
        // var slides = document.getElementsByClassName("mySlides");
        // var dots = document.getElementsByClassName("dot");
        if (n > this.slides.length) {this.slideIndex = 1} 
        if (n < 1) {this.slideIndex = this.slides.length}
        for (i = 0; i < this.slides.length; i++) {
            this.slides[i].style.display = "none"; 
        }
        for (i = 0; i < this.dots.length; i++) {
            this.dots[i].className = this.dots[i].className.replace(" active", "");
        }
        this.slides[this.slideIndex-1].style.display = "block"; 
        this.dots[this.slideIndex-1].className += " active";
    }
    this.showSlides(this.slideIndex)
}

var slideShowWed = new SlideShow('#mySlides1', '#dots1')
var prevWed = document.getElementById('prev1')
var nextWed = document.getElementById('next1')
var slideShowCor = new SlideShow('#mySlides2', '#dots2')
var prevCor = document.getElementById('prev2')
var nextCor = document.getElementById('next2')
var slideShowSoc = new SlideShow('#mySlides3', '#dots3')
var prevSoc = document.getElementById('prev3')
var nextSoc = document.getElementById('next3')


prevWed.addEventListener('click', () => slideShowWed.minusSlides(1))
nextWed.addEventListener('click', () => slideShowWed.plusSlides(1))
prevCor.addEventListener('click', () => slideShowCor.minusSlides(1))
nextCor.addEventListener('click', () => slideShowCor.plusSlides(1))
prevSoc.addEventListener('click', () => slideShowSoc.minusSlides(1))
nextSoc.addEventListener('click', () => slideShowSoc.plusSlides(1))


// var slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   if (slideIndex < 4) 
//     showSlides(slideIndex += n); 
// }

// function minusSlides(n) {
//   if (slideIndex > 1)
//     showSlides(slideIndex -= n)
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1} 
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none"; 
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block"; 
//   dots[slideIndex-1].className += " active";
// }