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

// Nouvelle fonction pour gérer l'affichage des documents
function setupDocumentSections() {
  // Liste des documents par projet
  const projectDocuments = {
    // Les4Fantastiques - Projet École 1
    modal1: [
      {
        title: "README - API Marvel",
        description: "Documentation technique du projet API Marvel",
        type: "markdown",
        url: "Portfolio/doc/README.md",
      },
      {
        title: "Cahier des charges - API Marvel",
        description: "Spécifications et exigences du projet",
        type: "pdf",
        url: "Portfolio/doc/Cahier des charges.pdf",
      },
      {
        title: "Charte Graphique - API Marvel",
        description: "Guide de style et éléments graphiques",
        type: "pdf",
        url: "Portfolio/doc/Charte Graphique.pdf",
      },
      {
        title: "Base de données - API Marvel",
        description: "Script SQL de la base de données",
        type: "sql",
        url: "Portfolio/doc/les4fantastiques.sql",
      },
      {
        title: "Diagramme BDD - API Marvel",
        description: "Structure visuelle de la base de données",
        type: "image",
        url: "Portfolio/doc/Diagramme BDD.png",
      },
    ],

    // GhostTrack - Projet École 2
    modal2: [
      {
        title: "Maquette - Projet AlerTrain",
        description: "Prototype visuel de l'interface utilisateur",
        type: "image",
        url: "Portfolio/doc/Maquette (1).png",
      },
    ],

    // Macro EXCEL - Projet Entreprise 1
    modal3: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // API Amazon - Projet Entreprise 2
    modal4: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // API POM - Projet Entreprise 3
    modal5: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // JO Ticket - Projet École 3
    modal6: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // (Non utilisé actuellement)
    modal7: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // gestEPI - Projet École 4
    modal8: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // POM SAG - Projet Entreprise 4
    modal9: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // Vérification numéro de traçabilité - Projet Entreprise 5
    modal10: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],

    // Ajoutez d'autres projets selon vos besoins
  };

  // Mot de passe pour accéder aux documents (en pratique, cela devrait être géré côté serveur)
  const password = "Zazou2005*";

  // Pour chaque modale de projet
  document.querySelectorAll(".modal").forEach((modal) => {
    const modalId = modal.id;

    // Sélectionner la section de documents dans cette modale
    const docsSection = modal.querySelector(".documents-section");
    if (!docsSection) return;

    // Créer la nouvelle structure HTML
    docsSection.innerHTML = `
      <h3>Accéder aux Documents</h3>
      <p>Veuillez entrer le mot de passe pour accéder aux documents liés à ce projet.</p>
      
      <div class="password-container">
        <input type="password" class="password-input" placeholder="Mot de passe" />
        <button class="validate-btn">Valider</button>
      </div>
      <div class="error-message">Mot de passe incorrect</div>
      
      <div class="docs-container"></div>
    `;

    // Si des documents sont définis pour ce projet
    if (projectDocuments[modalId]) {
      const docsContainer = docsSection.querySelector(".docs-container");
      const errorMessage = docsSection.querySelector(".error-message");
      const passwordInput = docsSection.querySelector(".password-input");
      const validateBtn = docsSection.querySelector(".validate-btn");

      // Afficher les documents en fonction du type
      function getIconForDocType(type) {
        switch (type) {
          case "pdf":
            return "fa-file-pdf";
          case "markdown":
            return "fa-file-alt";
          case "image":
            return "fa-file-image";
          case "sql":
            return "fa-database";
          default:
            return "fa-file";
        }
      }

      // Générer les cartes de documents
      function populateDocuments() {
        docsContainer.innerHTML = "";
        projectDocuments[modalId].forEach((doc) => {
          const cardElement = document.createElement("div");
          cardElement.className = "doc-card";
          cardElement.innerHTML = `
      <div class="doc-icon">
        <i class="fas ${getIconForDocType(doc.type)}"></i>
      </div>
      <div class="doc-info">
        <div class="doc-title">${doc.title}</div>
        <div class="doc-description">${doc.description}</div>
      </div>
      <a href="${doc.url}" target="_blank" class="doc-download">
        <i class="fas fa-download"></i> Télécharger
      </a>
    `;

          // Ajouter un événement de clic pour prévisualiser le document
          cardElement.addEventListener("click", function (e) {
            // Ne pas déclencher si le clic est sur le bouton de téléchargement
            if (e.target.closest(".doc-download")) return;

            // Prévisualiser le document en passant la référence au modal actif
            previewDocument(doc, modal); // Passer le modal actif
          });

          docsContainer.appendChild(cardElement);
        });
      }

      // Gérer la validation du mot de passe
      validateBtn.addEventListener("click", () => {
        if (passwordInput.value === password) {
          docsContainer.style.display = "block";
          errorMessage.style.display = "none";
          populateDocuments();
        } else {
          errorMessage.style.display = "block";
          docsContainer.style.display = "none";
        }
      });

      // Permettre la validation en appuyant sur Entrée
      passwordInput.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
          validateBtn.click();
        }
      });
    }
  });

  // Configuration du prévisualiseur de documents
  setupDocumentPreview();
}

