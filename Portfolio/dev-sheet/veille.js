// Mode nuit
const toggleButton = document.getElementById("toggleNightMode");
const icon = toggleButton.querySelector(".icon");

if (localStorage.getItem("nightMode") === "enabled") {
  document.body.classList.add("night-mode");
  icon.textContent = "🌙";
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("nightMode", "enabled");
    icon.textContent = "🌙";
  } else {
    localStorage.setItem("nightMode", "disabled");
    icon.textContent = "🌞";
  }
});

// Trie des articles
document.getElementById("sortByDate").addEventListener("click", function () {
  sortArticles("date");
});

document.getElementById("sortByNote").addEventListener("click", function () {
  sortArticles("note");
});

function sortArticles(criteria) {
  const articlesContainer = document.querySelector(".articles-container");
  const articles = Array.from(articlesContainer.querySelectorAll(".article"));

  articles.sort((a, b) => {
    const aValue = a.dataset[criteria];
    const bValue = b.dataset[criteria];

    if (criteria === "date") {
      return new Date(bValue) - new Date(aValue); // Tri décroissant pour les dates
    } else if (criteria === "note") {
      return bValue - aValue;
    }
  });

  articles.forEach((article) => articlesContainer.appendChild(article));
}

// Gestion des boutons Voir Détails et Aller à l'Article
document.addEventListener("DOMContentLoaded", function () {
  // Gestion des boutons "Voir Détails"
  document.querySelectorAll(".toggle-detail").forEach((button) => {
    button.addEventListener("click", function () {
      // Trouve le parent article
      const article = this.closest(".article");
      // Trouve le paragraphe de détails dans cet article
      const articleDetail = article.querySelector(".article-detail");

      // Bascule l'affichage
      if (
        articleDetail.style.display === "none" ||
        articleDetail.style.display === ""
      ) {
        articleDetail.style.display = "block";
        this.textContent = "Masquer Détails";
      } else {
        articleDetail.style.display = "none";
        this.textContent = "Voir Détails";
      }
    });
  });

  // Gestion des boutons "Aller à l'Article"
  document.querySelectorAll(".view-link").forEach((button) => {
    button.addEventListener("click", function () {
      const url = this.getAttribute("data-url");
      if (url) {
        window.open(url, "_blank");
      }
    });
  });
});

// Ajout de la gestion de la modale de contact
document.addEventListener("DOMContentLoaded", () => {
  const contactModal = document.getElementById("contactModal");
  const openContactModalBtn = document.getElementById("openContactModal");
  const closeContactModalBtn = contactModal.querySelector(".close");

  // Ouvrir la modale
  openContactModalBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
  });

  // Fermer la modale en cliquant sur le bouton de fermeture
  closeContactModalBtn.addEventListener("click", () => {
    contactModal.style.display = "none";
  });

  // Fermer la modale en cliquant en dehors
  window.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      contactModal.style.display = "none";
    }
  });
});

// Toggle Méthodologie de veille
document.addEventListener("DOMContentLoaded", function() {
  const toggleMethodologyBtn = document.getElementById("toggleMethodology");
  const methodologyContent = document.querySelector(".methodology-content");
  
  if (toggleMethodologyBtn) {
    toggleMethodologyBtn.addEventListener("click", function() {
      this.classList.toggle("active");
      
      if (methodologyContent.style.display === "none" || methodologyContent.style.display === "") {
        methodologyContent.style.display = "block";
        this.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up");
      } else {
        methodologyContent.style.display = "none";
        this.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down");
      }
    });
  }

  // Filtrage par tags
  const tagButtons = document.querySelectorAll(".tag-btn");
  
  tagButtons.forEach(button => {
    button.addEventListener("click", function() {
      // Activer le bouton cliqué et désactiver les autres
      tagButtons.forEach(btn => btn.classList.remove("active"));
      this.classList.add("active");
      
      const selectedTag = this.getAttribute("data-tag");
      filterArticlesByTag(selectedTag);
    });
  });

  // Fonction de filtrage par tag
  function filterArticlesByTag(tag) {
    const articles = document.querySelectorAll(".article");
    
    articles.forEach(article => {
      if (tag === "all" || article.getAttribute("data-tags").includes(tag)) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    });
  }

  // Recherche d'articles
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("articleSearch");
  
  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", searchArticles);
    searchInput.addEventListener("keyup", function(e) {
      if (e.key === "Enter") {
        searchArticles();
      }
    });
  }

  // Fonction de recherche
  function searchArticles() {
    const searchTerm = searchInput.value.toLowerCase();
    const articles = document.querySelectorAll(".article");
    
    articles.forEach(article => {
      const title = article.querySelector("h3").textContent.toLowerCase();
      const content = article.querySelector(".article-detail").textContent.toLowerCase();
      
      if (title.includes(searchTerm) || content.includes(searchTerm)) {
        article.style.display = "flex";
      } else {
        article.style.display = "none";
      }
    });
  }

  // Mise à jour de la fonction de tri pour activer/désactiver les boutons
  document.getElementById("sortByDate").addEventListener("click", function() {
    document.getElementById("sortByDate").classList.add("active");
    document.getElementById("sortByNote").classList.remove("active");
    sortArticles("date");
  });

  document.getElementById("sortByNote").addEventListener("click", function() {
    document.getElementById("sortByDate").classList.remove("active");
    document.getElementById("sortByNote").classList.add("active");
    sortArticles("note");
  });
});