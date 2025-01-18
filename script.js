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
    "BnW1.jpg",
    "BnW4.jpg",
    "BnW12.jpg",
    "BnW13.jpg",
    "BnW15.jpg",
    "IMG-20240316-WA0004",
    "IMG-20240319-WA00012",
    "IMG-20240516-WA0000",
    "IMG-20240529-WA0029",
    "IMG-20240529-WA0031",
    "IMG-20240529-WA0033",
    "IMG-20240529-WA0035",
    "IMG-20240529-WA0037",
    "IMG-20240529-WA0039",
    "IMG-20240529-WA0041",
    "IMG-20240529-WA0043",
    "IMG-20240529-WA0045",
    "IMG-20240529-WA0047",
    "IMG-20240529-WA0049",
    "IMG-20240530-WA0010",
    "IMG-20240531-WA0074",
    "IMG-20240531-WA0076",
    "IMG-20240531-WA0078",
    "IMG-20240531-WA0080",
    "IMG-20240531-WA0082",
    "IMG-20240531-WA0086",
    "IMG-20240531-WA0088",
    "IMG-20240531-WA0090",
    "IMG-20240531-WA0092",
    "IMG-20240531-WA0094",
    "IMG-20240531-WA0096",
    "IMG-20240531-WA0098",
    "IMG-20240531-WA0100",
    "IMG-20240531-WA0116",
    "IMG-20240531-WA0118",
    "IMG-20240531-WA0120",
    "IMG-20240531-WA0122",
    "IMG-20240531-WA0124",
    "IMG-20240531-WA0126",
    "IMG-20240531-WA0128",
    "IMG-20240531-WA0130",
    "IMG-20240531-WA0132",
    "IMG-20240531-WA0134.jpg",
    "IMG-20240531-WA0136.jpg",
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
