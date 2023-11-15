function gestionScroll() {
    var barreMenu = document.querySelector('.barreMenuAccueil');
    
    // Si la position de défilement est supérieure à 50 pixels, afficher la barre de menu
    if (window.scrollY > 400) {
        barreMenu.style.top = '0';
    } else {
        // Sinon, masquer la barre de menu en déplaçant son top au-dessus de la vue
        barreMenu.style.top = '-8vh';
    }
}

// Appeler la fonction au chargement initial de la page
gestionScroll();

// Ajouter un gestionnaire d'événements pour le défilement
window.addEventListener("scroll", gestionScroll);
