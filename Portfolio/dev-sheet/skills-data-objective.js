/**
 * Données des compétences pour la timeline et les graphiques - Version objective
 */

const skillsData = {
    // Données de la timeline pour chaque période avec approche objective
    timelineData: {
      before: [
        { 
          name: "HTML/CSS", 
          level: "débutant", 
          progression: 25,
          category: "dev-web",
          achievements: ["Création de pages web statiques simples", "Utilisation des styles de base"]
        },
        { 
          name: "JavaScript", 
          level: "débutant", 
          progression: 15,
          category: "dev-web",
          achievements: ["Scripts basiques", "Manipulation DOM élémentaire"]
        },
        { 
          name: "Python", 
          level: "débutant", 
          progression: 20,
          category: "dev",
          achievements: ["Scripts simples", "Exercices algorithmiques basiques"]
        },
        { 
          name: "Java", 
          level: "débutant", 
          progression: 20,
          category: "dev",
          achievements: ["Initiation à la programmation orientée objet", "Exercices simples"]
        },
        { 
          name: "Excel", 
          level: "basique", 
          progression: 40,
          category: "bureautique",
          achievements: ["Utilisation de formules simples", "Mise en forme basique"]
        },
        { 
          name: "Gestion de projet", 
          level: "débutant", 
          progression: 20,
          category: "soft-skills",
          achievements: ["Travaux de groupe", "Organisation personnelle"]
        },
      ],
      "first-year": [
        { 
          name: "HTML/CSS", 
          level: "intermédiaire", 
          progression: 65,
          category: "dev-web",
          achievements: ["Sites web responsive", "Utilisation de Flexbox et Grid", "Animation et transitions CSS"]
        },
        { 
          name: "JavaScript", 
          level: "intermédiaire", 
          progression: 60,
          category: "dev-web",
          achievements: ["Manipulation avancée du DOM", "Utilisation d'AJAX", "Gestion des événements"]
        },
        { 
          name: "PHP", 
          level: "basique", 
          progression: 45,
          category: "dev-web",
          achievements: ["Création de pages dynamiques", "Interactions avec une base de données"]
        },
        { 
          name: "SQL", 
          level: "intermédiaire", 
          progression: 60,
          category: "database",
          achievements: ["Création et modification de tables", "Requêtes JOIN", "Fonctions d'agrégation"]
        },
        { 
          name: "Java", 
          level: "basique", 
          progression: 45,
          category: "dev",
          achievements: ["POO intermédiaire", "Création d'applications simples"]
        },
        { 
          name: "JavaFX", 
          level: "débutant", 
          progression: 30,
          category: "dev",
          achievements: ["Interfaces graphiques simples", "Composants de base"]
        },
        { 
          name: "Python", 
          level: "intermédiaire", 
          progression: 55,
          category: "dev",
          achievements: ["Manipulation de données", "Création de scripts d'automatisation"]
        },
        { 
          name: "C#", 
          level: "basique", 
          progression: 40,
          category: "dev",
          achievements: ["Syntaxe de base", "Applications console simples"]
        },
        { 
          name: "GitHub", 
          level: "basique", 
          progression: 45,
          category: "dev",
          achievements: ["Commandes git de base", "Collaboration d'équipe simple"]
        },
        { 
          name: "Gestion de projet", 
          level: "basique", 
          progression: 50,
          category: "soft-skills",
          achievements: ["Organisation de tâches", "Suivi de projet élémentaire"]
        },
      ],
      "second-year": [
        { 
          name: "HTML/CSS", 
          level: "avancé", 
          progression: 85,
          category: "dev-web",
          achievements: [
            "Développement complet du portfolio responsive",
            "Animations complexes",
            "Architecture CSS modulaire",
            "Frameworks CSS (utilisation partielle de Bootstrap)"
          ]
        },
        { 
          name: "JavaScript", 
          level: "avancé", 
          progression: 80,
          category: "dev-web",
          achievements: [
            "Programmation fonctionnelle",
            "ES6+",
            "Module Pattern",
            "Utilisation de bibliothèques (Chart.js)",
            "Développement SPA partiel"
          ]
        },
        { 
          name: "PHP", 
          level: "avancé", 
          progression: 75,
          category: "dev-web",
          achievements: [
            "Architecture MVC",
            "Sécurisation des données",
            "Implémentation d'API",
            "Sessions et authentification"
          ]
        },
        { 
          name: "SQL", 
          level: "avancé", 
          progression: 85,
          category: "database",
          achievements: [
            "Optimisation de requêtes complexes",
            "Procédures stockées",
            "Triggers",
            "Administration de bases de données"
          ]
        },
        { 
          name: "Java", 
          level: "avancé", 
          progression: 80,
          category: "dev",
          achievements: [
            "Patterns de conception",
            "Gestion des exceptions avancée",
            "Multithreading",
            "Projet GhostTrack complet"
          ]
        },
        { 
          name: "JavaFX", 
          level: "intermédiaire", 
          progression: 70,
          category: "dev",
          achievements: [
            "Interface utilisateur complexe",
            "Animation d'UI",
            "Architecture FXML",
            "Binding de données"
          ]
        },
        { 
          name: "VB6", 
          level: "intermédiaire", 
          progression: 65,
          category: "dev",
          achievements: [
            "Maintenance d'applications existantes",
            "Création de modules complémentaires",
            "Interfaces avec bases de données"
          ]
        },
        { 
          name: "VBA", 
          level: "intermédiaire", 
          progression: 70,
          category: "dev",
          achievements: [
            "Automatisation de tâches complexes",
            "Extraction de données depuis SQL",
            "Création de tableaux de bord"
          ]
        },
        { 
          name: "Python", 
          level: "intermédiaire", 
          progression: 65,
          category: "dev",
          achievements: [
            "Projets d'analyse de données",
            "Frameworks web (Django)",
            "Automatisation avancée",
            "API REST"
          ]
        },
        { 
          name: "C#", 
          level: "intermédiaire", 
          progression: 65,
          category: "dev",
          achievements: [
            "Développement d'API REST",
            "Projets ASP.NET Core",
            "Architecture en couches",
            "Projet API POM"
          ]
        },
        { 
          name: "API Rest", 
          level: "intermédiaire", 
          progression: 70,
          category: "dev-web",
          achievements: [
            "Création d'endpoints",
            "Documentation Swagger",
            "Sécurité et authentification",
            "Tests avec Postman"
          ]
        },
        { 
          name: "XML", 
          level: "avancé", 
          progression: 75,
          category: "dev-web",
          achievements: [
            "Manipulation de données structurées",
            "Transformation XSL",
            "Validation de schémas",
            "Intégration API"
          ]
        },
        { 
          name: "GitHub", 
          level: "intermédiaire", 
          progression: 70,
          category: "dev",
          achievements: [
            "Branches et merge",
            "CI/CD basique",
            "Résolution de conflits",
            "Pull requests"
          ]
        },
        { 
          name: "Gestion de projet", 
          level: "avancé", 
          progression: 80,
          category: "soft-skills",
          achievements: [
            "Application de méthodes agiles",
            "Planification de sprints",
            "Estimation de tâches",
            "Coordination d'équipe"
          ]
        },
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
  
    // Données objectives pour les graphiques
    objectiveMetrics: {
      // Données pour le graphique radar (basées sur des métriques objectives)
      radar: {
        labels: [
          "Projets réalisés", 
          "Technologies maîtrisées", 
          "Problèmes résolus",
          "Documentation créée",
          "Bonnes pratiques appliquées",
          "Collaboration d'équipe",
          "Formation continue"
        ],
        beforeBts: [1, 2, 1, 0, 1, 1, 1],
        firstYear: [3, 5, 4, 2, 3, 3, 2],
        secondYear: [7, 9, 8, 5, 7, 6, 4]
      },
      
      // Données pour le graphique à barres (échelle par valeur quantifiable)
      bars: {
        labels: ["HTML/CSS", "JavaScript", "Java", "SQL", "Python", "C#", "PHP", "VBA"],
        metrics: {
          "beforeBts": [
            { 
              label: "Avant BTS", 
              data: [2, 1, 1, 0, 1, 0, 0, 0], 
              description: "Nombre de projets réalisés"
            }
          ],
          "firstYear": [
            { 
              label: "1ère année", 
              data: [4, 3, 2, 3, 2, 1, 2, 1], 
              description: "Nombre de projets réalisés"
            }
          ],
          "secondYear": [
            { 
              label: "2ème année", 
              data: [7, 6, 4, 5, 3, 3, 4, 3], 
              description: "Nombre de projets réalisés"
            }
          ]
        }
      },
      
      // Données pour le graphique par catégorie (compétences par domaine)
      categories: {
        // Nombre de compétences par catégorie pour chaque période
        // Représentation objective du développement des compétences par domaine
        beforeBts: {
          "dev-web": 2,
          "dev": 2,
          "database": 0,
          "soft-skills": 1,
          "bureautique": 1
        },
        firstYear: {
          "dev-web": 3,
          "dev": 5,
          "database": 1,
          "soft-skills": 2,
          "bureautique": 2,
          "infra": 1
        },
        secondYear: {
          "dev-web": 4,
          "dev": 7,
          "database": 2,
          "soft-skills": 3,
          "bureautique": 2,
          "infra": 1
        }
      }
    }
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
  
  // Fonction pour obtenir la couleur correspondant au niveau
  function getLevelColor(level) {
    switch(level.toLowerCase()) {
      case "débutant": return "#f9c74f";
      case "basique": return "#90be6d";
      case "intermédiaire": return "#43aa8b";
      case "avancé": return "#277da1";
      case "expert": return "#5e60ce";
      default: return "#aaaaaa";
    }
  }