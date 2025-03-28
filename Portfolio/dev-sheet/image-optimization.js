// Image optimization pour SEO
document.addEventListener("DOMContentLoaded", function () {
  // Chargement différé des images
  document.querySelectorAll("img").forEach((img) => {
    // Mémorise l'URL originale
    const src = img.getAttribute("src");

    // Utilise une image de faible qualité ou un placeholder
    if (!img.hasAttribute("data-src")) {
      img.setAttribute("data-src", src);
      // Utiliser une petite image de préchargement (1x1 px transparent)
      img.setAttribute(
        "src",
        "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
      );

      // S'assurer que toutes les images ont un attribut alt
      if (!img.hasAttribute("alt") || img.getAttribute("alt") === "") {
        const imgPath = src.split("/").pop();
        img.setAttribute(
          "alt",
          "Image: " + imgPath.replace(/[-_]/g, " ").replace(/\.\w+$/, "")
        );
      }
    }
  });

  // Observer pour charger les images au scroll
  const imgObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.hasAttribute("data-src")) {
            img.setAttribute("src", img.getAttribute("data-src"));
            img.removeAttribute("data-src");
            observer.unobserve(img);
          }
        }
      });
    },
    { rootMargin: "50px" }
  );

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imgObserver.observe(img);
  });
});
