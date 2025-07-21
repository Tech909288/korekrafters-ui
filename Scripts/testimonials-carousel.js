let currentIndex = 0;
const cards = document.querySelectorAll(".testimonial-card");

function updateSlider() {
  cards.forEach((card, i) => {
    card.classList.remove("active");
  });
  cards[currentIndex].classList.add("active");
}

function slideTestimonials(direction) {
  currentIndex = (currentIndex + direction + cards.length) % cards.length;
  updateSlider();
}

// Initialize on load
updateSlider();
