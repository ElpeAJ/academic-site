// Intersection Observer for animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  
  // Apply to all elements with .animate-on-scroll
  document.querySelectorAll(".animate-on-scroll").forEach(el => {
    observer.observe(el);
  });
  
document.addEventListener("DOMContentLoaded", function () {
    const typewriterEl = document.getElementById("typewriter");
    const text = "Sharing my research, achievements, and academic journey.";
  
    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        typewriterEl.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 80); // typing speed
      } else {
        // Remove cursor after finishing
        typewriterEl.classList.add("finished");
      }
    }
  
    typeWriter();
  });