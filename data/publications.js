fetch("data/publications.json")
  .then(response => response.json())
  .then(data => {
    const pubList = document.getElementById("pub-list");
    data.forEach(pub => {
      const li = document.createElement("li");
      li.innerHTML = `
        <strong>${pub.title}</strong><br>
        <em>${pub.authors}</em> (${pub.year})<br>
        <span>${pub.journal}</span><br>
        <a href="${pub.link}" target="_blank">View Publication</a>
      `;
      pubList.appendChild(li);
    });
  })
  .catch(error => console.error("Error loading publications:", error));
