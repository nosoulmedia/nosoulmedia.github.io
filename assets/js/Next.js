document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".element"); // Select all elements
  const nextButton = document.getElementById("next-button"); // Select the button

  let currentIndex = 0; // Start with the first element

  nextButton.addEventListener("click", function () {
    // Move to the next element, with wrap-around
    currentIndex = (currentIndex + 1) % elements.length;

    // Scroll to the next element
    elements[currentIndex].scrollIntoView({
      behavior: "smooth", // Smooth scrolling effect
      block: "start"      // Align to the top of the viewport
    });
  });
});
