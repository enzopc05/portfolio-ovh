// Sélectionner tous les boutons "En savoir plus"
const buttons = document.querySelectorAll(".btn");

// Sélectionner toutes les modales
const modals = document.querySelectorAll(".modal");

// Sélectionner toutes les icônes de fermeture
const closeButtons = document.querySelectorAll(".close");

// Fonction pour ouvrir la modale
buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const modalId = this.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
  });
});

// Fonction pour fermer la modale en cliquant sur le bouton de fermeture
closeButtons.forEach((close) => {
  close.addEventListener("click", function () {
    this.parentElement.parentElement.style.display = "none";
  });
});

// Fermer la modale en cliquant à l'extérieur de la boîte modale
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

function validatePassword(inputId, docsId) {
  console.log(`Validating password for ${inputId}`);
  const password = document.getElementById(inputId).value;
  const docs = document.getElementById(docsId);
  if (password === "Zazou2005*") {
    console.log("Password correct");
    docs.style.display = "block";
  } else {
    console.log("Password incorrect");
    alert("Mot de passe incorrect !");
  }
}

// Sélectionner le bouton et l'icône
const toggleButton = document.getElementById("toggleNightMode");
const icon = toggleButton.querySelector(".icon");

// Vérifier si le mode nuit est activé dans le stockage local
if (localStorage.getItem("nightMode") === "enabled") {
  document.body.classList.add("night-mode");
  icon.textContent = "🌙"; // Icône lune
}

// Ajouter un gestionnaire d'événements pour le clic
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

  // Basculer entre les icônes soleil et lune
  if (document.body.classList.contains("night-mode")) {
    localStorage.setItem("nightMode", "enabled");
    icon.textContent = "🌙"; // Icône lune
  } else {
    localStorage.setItem("nightMode", "disabled");
    icon.textContent = "🌞"; // Icône soleil
  }
});

// Système de filtrage des projets avec animations
document.addEventListener("DOMContentLoaded", function () {
  const techSelect = document.getElementById("techFilter");
  const projects = document.querySelectorAll(".project");

  // Animation d'entrée initiale pour tous les projets
  projects.forEach((project, index) => {
    setTimeout(() => {
      project.classList.add("fade-in");
    }, index * 100); // Délai progressif pour chaque projet
  });

  techSelect.addEventListener("change", function () {
    const selectedTech = this.value;
    const visibleProjects = []; // Projets qui correspondent au filtre

    // Première étape : déterminer quels projets doivent être affichés/masqués
    projects.forEach((project) => {
      const projectTechs = project.getAttribute("data-tech") || "";

      if (selectedTech === "all" || projectTechs.includes(selectedTech)) {
        visibleProjects.push(project);
      } else {
        // Animer la disparition
        project.classList.add("fade-out");
        project.classList.remove("fade-in", "bounce");
      }
    });

    // Deuxième étape : après la disparition, reconfigurer l'affichage
    setTimeout(() => {
      projects.forEach((project) => {
        if (visibleProjects.includes(project)) {
          // Si le projet était déjà visible, faire un petit "bounce"
          if (!project.classList.contains("fade-out")) {
            project.classList.add("bounce");
          } else {
            // Sinon, faire apparaître le projet
            project.classList.remove("fade-out");
            project.classList.add("fade-in");
          }
          project.style.display = "flex";
        } else {
          // Cacher complètement après l'animation
          project.style.display = "none";
        }
      });

      // Réorganiser la disposition de la grille
      arrangeProjectsGrid();
    }, 400); // Attendre que l'animation de disparition soit complète
  });

  // Fonction pour réarranger la grille des projets
  function arrangeProjectsGrid() {
    const container = document.querySelector(".projects-container");
    const visibleProjects = Array.from(projects).filter(
      (p) => p.style.display !== "none"
    );

    // Réinitialiser les styles de la grille si nécessaire
    if (visibleProjects.length === 0) {
      container.innerHTML =
        '<p class="no-results">Aucun projet ne correspond à ce filtre.</p>';
    } else if (container.querySelector(".no-results")) {
      container.querySelector(".no-results").remove();
    }
  }
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
