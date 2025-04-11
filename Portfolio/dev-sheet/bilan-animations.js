/**
 * Script pour ajouter des animations au scroll sur la page bilan
 */
document.addEventListener("DOMContentLoaded", function() {
    // Configuration des options d'observation
    const observerOptions = {
        root: null, // utilise le viewport comme zone d'observation
        rootMargin: '0px',
        threshold: 0.15 // déclenche lorsque 15% de l'élément est visible
    };

    // Création de l'observateur
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // arrête d'observer une fois animé
            }
        });
    }, observerOptions);

    // Sélection des éléments à animer
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    // Ajout de chaque élément à l'observateur
    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Animation spéciale pour les projets
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        // Ajoute un délai progressif pour créer un effet cascade
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Animation spéciale pour les étapes de la roadmap
    const roadmapSteps = document.querySelectorAll('.roadmap-step');
    roadmapSteps.forEach((step, index) => {
        step.style.transitionDelay = `${index * 0.2}s`;
        observer.observe(step);
    });

    // Animation spéciale pour les blocs d'expérience
    const experienceBlocks = document.querySelectorAll('.experience-block');
    experienceBlocks.forEach((block, index) => {
        block.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(block);
    });
});