var mySwiper = new Swiper('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  slidesPerView: 1,
  spaceBetween: 20,
  effect: "slide",
  speed: 600,
  loop: true,
  preventClicks: true,
  updateOnWindowResize: true,
  preloadImages: true,
  updateOnImagesReady: true,
  navigation: {
      nextEl: '.arrow',
    },

  breakpoints: {
    601: {
      slidesPerView: 2,
      spaceBetween: 10,
      
    },

    801: {
      slidesPerView: 3,
      spaceBetween: 10,
    }  
  }
});

document.addEventListener('DOMContentLoaded', function() {

var menuButton = document.querySelector('.menu-button');
var menu = document.querySelector('.header');

var PlayButton = document.querySelector('.play');
var PlayImg = document.querySelector('.play-img');
var PauseImg = document.querySelector('.pause-img');
var AudioSrc = document.querySelector('.audio-src');

var Button = document.querySelector('.button');
var Link = document.querySelector('.menu-list');
var Slider = document.querySelector('.swiper-wrapper');

menuButton.addEventListener('click', function() {
menuButton.classList.toggle('menu-button-active');
menu.classList.toggle('header-active');
});


PlayButton.addEventListener('click', function(){
  if (AudioSrc.paused){
    AudioSrc.play();

    if(!AudioSrc.classList.contains('img-display'))
    {
      AudioSrc.classList.toggle('img-display');
      AudioSrc.classList.toggle('img-nodisplay');
    }
  }
  else{
    AudioSrc.classList.toggle('img-display');
    AudioSrc.classList.toggle('img-nodisplay');

    AudioSrc.pause();
  }
});

AudioSrc.addEventListener('pause', PlayPause);
AudioSrc.addEventListener('play', PlayPause);

Button.addEventListener('click', PauseAudio);
Link.addEventListener('click', PauseAudio);
Slider.addEventListener('click', PauseAudio);


function PlayPause(){
   PlayImg.classList.toggle('img-display');
   PlayImg.classList.toggle('img-nodisplay');
  
   PauseImg.classList.toggle('img-display');
   PauseImg.classList.toggle('img-nodisplay');
}

function PauseAudio(){
  if (!AudioSrc.paused){
    AudioSrc.classList.toggle('img-display');
    AudioSrc.classList.toggle('img-nodisplay');
   
   AudioSrc.pause();
  }
}
  
});