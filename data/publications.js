// Publications.js starts here
  // Filter functionality
  function filterSelection(category) {
    let items = document.querySelectorAll(".filter-item");

    if (category === "all") {
      items.forEach(item => item.style.display = "block");
    } else {
      items.forEach(item => {
        item.style.display = item.classList.contains(category) ? "block" : "none";
      });
    }
  }

  // Default view = all
  filterSelection("all");

  // Search functionality
  document.getElementById("searchBar").addEventListener("input", function () {
    let query = this.value.toLowerCase();
    let items = document.querySelectorAll(".filter-item");

    items.forEach(item => {
      let text = item.innerText.toLowerCase();
      item.style.display = text.includes(query) ? "block" : "none";
    });
  });

  // // For Use later -- I guess
  // fetch("data/publications.json")
  // .then(response => response.json())
  // .then(data => {
  //   const pubList = document.getElementById("pub-list");
  //   data.forEach(pub => {
  //     const li = document.createElement("li");
  //     li.innerHTML = `
  //       <strong>${pub.title}</strong><br>
  //       <em>${pub.authors}</em> (${pub.year})<br>
  //       <span>${pub.journal}</span><br>
  //       <a href="${pub.link}" target="_blank">View Publication</a>
  //     `;
  //     pubList.appendChild(li);
  //   });
  // })
  // .catch(error => console.error("Error loading publications:", error));