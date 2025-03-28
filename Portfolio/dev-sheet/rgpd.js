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
