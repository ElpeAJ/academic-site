const themeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const currentPage = body.dataset.page;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
  });
}

function setActiveNavLink() {
  if (!currentPage) {
    return;
  }

  const activeLink = document.querySelector(`[data-nav="${currentPage}"]`);
  if (activeLink) {
    activeLink.classList.add("active-link");
    activeLink.setAttribute("aria-current", "page");
  }
}

function closeMenu() {
  if (!hamburger || !navLinks) {
    return;
  }

  hamburger.classList.remove("active");
  hamburger.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("active");
}

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const isExpanded = hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", String(isExpanded));
  });

  document.querySelectorAll(".nav-links a, .nav-links button").forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 860) {
        closeMenu();
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
}

setActiveNavLink();
