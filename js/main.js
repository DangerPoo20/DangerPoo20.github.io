// Mobile menu
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// Search
const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".article-card");

if (searchInput) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    articleCards.forEach(card => {
      const title = (card.dataset.title || "").toLowerCase();
      card.style.display = title.includes(query) ? "" : "none";
    });
  });
}

// Topic filter
const topicButtons = document.querySelectorAll(".topic-btn");

if (topicButtons.length > 0) {
  topicButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      topicButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const topic = btn.dataset.topic;

      articleCards.forEach(card => {
        card.style.display =
          topic === "All" || card.dataset.topic === topic ? "" : "none";
      });
    });
  });
}
