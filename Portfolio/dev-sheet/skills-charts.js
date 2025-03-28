/**
 * Script pour créer et gérer les graphiques de compétences
 */

document.addEventListener("DOMContentLoaded", function () {
  // Références aux éléments DOM
  const chartTabs = document.querySelectorAll(".chart-tab");
  const chartWrappers = document.querySelectorAll(".chart-wrapper");

  // Initialiser les graphiques
  initializeCharts();

  // Ajouter les événements de clic sur les onglets
  chartTabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const chartType = this.getAttribute("data-chart");
      switchChart(chartType);
    });
  });

  /**
   * Initialise tous les graphiques
   */
  function initializeCharts() {
    createRadarChart();
    createBarsChart();
    createCategoriesChart();
  }

  /**
   * Change le graphique actif
   * @param {string} chartType - Type de graphique à afficher
   */
  function switchChart(chartType) {
    // Désactiver tous les onglets et graphiques
    chartTabs.forEach((tab) => tab.classList.remove("active"));
    chartWrappers.forEach((wrapper) => wrapper.classList.remove("active"));

    // Activer l'onglet correspondant
    document
      .querySelector(`.chart-tab[data-chart="${chartType}"]`)
      .classList.add("active");

    // Activer le graphique correspondant
    document
      .getElementById(`${chartType}-chart-container`)
      .classList.add("active");
  }

  /**
   * Crée le graphique radar des compétences
   */
  function createRadarChart() {
    const ctx = document.getElementById("skills-radar").getContext("2d");

    // Extraire les données depuis skillsData.skillDomains
    const labels = skillsData.skillDomains.map((domain) => domain.name);
    const beforeBtsData = skillsData.skillDomains.map(
      (domain) => domain.beforeBTS
    );
    const firstYearData = skillsData.skillDomains.map(
      (domain) => domain.firstYear
    );
    const secondYearData = skillsData.skillDomains.map(
      (domain) => domain.secondYear
    );

    new Chart(ctx, {
      type: "radar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Avant BTS",
            data: beforeBtsData,
            fill: true,
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderColor: "rgba(75, 192, 192, 0.8)",
            pointBackgroundColor: "rgba(75, 192, 192, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(75, 192, 192, 1)",
          },
          {
            label: "Première année",
            data: firstYearData,
            fill: true,
            backgroundColor: "rgba(255, 159, 64, 0.2)",
            borderColor: "rgba(255, 159, 64, 0.8)",
            pointBackgroundColor: "rgba(255, 159, 64, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255, 159, 64, 1)",
          },
          {
            label: "Deuxième année",
            data: secondYearData,
            fill: true,
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderColor: "rgba(153, 102, 255, 0.8)",
            pointBackgroundColor: "rgba(153, 102, 255, 1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(153, 102, 255, 1)",
          },
        ],
      },
      options: {
        scales: {
          r: {
            angleLines: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 5,
            ticks: {
              stepSize: 1,
              callback: function (value) {
                if (value === 0) return "Débutant";
                if (value === 1) return "Notions";
                if (value === 2) return "Basique";
                if (value === 3) return "Intermédiaire";
                if (value === 4) return "Avancé";
                if (value === 5) return "Expert";
                return value;
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                let label = context.dataset.label || "";
                if (label) {
                  label += ": ";
                }

                const value = context.raw;
                let levelLabel;

                if (value < 1) levelLabel = "Débutant";
                else if (value < 2) levelLabel = "Notions";
                else if (value < 3) levelLabel = "Basique";
                else if (value < 4) levelLabel = "Intermédiaire";
                else if (value < 5) levelLabel = "Avancé";
                else levelLabel = "Expert";

                return label + value + " - " + levelLabel;
              },
            },
          },
        },
      },
    });
  }

  /**
   * Crée le graphique à barres montrant la progression des compétences
   */
  function createBarsChart() {
    const ctx = document.getElementById("skills-bars").getContext("2d");

    // Obtenir les 8 compétences principales en deuxième année
    const topSkills = [...skillsData.timelineData["second-year"]]
      .sort((a, b) => b.level - a.level)
      .slice(0, 8);

    // Préparer les données
    const labels = topSkills.map((skill) => skill.name);

    // Pour chaque compétence principale, trouver son niveau dans les autres périodes
    const beforeBtsData = [];
    const firstYearData = [];
    const secondYearData = [];

    topSkills.forEach((topSkill) => {
      // Niveau avant BTS
      const beforeSkill = skillsData.timelineData["before"].find(
        (skill) => skill.name === topSkill.name
      );
      beforeBtsData.push(beforeSkill ? beforeSkill.level : 0);

      // Niveau première année
      const firstYearSkill = skillsData.timelineData["first-year"].find(
        (skill) => skill.name === topSkill.name
      );
      firstYearData.push(firstYearSkill ? firstYearSkill.level : 0);

      // Niveau deuxième année (déjà connu mais on l'extrait pour cohérence)
      secondYearData.push(topSkill.level);
    });

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Avant BTS",
            data: beforeBtsData,
            backgroundColor: "rgba(75, 192, 192, 0.8)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
          {
            label: "Première année",
            data: firstYearData,
            backgroundColor: "rgba(255, 159, 64, 0.8)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
          {
            label: "Deuxième année",
            data: secondYearData,
            backgroundColor: "rgba(153, 102, 255, 0.8)",
            borderColor: "rgba(153, 102, 255, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            stacked: false,
          },
          y: {
            stacked: false,
            min: 0,
            max: 5,
            ticks: {
              stepSize: 1,
              callback: function (value) {
                if (value === 0) return "Débutant";
                if (value === 1) return "Notions";
                if (value === 2) return "Basique";
                if (value === 3) return "Intermédiaire";
                if (value === 4) return "Avancé";
                if (value === 5) return "Expert";
                return value;
              },
            },
          },
        },
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }

  /**
   * Crée le graphique circulaire pour la répartition par catégorie
   */
  function createCategoriesChart() {
    const ctx = document.getElementById("skills-categories").getContext("2d");

    // Calculer le nombre de compétences par catégorie en deuxième année
    const categoryCounts = {};

    skillsData.timelineData["second-year"].forEach((skill) => {
      if (!categoryCounts[skill.category]) {
        categoryCounts[skill.category] = 0;
      }
      categoryCounts[skill.category]++;
    });

    // Préparer les données pour le graphique
    const labels = [];
    const data = [];
    const colors = [];

    skillsData.skillCategories.forEach((category) => {
      if (categoryCounts[category.key]) {
        labels.push(category.name);
        data.push(categoryCounts[category.key]);
        colors.push(category.color);
      }
    });

    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: colors,
            borderColor: colors.map((color) =>
              color.replace(")", ", 1)").replace("rgb", "rgba")
            ),
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "right",
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.raw;
                const total = context.chart.data.datasets[0].data.reduce(
                  (a, b) => a + b,
                  0
                );
                const percentage = Math.round((value / total) * 100);
                return `${label}: ${value} (${percentage}%)`;
              },
            },
          },
        },
      },
    });
  }
});
