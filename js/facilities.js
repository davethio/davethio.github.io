// change image on facility page
window.addEventListener('DOMContentLoaded', function() {
    var facilitySection = document.getElementById('facilities');
    var images = [
      '../assets/Spa.jpg',
      '../assets/Hotel Gym.jpg',
      '../assets/Swimming Pool.jpg'
    ];
    var currIndex = 0;
  
    function changeBackgroundImage() {
      facilitySection.classList.add('fade-out');
  
      setTimeout(function() {
        facilitySection.style.backgroundImage = 'url("' + images[currIndex] + '")';
        facilitySection.classList.remove('fade-out');

        setTimeout(function() {
          facilitySection.classList.add('fade-in');
        }, 10);
      }, 1000); 

      facilitySection.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity') {
          facilitySection.classList.remove('fade-in');
        }
      });
      currIndex = (currIndex + 1) % images.length;
      setTimeout(changeBackgroundImage, 5000);
    }
  
    changeBackgroundImage();
});