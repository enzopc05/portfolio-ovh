// Système de gestion des langues
class LanguageManager {
  constructor() {
    this.currentLanguage = localStorage.getItem("language") || "fr";
    this.translations = {};
    this.initialized = false;
  }

  // Initialiser le gestionnaire de langues
  async init() {
    try {
      // Charger les traductions pour le français et l'anglais
      const frResponse = await fetch("../translations/fr.json");
      const enResponse = await fetch("../translations/en.json");

      if (!frResponse.ok || !enResponse.ok) {
        throw new Error("Impossible de charger les fichiers de traduction");
      }

      this.translations = {
        fr: await frResponse.json(),
        en: await enResponse.json(),
      };

      this.initialized = true;
      this.createLanguageButton();
      this.updatePageContent();
    } catch (error) {
      console.error("Erreur de chargement des traductions:", error);
    }
  }

  // Créer le bouton de changement de langue
  createLanguageButton() {
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "language-switcher";

    const button = document.createElement("button");
    button.setAttribute("id", "langSwitcher");
    button.setAttribute("aria-label", "Changer de langue");
    button.className = "language-button";

    // Définir le texte du bouton en fonction de la langue actuelle
    button.textContent = this.getTranslation("buttons.language");

    button.addEventListener("click", () => this.toggleLanguage());

    buttonContainer.appendChild(button);

    // Ajouter le bouton après le bouton du thème
    const themeContainer = document.querySelector(".theme-container");
    if (themeContainer) {
      themeContainer.parentNode.insertBefore(
        buttonContainer,
        themeContainer.nextSibling
      );
    } else {
      // Fallback si le conteneur de thème n'existe pas
      document.querySelector("header .container").appendChild(buttonContainer);
    }
  }

  // Basculer entre le français et l'anglais
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === "fr" ? "en" : "fr";
    localStorage.setItem("language", this.currentLanguage);

    // Mettre à jour le texte du bouton
    const button = document.getElementById("langSwitcher");
    if (button) {
      button.textContent = this.getTranslation("buttons.language");
    }

    this.updatePageContent();
  }

  // Obtenir une traduction à partir d'un chemin (par ex. "nav.home")
  getTranslation(path) {
    if (!this.initialized) return "";

    const keys = path.split(".");
    let value = this.translations[this.currentLanguage];

    for (const key of keys) {
      if (value === undefined || value[key] === undefined) {
        console.warn(`Traduction non trouvée pour la clé: ${path}`);
        return path;
      }
      value = value[key];
    }

    return value;
  }

  // Mettre à jour tout le contenu de la page avec les traductions
  updatePageContent() {
    if (!this.initialized) return;

    // Mettre à jour les éléments avec l'attribut data-i18n
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.getAttribute("data-i18n");
      const translation = this.getTranslation(key);

      if (translation) {
        if (
          element.tagName === "INPUT" &&
          element.getAttribute("placeholder")
        ) {
          element.setAttribute("placeholder", translation);
        } else if (element.tagName === "IMG" && element.getAttribute("alt")) {
          element.setAttribute("alt", translation);
        } else {
          element.innerHTML = translation;
        }
      }
    });

    // Mettre à jour les éléments avec l'attribut data-i18n-attr (pour les attributs)
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const data = element.getAttribute("data-i18n-attr").split(":");
      if (data.length === 2) {
        const [attr, key] = data;
        const translation = this.getTranslation(key);
        if (translation) {
          element.setAttribute(attr, translation);
        }
      }
    });
  }
}

// Initialiser le gestionnaire de langues au chargement du document
document.addEventListener("DOMContentLoaded", () => {
  window.languageManager = new LanguageManager();
  window.languageManager.init();
});

// Mettre à jour le lien du CV en fonction de la langue
const cvLink = document.getElementById("cv-download");
if (cvLink) {
  const lang = this.currentLanguage;
  cvLink.setAttribute("href", `../doc/CV_Enzo_Pace2024_${lang}.pdf`);
}
