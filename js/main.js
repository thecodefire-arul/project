// Navbar Section

const menuBtn = document.querySelector(".hamburger img");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});