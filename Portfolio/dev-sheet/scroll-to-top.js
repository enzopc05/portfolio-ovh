// Gestion du bouton de retour en haut de page
document.addEventListener("DOMContentLoaded", function () {
  // Création du bouton
  const scrollButton = document.createElement("div");
  scrollButton.className = "scroll-to-top";
  scrollButton.innerHTML = '<i class="fas fa-arrow-up"></i>';
  document.body.appendChild(scrollButton);

  // Variable pour stocker la position de défilement précédente
  let lastScrollTop = 0;

  // Afficher/cacher le bouton en fonction du défilement
  window.addEventListener("scroll", function () {
    const scrollThreshold = 300;
    const currentScroll = window.scrollY;

    if (currentScroll > scrollThreshold) {
      scrollButton.classList.add("visible");

      // Animation subtile selon la direction du défilement
      if (currentScroll > lastScrollTop) {
        // Défilement vers le bas
        scrollButton.style.transform = "translateY(0) rotate(0deg)";
      } else {
        // Défilement vers le haut
        scrollButton.style.transform = "translateY(0) rotate(-180deg)";
      }
    } else {
      scrollButton.classList.remove("visible");
    }

    lastScrollTop = currentScroll;
  });

  // Action de retour en haut de page avec défilement fluide
  scrollButton.addEventListener("click", function () {
    // Défilement fluide vers le haut
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
