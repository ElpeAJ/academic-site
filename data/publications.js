function filterSelection(category) {
  const items = document.querySelectorAll(".filter-item");

  items.forEach((item) => {
    const shouldShow = category === "all" || item.classList.contains(category);
    item.style.display = shouldShow ? "block" : "none";
  });
}

filterSelection("all");

const searchBar = document.getElementById("searchBar");

if (searchBar) {
  searchBar.addEventListener("input", function handleSearch() {
    const query = this.value.trim().toLowerCase();
    const items = document.querySelectorAll(".filter-item");

    items.forEach((item) => {
      const matchesSearch = item.innerText.toLowerCase().includes(query);
      item.style.display = matchesSearch ? "block" : "none";
    });
  });
}
