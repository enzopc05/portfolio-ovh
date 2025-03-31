/**
 * Données des compétences pour la timeline et les graphiques
 */

const skillsData = {
  // Données de la timeline pour chaque période
  timelineData: {
    before: [
      { name: "HTML/CSS", level: 2, category: "dev-web" },
      { name: "JavaScript", level: 1, category: "dev-web" },
      { name: "Python", level: 1, category: "dev" },
      { name: "Java", level: 1, category: "dev" },
      { name: "PHP", level: 0, category: "dev-web" },
      { name: "C#", level: 0, category: "dev" },
      { name: "VBA", level: 0, category: "dev" },
      { name: "JavaFX", level: 0, category: "dev" },
      { name: "XML", level: 0, category: "dev-web" },
      { name: "SQL", level: 0, category: "database" },
      { name: "Excel", level: 1, category: "bureautique" },
      { name: "Gestion de projet", level: 1, category: "soft-skills" },
      { name: "Réseau", level: 1, category: "infra" },
    ],
    "first-year": [
      { name: "HTML/CSS", level: 3, category: "dev-web" },
      { name: "JavaScript", level: 3, category: "dev-web" },
      { name: "PHP", level: 2, category: "dev-web" },
      { name: "SQL", level: 3, category: "database" },
      { name: "Java", level: 2, category: "dev" },
      { name: "JavaFX", level: 1, category: "dev" },
      { name: "Python", level: 3, category: "dev" },
      { name: "C#", level: 2, category: "dev" },
      { name: "VBA", level: 1, category: "dev" },
      { name: "XML", level: 2, category: "dev-web" },
      { name: "Réseau", level: 1, category: "infra" },
      { name: "Excel", level: 3, category: "bureautique" },
      { name: "GitHub", level: 2, category: "dev" },
      { name: "VS Code", level: 3, category: "dev" },
      { name: "IntelliJ IDEA", level: 2, category: "dev" },
      { name: "WAMP", level: 2, category: "dev-web" },
      { name: "Notion", level: 2, category: "bureautique" },
      { name: "Gestion de projet", level: 2, category: "soft-skills" },
    ],
    "second-year": [
      { name: "HTML/CSS", level: 4, category: "dev-web" },
      { name: "JavaScript", level: 4, category: "dev-web" },
      { name: "PHP", level: 4, category: "dev-web" },
      { name: "SQL", level: 4, category: "database" },
      { name: "Java", level: 4, category: "dev" },
      { name: "JavaFX", level: 3, category: "dev" },
      { name: "VB6", level: 3, category: "dev" },
      { name: "VBA", level: 3, category: "dev" },
      { name: "Python", level: 3, category: "dev" },
      { name: "C#", level: 3, category: "dev" },
      { name: "API Rest", level: 3, category: "dev-web" },
      { name: "XML", level: 4, category: "dev-web" },
      { name: "Réseau", level: 1, category: "infra" },
      { name: "Excel", level: 4, category: "bureautique" },
      { name: "GitHub", level: 3, category: "dev" },
      { name: "VS Code", level: 4, category: "dev" },
      { name: "IntelliJ IDEA", level: 3, category: "dev" },
      { name: "WAMP", level: 3, category: "dev-web" },
      { name: "Notion", level: 3, category: "bureautique" },
      { name: "PostMan", level: 3, category: "dev-web" },
      { name: "Hébergement web", level: 3, category: "infra" },
      { name: "Gestion de projet", level: 4, category: "soft-skills" },
    ],
  },

  // Catégories de compétences avec leurs couleurs
  skillCategories: [
    { name: "Développement Web", key: "dev-web", color: "#4285F4" },
    { name: "Bases de données", key: "database", color: "#34A853" },
    { name: "Programmation", key: "dev", color: "#FBBC05" },
    { name: "Infrastructure", key: "infra", color: "#EA4335" },
    { name: "Soft skills", key: "soft-skills", color: "#8E24AA" },
    { name: "Design", key: "design", color: "#F06292" },
    { name: "Bureautique", key: "bureautique", color: "#26A69A" },
  ],

  // Données agrégées par domaine pour le graphique radar
  skillDomains: [
    { name: "Développement Web", beforeBTS: 1.5, firstYear: 3, secondYear: 4 },
    { name: "Programmation", beforeBTS: 0.5, firstYear: 2.5, secondYear: 3.5 },
    { name: "Bases de données", beforeBTS: 0, firstYear: 3, secondYear: 4 },
    { name: "Infrastructure", beforeBTS: 0, firstYear: 1.5, secondYear: 2 },
    { name: "Gestion de projet", beforeBTS: 0, firstYear: 2, secondYear: 4 },
    { name: "Bureautique", beforeBTS: 2, firstYear: 3, secondYear: 4 },
    { name: "Soft Skills", beforeBTS: 1, firstYear: 2, secondYear: 3.5 },
  ],
};

// Fonction utilitaire pour obtenir une couleur de catégorie à partir de sa clé
function getCategoryColor(categoryKey) {
  const category = skillsData.skillCategories.find(
    (cat) => cat.key === categoryKey
  );
  return category ? category.color : "#777777";
}

// Fonction utilitaire pour obtenir le nom complet d'une catégorie à partir de sa clé
function getCategoryName(categoryKey) {
  const category = skillsData.skillCategories.find(
    (cat) => cat.key === categoryKey
  );
  return category ? category.name : "Autre";
}