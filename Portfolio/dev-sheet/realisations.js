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
        title: "Documentation d'utilisation",
        description: "",
        type: "pdf",
        url: "Portfolio/doc/amazon_doc.pdf",
      },
    ],

    // API POM - Projet Entreprise 3
    modal5: [
      {
        title: "Convention GIT",
        description:
          "Convention de commit git pour ordonner le projet entre tous les participants",
        type: "markdown",
        url: "Portfolio/doc/Git-convention.md",
      },
      {
        title: "Schéma Projet POM",
        description: "arborescence du projet",
        type: "png",
        url: "Portfolio/doc/schémaProjetPOM.png",
      },
      {
        title: "Base de donnée de test du projet",
        description:
          "Base de donnée utilisé pour les tests avant l'entré en production",
        type: "sql",
        url: "Portfolio/doc/pomBDD.sql",
      },
      {
        title: "README - POM API",
        description: "",
        type: "markdown",
        url: "Portfolio/doc/README_POM-API.md",
      },
    ],

    // (Non utilisé actuellement)
    modal6: [
      {
        title: "",
        description: "",
        type: "",
        url: "",
      },
    ],
    // JO Ticket - Projet École 3
    modal7: [
      {
        title: "README - PROJET JO",
        description: "",
        type: "markdown",
        url: "Portfolio/doc/README_JO.md",
      },
      {
        title: "BDD - PROJET JO",
        description: "",
        type: "sql",
        url: "Portfolio/doc/data_jo.sql",
      },
      {
        title: "Schéma - PROJET JO",
        description: "",
        type: "png",
        url: "Portfolio/doc/Schema_Projet_JO.png",
      },
    ],

    // gestEPI - Projet École 4
