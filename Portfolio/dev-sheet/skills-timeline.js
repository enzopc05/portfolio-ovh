/**
 * Script pour gérer la timeline d'évolution des compétences
 */

document.addEventListener("DOMContentLoaded", function () {
  // Références aux éléments DOM
  const timelineButtons = document.querySelectorAll(".timeline-btn");
  const timelinePeriods = document.querySelectorAll(".timeline-period");
  const progressPoints = document.querySelectorAll(".progress-point");

  // Initialisation de la timeline
  initializeTimeline();

  /**
   * Initialise la timeline et remplit les données des compétences
   */
  function initializeTimeline() {
    // Remplir les conteneurs de compétences pour chaque période
    Object.keys(skillsData.timelineData).forEach((period) => {
      const skillsWrapper = document.querySelector(
        `#${period} .skills-wrapper`
      );

      // Si le conteneur existe
      if (skillsWrapper) {
        const skills = skillsData.timelineData[period];

        // Créer un élément pour chaque compétence
        skills.forEach((skill) => {
          const skillElement = createSkillElement(skill);
          skillsWrapper.appendChild(skillElement);
        });
      }
    });

    // Ajouter les événements de clic sur les boutons
    timelineButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const period = this.getAttribute("data-period");
        switchTimelinePeriod(period);
      });
    });

    // Ajouter les événements de clic sur les points de progression
    progressPoints.forEach((point) => {
      point.addEventListener("click", function () {
        const period = this.getAttribute("data-period");
        switchTimelinePeriod(period);
      });
    });
  }

  /**
   * Crée un élément DOM pour une compétence
   * @param {Object} skill - Données de la compétence
   * @return {HTMLElement} Élément DOM de la compétence
   */
  function createSkillElement(skill) {
    // Créer l'élément principal
    const skillElement = document.createElement("div");
    skillElement.className = "skill-item";
    skillElement.style.borderTop = `5px solid ${getCategoryColor(
      skill.category
    )}`;

    // Créer le nom de la compétence
    const nameElement = document.createElement("div");
    nameElement.className = "skill-name";
    nameElement.textContent = skill.name;

    // Créer l'indicateur de niveau
    const levelElement = document.createElement("div");
    levelElement.className = "skill-level";

    const starsContainer = document.createElement("div");
    starsContainer.className = "level-stars";

    // Ajouter 5 étoiles (remplies ou non selon le niveau)
    for (let i = 1; i <= 5; i++) {
      const star = document.createElement("span");
      star.className = `level-star ${i <= skill.level ? "filled" : ""}`;
      star.innerHTML = "★";
      starsContainer.appendChild(star);
    }

    levelElement.appendChild(starsContainer);

    // Créer l'élément de catégorie
    const categoryElement = document.createElement("div");
    categoryElement.className = "skill-category";
    categoryElement.textContent = getCategoryName(skill.category);

    // Assembler l'élément complet
    skillElement.appendChild(nameElement);
    skillElement.appendChild(levelElement);
    skillElement.appendChild(categoryElement);

    return skillElement;
  }

  /**
   * Change la période active de la timeline
   * @param {string} period - Identifiant de la période à activer
   */
  function switchTimelinePeriod(period) {
    // Désactiver tous les boutons et périodes
    timelineButtons.forEach((btn) => btn.classList.remove("active"));
    timelinePeriods.forEach((period) => period.classList.remove("active"));
    progressPoints.forEach((point) => point.classList.remove("active"));

    // Activer le bouton correspondant à la période
    document
      .querySelector(`.timeline-btn[data-period="${period}"]`)
      .classList.add("active");

    // Activer la période correspondante
    document.getElementById(`${period}`).classList.add("active");

    // Activer le point de progression correspondant
    document
      .querySelector(`.progress-point[data-period="${period}"]`)
      .classList.add("active");

    // Animation pour marquer le changement
    animatePeriodChange();
  }

  /**
   * Ajoute une animation lors du changement de période
   */
  function animatePeriodChange() {
    const activeContainer = document.querySelector(".timeline-period.active");

    if (activeContainer) {
      // Réinitialiser puis déclencher l'animation
      activeContainer.style.animation = "none";
      setTimeout(() => {
        activeContainer.style.animation = "fadeIn 0.5s ease-in-out";
      }, 10);
    }
  }
});
