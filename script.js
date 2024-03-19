document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.getElementById("slideshow");
  const images = [
    "April at CT.png",
    "MANNUBETT.png",
    "MANNUUBETT.png"
      // Add more image URLs here
  ];
  let currentIndex = 0;

  function showImage(index) {
      const img = document.createElement("img");
      img.src = images[index];
      slideshow.innerHTML = ""; // Clear the existing content
      slideshow.appendChild(img);
  }

  function nextSlide() {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
  }

  // Display first image
  showImage(currentIndex);

  // Start slideshow
  setInterval(nextSlide, 3000); // Change slide every 3 seconds
  // Next button functionality
  const nextBtn = document.getElementById("nextBtn");
  nextBtn.addEventListener("click", nextSlide);

  var dropdownItems = document.querySelectorAll("nav ul ul li");
    dropdownItems.forEach(function(item) {
        item.addEventListener("mouseenter", function(event) {
            event.stopPropagation(); // Stop the propagation of the event
        });
    });

});
