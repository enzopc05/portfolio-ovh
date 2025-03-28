/**
 * Données des compétences pour la timeline et les graphiques
 */

const skillsData = {
  // Données de la timeline pour chaque période
  timelineData: {
    before: [
      { name: "HTML/CSS", level: 2, category: "dev-web" },
      { name: "JavaScript", level: 1, category: "dev-web" },
      { name: "Excel", level: 3, category: "bureautique" },
      { name: "Gestion de projet", level: 0, category: "soft-skills" },
      { name: "Création de contenu", level: 2, category: "design" },
      { name: "Python", level: 1, category: "dev" },
      { name: "Base de données", level: 0, category: "database" },
      { name: "Réseau", level: 0, category: "infra" },
    ],
    "first-year": [
      { name: "HTML/CSS", level: 4, category: "dev-web" },
      { name: "JavaScript", level: 3, category: "dev-web" },
      { name: "PHP", level: 2, category: "dev-web" },
      { name: "SQL", level: 3, category: "database" },
      { name: "Java", level: 2, category: "dev" },
      { name: "Python", level: 3, category: "dev" },
      { name: "Réseau", level: 2, category: "infra" },
      { name: "Gestion de projet", level: 2, category: "soft-skills" },
      { name: "VBA", level: 2, category: "dev" },
      { name: "CMS", level: 2, category: "dev-web" },
      { name: "Méthodes agiles", level: 1, category: "soft-skills" },
      { name: "Création de contenu", level: 3, category: "design" },
    ],
    "second-year": [
      { name: "HTML/CSS", level: 5, category: "dev-web" },
      { name: "JavaScript", level: 4, category: "dev-web" },
      { name: "PHP", level: 4, category: "dev-web" },
      { name: "SQL", level: 5, category: "database" },
      { name: "Java", level: 4, category: "dev" },
      { name: "JavaFX", level: 3, category: "dev" },
      { name: "VB6", level: 3, category: "dev" },
      { name: "VBA", level: 4, category: "dev" },
      { name: "Python", level: 4, category: "dev" },
      { name: "API Rest", level: 3, category: "dev-web" },
      { name: "Cybersécurité", level: 2, category: "infra" },
      { name: "Réseau", level: 3, category: "infra" },
      { name: "Hébergement web", level: 3, category: "infra" },
      { name: "XML", level: 4, category: "dev-web" },
      { name: "Méthodes agiles", level: 3, category: "soft-skills" },
      { name: "Gestion de projet", level: 4, category: "soft-skills" },
      { name: "CMS", level: 3, category: "dev-web" },
      { name: "Création de contenu", level: 4, category: "design" },
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
    { name: "Programmation", beforeBTS: 1, firstYear: 2.5, secondYear: 3.5 },
    { name: "Bases de données", beforeBTS: 0, firstYear: 3, secondYear: 5 },
    { name: "Infrastructure", beforeBTS: 0, firstYear: 2, secondYear: 3 },
    {
      name: "Gestion de projet",
      beforeBTS: 0,
      firstYear: 1.5,
      secondYear: 3.5,
    },
    { name: "Design", beforeBTS: 2, firstYear: 3, secondYear: 4 },
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
