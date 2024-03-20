document.addEventListener("DOMContentLoaded", function () {
  const slideshow = document.getElementById("slideshow");
  const images = [
    "Sleepover.heic",
    "group.heic",
    "Bett_inno.heic",
    "Bett_yvonne.heic",
    "CT.heic",
    "CT1.heic",
    "Jayv_Yvonne.heic",
    "gathering.heic",
    "gathering 2.heic",
    "Gucha_jayv.heic",
    "Bett.jpg",
    "April at CT.png",
    "MANNUBETT.png",
    "MANNUUBETT.png",
    "Jayv.jpg",
    "wNight.jpg",
    "Porn.jpg",
    "",
    "",
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
  dropdownItems.forEach(function (item) {
    item.addEventListener("mouseenter", function (event) {
      event.stopPropagation(); // Stop the propagation of the event
    });
  });

  /* Error Handling */
  // Example of form validation
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();

    if (!isValidEmail(emailValue)) {
      event.preventDefault(); // Prevent form submission
      alert("Please enter a valid email address.");
    }
  });

  function isValidEmail(email) {
    // Simple email validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /* Security */
  // Example: Redirect to HTTPS if not already
  if (location.protocol !== 'https:') {
    location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
  }
});
