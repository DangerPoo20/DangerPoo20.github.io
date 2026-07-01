// =========================
// MOBILE MENU
// =========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// =========================
// SEARCH (only runs if exists)
// =========================
const searchInput = document.getElementById("searchInput");
const articleCards = document.querySelectorAll(".article-card");

if (searchInput && articleCards.length > 0) {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();

    articleCards.forEach(card => {
      const title = (card.dataset.title || "").toLowerCase();
      card.style.display = title.includes(query) ? "" : "none";
    });
  });
}

// =========================
// TOPIC FILTER
// =========================
const topicButtons = document.querySelectorAll(".topic-btn");

if (topicButtons.length > 0 && articleCards.length > 0) {
  topicButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      topicButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const topic = btn.dataset.topic;

      articleCards.forEach(card => {
        const cardTopic = card.dataset.topic;

        card.style.display =
          topic === "All" || cardTopic === topic ? "" : "none";
      });
    });
  });
}

// =========================
// DARK MODE TOGGLE
// =========================
const themeToggle = document.getElementById("themeToggle");

function applyTheme(isDark) {
  document.body.classList.toggle("dark", isDark);

  if (themeToggle) {
    themeToggle.textContent = isDark ? "☀️" : "🌙";
  }

  localStorage.setItem("theme", isDark ? "dark" : "light");
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isDark = !document.body.classList.contains("dark");
    applyTheme(isDark);
  });
}

// load saved theme on every page
if (localStorage.getItem("theme") === "dark") {
  applyTheme(true);
}
