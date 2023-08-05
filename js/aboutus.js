// change image on about us page
window.addEventListener('DOMContentLoaded', function() {
  var aboutSection = document.getElementById('aboutus');
  var images = [
    '../assets/Couple.jpg',
    '../assets/Old Building.jpg',
    '../assets/Plane.jpg',
    '../assets/Couple With Child.jpg'
  ];
  var currIndex = 0;
  
  function changeBackgroundImage() {
    aboutSection.classList.add('fade-out');
  
    setTimeout(function() {
      aboutSection.style.backgroundImage = 'url("' + images[currIndex] + '")';
      aboutSection.classList.remove('fade-out');
  
      setTimeout(function() {
        aboutSection.classList.add('fade-in');
      }, 10);

    }, 1000); 
  
    aboutSection.addEventListener('transitionend', function(event) {
      if (event.propertyName === 'opacity') {
        aboutSection.classList.remove('fade-in');
      }
    });

    currIndex = (currIndex + 1) % images.length;
    setTimeout(changeBackgroundImage, 5000); 
  }

  changeBackgroundImage();
});