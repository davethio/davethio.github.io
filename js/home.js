// change the image on home page
window.addEventListener('DOMContentLoaded', function() {
    var homeSection = document.getElementById('home');
    var images = [
      '../assets/Jakarta.jpg',
      '../assets/Jakarta2.jpg',
      '../assets/Jakarta3.jpg'
    ];
    var currIndex = 0;
  
    function changeBackgroundImage() {
      homeSection.classList.add('fade-out'); 
  
      setTimeout(function() {
        homeSection.style.backgroundImage = 'url("' + images[currIndex] + '")';
        homeSection.classList.remove('fade-out'); 
  
        setTimeout(function() {
          homeSection.classList.add('fade-in');
        }, 10);
      }, 1000); 
  
      homeSection.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity') {
          homeSection.classList.remove('fade-in');
        }
      });
  
      currIndex = (currIndex + 1) % images.length;
      setTimeout(changeBackgroundImage, 5000); 
    }
  
    changeBackgroundImage();
});

// Image Slider for Events

let slideIndex = 1;
slideshow(slideIndex);

function plusSlides(n) {
  slideshow(slideIndex += n);
}

function currentSlide(n) {
  slideshow(slideIndex = n);
}

function slideshow(n) {
  let i;
  let slides = document.getElementsByClassName("event-slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}