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
