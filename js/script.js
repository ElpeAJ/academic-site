// Animate letters for both heading and paragraph
function animateText(elementId) {
    const element = document.getElementById(elementId);
    const text = element.textContent;
    element.textContent = "";
  
    [...text].forEach((letter, i) => {
      const span = document.createElement("span");
      span.textContent = letter === " " ? "\u00A0" : letter; // preserve spaces
      span.style.animationDelay = `${i * 0.1}s`; // stagger letters
      element.appendChild(span);
    });
  }
  
  animateText("animatedHeading");
  animateText("animatedParagraph");
  