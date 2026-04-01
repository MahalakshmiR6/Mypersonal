// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

// Fade animation on load
window.onload = () => {
  document.querySelectorAll(".fade").forEach(el => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  });
};