modal8: [
  {
    title: "Documentation API - GestEPI",
    description: "Documentation complète des endpoints de l'API REST de GestEPI",
    type: "markdown",
    url: "Portfolio/doc/API.md"
  },
  {
    title: "Structure de base de données - GestEPI",
    description: "Script SQL de création de la base de données",
    type: "sql",
    url: "Portfolio/doc/bdd_gestEPI.sql"
  },
  {
    title: "Guide d'installation - GestEPI",
    description: "Instructions détaillées pour installer et configurer l'application",
    type: "markdown",
    url: "Portfolio/doc/INSTALLATION.md"
  },
  {
    title: "README - GestEPI",
    description: "Présentation générale du projet et de ses fonctionnalités",
    type: "markdown",
    url: "Portfolio/doc/README_gestEPI.md"
  },
  {
    title: "Manuel d'utilisation - GestEPI",
    description: "Guide complet pour l'utilisation de l'application",
    type: "markdown",
    url: "Portfolio/doc/UTILISATION.md"
  },
  {
    title: "Schéma de base de données - GestEPI",
    description: "Diagramme des relations entre les tables",
    type: "image",
    url: "Portfolio/doc/schema_bdd_gestEPI.png"
  }
],

    // POM SAG - Projet Entreprise 4
    modal9: [
      {
        title: "README - POM SAG",
        description: "",
        type: "markdown",
        url: "Portfolio/doc/README_POM-SAG.md",
      },
      {
        title: "Schéma Projet POM",
        description: "arborescence du projet",
        type: "png",
        url: "Portfolio/doc/schémaProjetPOM.png",
      },
    ],

    // Vérification numéro de traçabilité - Projet Entreprise 5
    modal10: [
      {
        title: "README - Vérification traçabilité",
        description: "",
        type: "markdown",
        url: "Portfolio/doc/README_VerifTraca.md",
      },
      {
        title: "Documentation d'utilisation",
        description: "",
        type: "pdf",
        url: "Portfolio/doc/EURO-XXX-IN-00X-A_Verification_traca_exo.pdf",
      },
    ],
    // Dressing App - Projet Personnel
    modal11: [
      {
        title: "Documentation - Dressing App",
        description: "Guide développeur et manuel utilisateur",
        type: "markdown",
        url: "Portfolio/doc/dressing_app_readme.md",
      },
      {
        title: "Captures d'écran de l'application",
        description: "Interface et fonctionnalités principales",
        type: "image",
        url: "Portfolio/doc/dressing_app_screenshots.png",
      },
      {
        title: "Architecture technique",
        description: "Structure de l'application et flux de données",
        type: "image",
        url: "Portfolio/doc/dressing_app_architecture.png",
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

    // Ajuster le z-index pour s'assurer que le prévisualiseur est au-dessus de la modale
    const previewContainer = document.querySelector(
      ".document-preview-container"
    );
    previewContainer.style.zIndex = "2000"; // Valeur plus élevée que celle de la modale

    // Ajout de la classe pour indiquer que le modal a une prévisualisation à côté
    currentModal.classList.add("with-preview");

    // Mise à jour du titre
    const previewTitle = document.querySelector(".preview-title");
    previewTitle.textContent = doc.title;

    // Mise à jour du lien de téléchargement
    const previewDownload = document.getElementById("preview-download");
    previewDownload.onclick = function () {
      window.open(doc.url, "_blank");
    };

    // Éléments de prévisualisation
    const previewFrame = document.querySelector(".preview-frame");
    const previewLoading = document.querySelector(".preview-loading");
    const previewError = document.querySelector(".preview-error");
    const previewContent = document.querySelector(".preview-content");

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

      previewContent.innerHTML = "";
      previewContent.appendChild(imgContainer);

      img.onerror = showPreviewError;
    } else if (fileExtension === "md" || doc.type === "markdown") {
      // Pour les fichiers Markdown avec Marked.js
      fetch(doc.url)
        .then((response) => response.text())
        .then((text) => {
          previewFrame.style.display = "none";
          previewLoading.style.display = "none";

          const textContainer = document.createElement("div");
          textContainer.className = "markdown-content";
          textContainer.style.padding = "20px";
          textContainer.style.width = "100%";
          textContainer.style.height = "100%";
          textContainer.style.overflow = "auto";
          textContainer.style.backgroundColor = "#fff";

          // Convertir le Markdown en HTML avec Marked
          if (typeof marked !== "undefined") {
            textContainer.innerHTML = marked.parse(text);
          } else {
            // Fallback si Marked n'est pas disponible
            textContainer.style.whiteSpace = "pre-wrap";
            textContainer.style.fontFamily = "monospace";
            textContainer.style.lineHeight = "1.5";
            textContainer.textContent = text;
          }

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
          textContainer.className = "sql-content";
          textContainer.style.padding = "20px";
          textContainer.style.width = "100%";
          textContainer.style.height = "100%";
          textContainer.style.overflow = "auto";
          textContainer.style.whiteSpace = "pre-wrap";
          textContainer.style.fontFamily =
            "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace";
          textContainer.style.lineHeight = "1.5";
          textContainer.style.backgroundColor = "#f8f8f8";
          textContainer.style.margin = "0";

          // Coloration syntaxique basique pour SQL
          const coloredText = text
            .replace(
              /(SELECT|INSERT|UPDATE|DELETE|CREATE|TABLE|FROM|WHERE|AND|OR|JOIN|ON|AS|NULL|NOT|PRIMARY|KEY|FOREIGN|REFERENCES|INT|VARCHAR|TEXT|DATE|UNIQUE|INDEX|ENGINE|DEFAULT|COLLATE|CHARSET|VALUES|INTO)/gi,
              '<span style="color: #0066cc; font-weight: bold;">$1</span>'
            )
            .replace(/('.*?')/g, '<span style="color: #009900;">$1</span>')
            .replace(/(--.*)/g, '<span style="color: #777777;">$1</span>')
            .replace(/(\d+)/g, '<span style="color: #FF5722;">$1</span>'); // Coloration des nombres

          textContainer.innerHTML = coloredText;

          previewContent.innerHTML = "";
          previewContent.appendChild(textContainer);
        })
        .catch(showPreviewError);
    } else {
      // Pour les autres types de fichiers
      showPreviewError();
    }

    // Afficher le conteneur de prévisualisation
    previewContainer.classList.add("active");
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

// Système de filtrage des projets avec animations
document.addEventListener("DOMContentLoaded", function () {
  const techFilter = document.getElementById("techFilter");
  const typeFilter = document.getElementById("typeFilter");
  const dateFilter = document.getElementById("dateFilter");
  const resetFiltersBtn = document.getElementById("resetFilters");
  const projects = document.querySelectorAll(".project");

  // Animation d'entrée initiale pour tous les projets
  projects.forEach((project, index) => {
    setTimeout(() => {
      project.classList.add("fade-in");
    }, index * 100); // Délai progressif pour chaque projet
  });

  // Fonction pour appliquer les filtres
  function applyFilters() {
    const selectedTech = techFilter.value;
    const selectedType = typeFilter.value;
    const selectedDate = dateFilter.value;

    const visibleProjects = []; // Projets qui correspondent aux filtres

    // Première étape : déterminer quels projets doivent être affichés/masqués
    projects.forEach((project) => {
      const projectTechs = project.getAttribute("data-tech") || "";
      const projectType = project.getAttribute("data-type") || "";
      const projectDate = project.getAttribute("data-date") || "";

      let techMatch =
        selectedTech === "all" || projectTechs.includes(selectedTech);
      let typeMatch = selectedType === "all" || projectType === selectedType;
      let dateMatch = true; // Par défaut, on suppose que la date correspond

      // Vérification supplémentaire pour le filtre de date
      if (selectedDate !== "all") {
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1; // Les mois commencent à 0

        // Traitement des dates au format YYYY-MM
        const [projectYear, projectMonth] = (projectDate || "")
          .split("-")
          .map(Number);

        // Définir ce qui est considéré comme "récent" (par exemple, les 6 derniers mois)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const sixMonthsAgoYear = sixMonthsAgo.getFullYear();
        const sixMonthsAgoMonth = sixMonthsAgo.getMonth() + 1;

        if (selectedDate === "recent") {
          // Vérifier si la date du projet est plus récente que la limite (6 mois)
          dateMatch =
            projectYear > sixMonthsAgoYear ||
            (projectYear === sixMonthsAgoYear &&
              projectMonth >= sixMonthsAgoMonth);
        } else if (selectedDate === "old") {
          // Vérifier si la date du projet est plus ancienne que la limite (6 mois)
          dateMatch =
            projectYear < sixMonthsAgoYear ||
            (projectYear === sixMonthsAgoYear &&
              projectMonth < sixMonthsAgoMonth);
        }
      }

      if (techMatch && typeMatch && dateMatch) {
        visibleProjects.push(project);
      } else {
        // Animer la disparition
        project.classList.add("fade-out");
        project.classList.remove("fade-in", "bounce");
      }
    });

    // Tri des projets visibles par date
    visibleProjects.sort((a, b) => {
      const dateA = a.getAttribute("data-date") || "";
      const dateB = b.getAttribute("data-date") || "";

      if (selectedDate === "recent" || selectedDate === "all") {
        return dateB.localeCompare(dateA); // Du plus récent au plus ancien par défaut
      } else {
        return dateA.localeCompare(dateB); // Du plus ancien au plus récent
      }
    });

    // Deuxième étape : après la disparition, reconfigurer l'affichage
    setTimeout(() => {
      // Le reste de votre code pour la deuxième étape reste identique...
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
  }

  // Fonction pour réinitialiser tous les filtres
  function resetFilters() {
    techFilter.value = "all";
    typeFilter.value = "all";
    dateFilter.value = "all";

    projects.forEach((project) => {
      project.classList.remove("fade-out");
      project.classList.add("fade-in");
      project.style.display = "flex";
    });

    arrangeProjectsGrid();
  }

  // Fonction pour réarranger la grille des projets
  function arrangeProjectsGrid() {
    const sections = document.querySelectorAll(
      "section[id^='realisations-'], section[id^='projets-']"
    );

    // Vérifier si des projets sont visibles
    let totalVisibleProjects = 0;

    sections.forEach((section) => {
      const container = section.querySelector(".projects-container");
      const visibleProjects = Array.from(
        container.querySelectorAll(".project")
      ).filter((p) => p.style.display !== "none");

      totalVisibleProjects += visibleProjects.length;

      // Afficher ou masquer les sections en fonction de si elles ont des projets visibles
      if (visibleProjects.length === 0) {
        section.style.display = "none";
      } else {
        section.style.display = "block";

        // Réorganiser les projets visibles dans leur conteneur selon leur ordre dans le DOM
        if (dateFilter.value !== "all") {
          // Trié par date, donc on remet les projets dans le conteneur dans le bon ordre
          visibleProjects.forEach((project) => {
            container.appendChild(project);
          });
        }
      }
    });

    // Vérifier si aucun projet n'est visible
    if (totalVisibleProjects === 0) {
      // Créer ou afficher un message "Aucun résultat"
      let noResultsMsg = document.querySelector(".no-results-message");

      if (!noResultsMsg) {
        noResultsMsg = document.createElement("div");
        noResultsMsg.className = "no-results-message";
        noResultsMsg.innerHTML =
          "<p>Aucun projet ne correspond à ces critères de filtrage.</p>";
        document.querySelector("main .container").appendChild(noResultsMsg);
      } else {
        noResultsMsg.style.display = "block";
      }
    } else {
      // Cacher le message "Aucun résultat" s'il existe
      const noResultsMsg = document.querySelector(".no-results-message");
      if (noResultsMsg) {
        noResultsMsg.style.display = "none";
      }
    }
  }

  // Ajouter les listeners pour les changements de filtres
  techFilter.addEventListener("change", applyFilters);
  typeFilter.addEventListener("change", applyFilters);
  dateFilter.addEventListener("change", applyFilters);
  resetFiltersBtn.addEventListener("click", resetFilters);
});

// Fonction pour récupérer les paramètres de l'URL
function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Appliquer le filtre de l'URL au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const techFilter = document.getElementById('techFilter');
  const tech = getUrlParameter('tech');
  
  if (tech && techFilter) {
    // Vérifier si la valeur existe dans les options du filtre
    for(let i = 0; i < techFilter.options.length; i++) {
      if (techFilter.options[i].value === tech.toLowerCase()) {
        techFilter.value = tech.toLowerCase();
        // Déclencher l'événement change pour appliquer le filtre
        const event = new Event('change');
        techFilter.dispatchEvent(event);
        break;
      }
    }
  }
});
