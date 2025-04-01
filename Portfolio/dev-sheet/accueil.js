// Fonction pour ouvrir les modales
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Fonction pour fermer les modales
function closeModal(modal) {
  modal.style.display = "none";
}

// Ajout des événements de clic sur les cases de la frise
document.getElementById("bts-tl").onclick = function () {
  openModal("modal-bts");
};
document.getElementById("remax-tl").onclick = function () {
  openModal("modal-remax");
};
document.getElementById("eurodislog-tl").onclick = function () {
  openModal("modal-eurodislog");
};
document.getElementById("bac-tl").onclick = function () {
  openModal("modal-bac");
};

// Fermeture des modales lorsqu'on clique sur le bouton "close"
document.querySelectorAll(".close").forEach((btn) => {
  btn.onclick = function () {
    const modal = this.closest(".modal");
    closeModal(modal);
  };
});

// Fermeture de la modale lorsqu'on clique en dehors du contenu
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    closeModal(event.target);
  }
};

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


// Redirection vers la page de réalisations avec filtre
document.addEventListener('DOMContentLoaded', function() {
  // Sélectionner toutes les compétences cliquables
  const skillItems = document.querySelectorAll('#skills .skill, #tools .tool, #frameworks .skill');
  
  // Ajouter un écouteur de clic à chaque compétence
  skillItems.forEach(skill => {
    // Ajouter la classe pour rendre l'élément cliquable visuellement
    skill.classList.add('clickable-skill');
    
    // Ajouter l'écouteur de clic
    skill.addEventListener('click', function() {
      // Récupérer la technologie à partir de l'attribut data-tech ou du texte
      const tech = this.getAttribute('data-tech') || this.querySelector('p').innerText.toLowerCase();
      
      // Rediriger vers la page de réalisations avec le filtre de technologie
      window.location.href = `realisations.html?tech=${tech}`;
    });
  });
});