// change image on rooms page
window.addEventListener('DOMContentLoaded', function() {
    var roomSection = document.getElementById('rooms');
    var images = [
      '../assets/1 Beds Room.jpg',
      '../assets/2 Beds Room.jpg',
      '../assets/Luxurious Suite Room.jpg'
    ];
    var currIndex = 0;
  
    function changeBackgroundImage() {
      roomSection.classList.add('fade-out');
  
      setTimeout(function() {
        roomSection.style.backgroundImage = 'url("' + images[currIndex] + '")';
        roomSection.classList.remove('fade-out');
  
        setTimeout(function() {
          roomSection.classList.add('fade-in');
        }, 10);

      }, 1000);
  
      roomSection.addEventListener('transitionend', function(event) {
        if (event.propertyName === 'opacity') {
          roomSection.classList.remove('fade-in');
        }
      });
  
      currIndex = (currIndex + 1) % images.length;
      setTimeout(changeBackgroundImage, 5000); 
    }
  
    changeBackgroundImage();
});
