// Pronunciations
var whanaungatanga = new Audio();
whanaungatanga.src = 'https://wisa-assets.s3.us-east-2.amazonaws.com/audio/whanaungatanga.mp3';

var interaction = new Audio();
interaction.src = 'https://wisa-assets.s3.us-east-2.amazonaws.com/audio/interaction.mp3';

var support = new Audio();
support.src = 'https://wisa-assets.s3.us-east-2.amazonaws.com/audio/support.mp3';

var ako = new Audio();
ako.src = 'https://wisa-assets.s3.us-east-2.amazonaws.com/audio/ako.mp3';

 
// Animating counter up stats
(function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);    jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// Accordion
document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => { 
        button.classList.toggle('accordion__button--active');
    });
});


// Testimonial slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Faster image loading
function loadImage() {
    var img = document.getElementById('image');
    img.style.opacity = 0;
    var interval = setInterval(function() {
      if (img.complete) {
        clearInterval(interval);
        img.style.transition = 'opacity 1s';
        img.style.opacity = 1;
      }
    }, 100);
  }