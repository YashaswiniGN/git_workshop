// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Form submit action
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message Sent Successfully!");
});
