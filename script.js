document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.getElementById("gallery");
    const images = gallery.getElementsByTagName("img");
    let currentIndex = 0;
  
    function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }
  
    function showImage(index) {
      for (let i = 0; i < images.length; i++) {
        images[i].style.opacity = i === index ? 1 : 0;
      }
    }
  
    setInterval(showNextImage, 4000); // Change image every 3 seconds (adjust as needed)
  });