const cvButton = document.getElementById("cvBtn");
const cvModal = document.getElementById("cvModal");
const closeCvModal = document.getElementById("closeModal");

function hideModal(modalElement) {
  if (!modalElement) {
    return;
  }

  modalElement.style.display = "none";
  modalElement.setAttribute("aria-hidden", "true");
}

function showModal(modalElement, displayMode = "block") {
  if (!modalElement) {
    return;
  }

  modalElement.style.display = displayMode;
  modalElement.setAttribute("aria-hidden", "false");
}

if (cvButton && cvModal && closeCvModal) {
  cvButton.addEventListener("click", () => showModal(cvModal));
  closeCvModal.addEventListener("click", () => hideModal(cvModal));
}

const galleryModal = document.getElementById("modalTA");
const galleryImage = document.getElementById("modalTA-img");
const galleryCaption = document.getElementById("captionTA");
const galleryClose = document.querySelector(".closeTA");
const galleryPrev = document.querySelector(".prevTA");
const galleryNext = document.querySelector(".nextTA");

let currentImages = [];
let currentIndex = 0;
let currentCategory = "";

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
    "assets/images/Internship4.jpeg"
  ]
};

function updateGalleryModal() {
  if (!galleryModal || !galleryImage || !galleryCaption || currentImages.length === 0) {
    return;
  }

  galleryImage.src = currentImages[currentIndex];
  galleryCaption.textContent = `${currentCategory} (${currentIndex + 1}/${currentImages.length})`;
}

document.querySelectorAll(".gallery-card").forEach((card) => {
  card.addEventListener("click", () => {
    const categoryKey = card.dataset.category;
    const imageSet = galleries[categoryKey];

    if (!galleryModal || !imageSet) {
      return;
    }

    currentImages = imageSet;
    currentIndex = 0;
    currentCategory = card.querySelector("h3")?.textContent || categoryKey;
    updateGalleryModal();
    showModal(galleryModal, "flex");
  });
});

if (galleryNext) {
  galleryNext.addEventListener("click", () => {
    if (currentImages.length === 0) {
      return;
    }

    currentIndex = (currentIndex + 1) % currentImages.length;
    updateGalleryModal();
  });
}

if (galleryPrev) {
  galleryPrev.addEventListener("click", () => {
    if (currentImages.length === 0) {
      return;
    }

    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateGalleryModal();
  });
}

if (galleryClose && galleryModal) {
  galleryClose.addEventListener("click", () => hideModal(galleryModal));
}

const awardModal = document.getElementById("award-modal");
const awardModalImage = document.getElementById("award-modal-img");
const awardClose = document.querySelector(".close-award");

document.querySelectorAll(".award-card .award-image").forEach((card) => {
  card.addEventListener("click", () => {
    const image = card.querySelector("img");
    if (!awardModal || !awardModalImage || !image) {
      return;
    }

    awardModalImage.src = image.src;
    awardModalImage.alt = image.alt;
    showModal(awardModal, "flex");
  });
});

if (awardClose && awardModal) {
  awardClose.addEventListener("click", () => hideModal(awardModal));
}

window.addEventListener("click", (event) => {
  if (event.target === cvModal) {
    hideModal(cvModal);
  }

  if (event.target === galleryModal) {
    hideModal(galleryModal);
  }

  if (event.target === awardModal) {
    hideModal(awardModal);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    hideModal(cvModal);
    hideModal(galleryModal);
    hideModal(awardModal);
  }
});
