function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({
    behavior: "smooth"
  });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  status.textContent = "Thank you! Your message has been sent.";
  form.reset();
});
