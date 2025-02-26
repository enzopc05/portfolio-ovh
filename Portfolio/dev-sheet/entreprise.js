// Section : Gestion du contenu en fonction du logo sélectionné
const logoRemax = document.getElementById("logo-remax");
const logoEurodislog = document.getElementById("logo-eurodislog");
const remaxContent = document.getElementById("remax-content");
const eurodislogContent = document.getElementById("eurodislog-content");

function switchContent(contentToShow) {
  remaxContent.style.display = "none";
  eurodislogContent.style.display = "none";

  contentToShow.style.display = "block";
}

logoRemax.addEventListener("click", () => {
  switchContent(remaxContent);
});

logoEurodislog.addEventListener("click", () => {
  switchContent(eurodislogContent);
});

document.addEventListener("DOMContentLoaded", () => {
  remaxContent.style.display = "block";
  eurodislogContent.style.display = "none";
});

// Section : Gestion du mode nuit
const toggleButton = document.getElementById("toggleNightMode");
const icon = toggleButton.querySelector(".icon");

if (localStorage.getItem("nightMode") === "enabled") {
  document.body.classList.add("night-mode");
  icon.textContent = "🌙"; // Icône lune
}

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("night-mode");

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
