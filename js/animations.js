const animatedElements = document.querySelectorAll(".animate-on-scroll");

if (animatedElements.length > 0) {
  const observer = new IntersectionObserver((entries, scrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-up");
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  animatedElements.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  const typewriterEl = document.getElementById("typewriter");
  const text = "Sharing research, achievements, and an academic journey with clarity.";

  if (!typewriterEl) {
    return;
  }

  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterEl.textContent += text.charAt(index);
      index += 1;
      setTimeout(typeWriter, 55);
      return;
    }

    typewriterEl.classList.add("finished");
  }

  typeWriter();
});
