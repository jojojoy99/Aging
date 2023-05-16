var images = ["20.png", "30.png", "40.png", "50.png", "60.png", "70.png", "80.png", "90.png", "95.png","99.png"];
var currentIndex = 0;

// Pre-load the images
var preloadedImages = [];
for (var i = 0; i < images.length; i++) {
  preloadedImages[i] = new Image();
  preloadedImages[i].src = images[i];
}

function changeImage() {
  var slideshowDiv = document.getElementById("slideshow");
  slideshowDiv.style.backgroundImage = "url('" + preloadedImages[currentIndex].src + "')";
  currentIndex++;
  if (currentIndex == preloadedImages.length) {
    currentIndex = 0;
  }
}

setInterval(changeImage, 1300); // Change image every 3 seconds
