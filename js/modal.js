// Get modal elements
const cvBtn = document.getElementById("cvBtn");
const cvmodal = document.getElementById("cvModal");
const closeModal = document.getElementById("closeModal");

// Open modal on button hover or click
cvBtn.addEventListener("click", () => {
  cvmodal.style.display = "block";
});

// Close modal
closeModal.addEventListener("click", () => {
  cvmodal.style.display = "none";
});

// Close if clicked outside content
window.addEventListener("click", (e) => {
  if (e.target === cvmodal) {
    cvmodal.style.display = "none";
  }
});

//Teaching and Awards Modal //
const tamodal = document.getElementById("modalTA");
const modalImg = document.getElementById("modalTA-img");
const captionText = document.getElementById("captionTA");
const closeBtn = document.querySelector(".closeTA");
const prevBtn = document.querySelector(".prevTA");
const nextBtn = document.querySelector(".nextTA");

let currentImages = [];
let currentIndex = 0;

/* --- Gallery Images (DEMO dataset) --- */
const galleries = {
  bachelors: [
    "assets/images/Bachelors1.jpeg",
    "assets/images/Bachelors2.JPG",
    "assets/images/Bachelors3.JPG",
    "assets/images/Bachelors4.jpeg"
  ],
  masters: [
    "assets/images/Masters1.JPG",
    "assets/images/Masters2.jpeg",
    "assets/images/Masters3.jpeg"
  ],
  internships: [
    "assets/images/Internship1.jpeg",
    "assets/images/Internship2.JPG",
    "assets/images/Internship3.jpeg",
    "assets/images/Internship3.jpeg"
  ]
};

/* --- Gallery Modal --- */
document.querySelectorAll(".gallery-card").forEach(card => {
  card.addEventListener("click", () => {
    const category = card.dataset.category; // e.g. "bachelors"
    currentImages = galleries[category];  // fetch array of images
    currentIndex = 0;
    openImage(currentIndex, category);
  });
});

function openImage(index, category) {
  tamodal.style.display = "block";
  modalImg.src = currentImages[index];
  captionText.innerHTML = `${category.charAt(0).toUpperCase() + category.slice(1)} (${index+1}/${currentImages.length})`;
}

/* --- Navigation --- */
nextBtn.addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  }
});

prevBtn.addEventListener("click", () => {
  if (currentImages.length > 0) {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
  }
});

/* --- Close Modal --- */
closeBtn.addEventListener("click", () => {
  tamodal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    tamodal.style.display = "none";
  }
});

/* --- Awards Modal --- */
const awardModal = document.getElementById("award-modal");
const awardModalImg = document.getElementById("award-modal-img");
const closeAwardModal = document.querySelector(".close-award");

// Award Images (overlay OR image clickable)
document.querySelectorAll(".award-card .award-image").forEach(div => {
  div.addEventListener("click", () => {
    const img = div.querySelector("img");
    awardModal.style.display = "flex"; // Use flex so it centers properly
    awardModalImg.src = img.src;
  });
});

// Close Award Modal
closeAwardModal.addEventListener("click", () => {
  awardModal.style.display = "none";
});