// Configuration du prévisualiseur de documents
function setupDocumentPreview() {
  const previewContainer = document.querySelector(
    ".document-preview-container"
  );
  const previewOverlay = document.querySelector(".preview-overlay");
  const previewFrame = document.querySelector(".preview-frame");
  const previewTitle = document.querySelector(".preview-title");
  const previewDownload = document.getElementById("preview-download");
  const previewClose = document.getElementById("preview-close");
  const previewLoading = document.querySelector(".preview-loading");
  const previewError = document.querySelector(".preview-error");

  let currentDocumentUrl = "";
  let currentModal = null;

  // Fonction pour prévisualiser un document
  window.previewDocument = function (doc, modalElement) {
    // Sauvegarde du modal actif
    currentModal = modalElement;

    // Ajout de la classe pour indiquer que le modal a une prévisualisation à côté
    currentModal.classList.add("with-preview");

    // Mise à jour du titre
    previewTitle.textContent = doc.title;

    // Mise à jour du lien de téléchargement
    previewDownload.onclick = function () {
      window.open(doc.url, "_blank");
    };

    // Afficher le chargement
    previewLoading.style.display = "flex";
    previewError.style.display = "none";
    previewFrame.style.display = "none";

    // Sauvegarder l'URL du document actuel
    currentDocumentUrl = doc.url;

    // Déterminer comment afficher le document en fonction de son type
    const fileExtension = doc.url.split(".").pop().toLowerCase();

    if (fileExtension === "pdf" || doc.type === "pdf") {
      // Pour les PDF
      previewFrame.src = doc.url;
      previewFrame.onload = function () {
        previewLoading.style.display = "none";
        previewFrame.style.display = "block";
      };
      previewFrame.onerror = showPreviewError;
    } else if (
      fileExtension === "png" ||
      fileExtension === "jpg" ||
      fileExtension === "jpeg" ||
      fileExtension === "gif" ||
      doc.type === "image"
    ) {
      // Pour les images
      previewFrame.style.display = "none";
      previewLoading.style.display = "none";

      const imgContainer = document.createElement("div");
      imgContainer.style.width = "100%";
      imgContainer.style.height = "100%";
      imgContainer.style.display = "flex";
      imgContainer.style.alignItems = "center";
      imgContainer.style.justifyContent = "center";
      imgContainer.style.padding = "20px";
      imgContainer.style.overflow = "auto";

      const img = document.createElement("img");
      img.src = doc.url;
      img.style.maxWidth = "100%";
      img.style.maxHeight = "calc(100vh - 120px)";
      img.style.objectFit = "contain";
      img.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.2)";

      imgContainer.appendChild(img);

      const previewContent = document.querySelector(".preview-content");
      previewContent.innerHTML = "";
      previewContent.appendChild(imgContainer);

      img.onerror = showPreviewError;
    } else if (fileExtension === "md" || doc.type === "markdown") {
      // Pour les fichiers Markdown
      fetch(doc.url)
        .then((response) => response.text())
        .then((text) => {
          previewFrame.style.display = "none";
          previewLoading.style.display = "none";

          const textContainer = document.createElement("div");
          textContainer.style.padding = "20px";
          textContainer.style.width = "100%";
          textContainer.style.height = "100%";
          textContainer.style.overflow = "auto";
          textContainer.style.whiteSpace = "pre-wrap";
          textContainer.style.fontFamily = "monospace";
          textContainer.style.lineHeight = "1.5";
          textContainer.textContent = text;

          const previewContent = document.querySelector(".preview-content");
          previewContent.innerHTML = "";
          previewContent.appendChild(textContainer);
        })
        .catch(showPreviewError);
    } else if (fileExtension === "sql" || doc.type === "sql") {
      // Pour les fichiers SQL
      fetch(doc.url)
        .then((response) => response.text())
        .then((text) => {
          previewFrame.style.display = "none";
          previewLoading.style.display = "none";

          const textContainer = document.createElement("div");
          textContainer.style.padding = "20px";
          textContainer.style.width = "100%";
          textContainer.style.height = "100%";
          textContainer.style.overflow = "auto";
          textContainer.style.whiteSpace = "pre-wrap";
          textContainer.style.fontFamily = "monospace";
          textContainer.style.lineHeight = "1.5";

          // Coloration syntaxique basique pour SQL
          const coloredText = text
            .replace(
              /(SELECT|INSERT|UPDATE|DELETE|CREATE|TABLE|FROM|WHERE|AND|OR|JOIN|ON|AS|NULL|NOT|PRIMARY|KEY|FOREIGN|REFERENCES|INT|VARCHAR|TEXT|DATE|UNIQUE|INDEX)/gi,
              '<span style="color: #0066cc; font-weight: bold;">$1</span>'
            )
            .replace(/('.*?')/g, '<span style="color: #009900;">$1</span>')
            .replace(/(--.*)/g, '<span style="color: #777777;">$1</span>');

          textContainer.innerHTML = coloredText;

          const previewContent = document.querySelector(".preview-content");
          previewContent.innerHTML = "";
          previewContent.appendChild(textContainer);
        })
        .catch(showPreviewError);
    } else {
      // Pour les autres types de fichiers
      showPreviewError();
    }

    // Afficher le conteneur de prévisualisation (pas besoin d'overlay dans ce cas)
    previewContainer.classList.add("active");

    // Modifier l'apparence du modal pour laisser de la place à la prévisualisation
    // Ceci se fait via les classes CSS
  };

  // Fonction pour afficher une erreur de prévisualisation
  function showPreviewError() {
    previewLoading.style.display = "none";
    previewFrame.style.display = "none";
    previewError.style.display = "block";
  }

  // Fermer la prévisualisation
  previewClose.addEventListener("click", closePreview);

  function closePreview() {
    previewContainer.classList.remove("active");

    // Remettre le modal à sa taille normale
    if (currentModal) {
      currentModal.classList.remove("with-preview");
    }

    // Réinitialiser la prévisualisation après une courte transition
    setTimeout(() => {
      previewFrame.src = "about:blank";
      previewLoading.style.display = "none";
      previewError.style.display = "none";

      // Remettre l'iframe à sa place
      const previewContent = document.querySelector(".preview-content");
      previewContent.innerHTML = "";
      previewContent.appendChild(previewFrame);
      previewContent.appendChild(previewLoading);
      previewContent.appendChild(previewError);

      currentModal = null;
    }, 400);
  }

  // Fermer la prévisualisation si l'utilisateur ferme le modal
  document.querySelectorAll(".modal .close").forEach((closeBtn) => {
    const originalClick = closeBtn.onclick;

    closeBtn.onclick = function (e) {
      if (previewContainer.classList.contains("active")) {
        closePreview();
      }

      if (originalClick) {
        originalClick.call(this, e);
      }
    };
  });
}

// Appeler cette fonction lorsque le document est chargé
document.addEventListener("DOMContentLoaded", function () {
  // Garder vos fonctionnalités existantes

  // Ajouter la nouvelle fonctionnalité de documents
  setupDocumentSections();
});
