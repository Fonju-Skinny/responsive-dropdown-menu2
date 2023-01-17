
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const pauseBtn = document.querySelector(".pause-btn")
const playBtn = document.querySelector(".play-btn")
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIcons.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIcons[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
  }, 6000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});









pauseBtn.style.display = "flex"
playBtn.style.display = "none"
//stop the image slider autoplay on mouseover
pauseBtn.addEventListener("click", () => {
  clearInterval(playSlider);
  pauseBtn.style.display = "none"
  playBtn.style.display = "flex"

});

//start the image slider autoplay again on mouseout
playBtn.addEventListener("click", () => {
  repeater();
  pauseBtn.style.display = "flex"
  playBtn.style.display = "none"
});






const socialsm = document.querySelector(".socialsM")

const cheuP = document.querySelector(".cheup")

const chedowN = document.querySelector(".chedown")

const Blur = document.querySelector(".blur")

cheuP.addEventListener("click", () => {
  socialsm.classList.add("active")
  Blur.classList.add("active")

})
chedowN.addEventListener("click", () => {
  socialsm.classList.remove("active")
  Blur.classList.remove("active")

})