const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("mobile-active");
});
