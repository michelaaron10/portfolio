let diapositiveActuelle = 0;
const diapositives = document.querySelectorAll('.diapositive');
const totalDiapositives = diapositives.length;
const boutonSuivant = document.querySelector('.bouton-suivant');
const boutonPrecedent = document.querySelector('.bouton-precedent');

function afficherDiapositive(index) {
  diapositives.forEach((diapo, i) => diapo.style.display = i === index ? 'flex' : 'none');

  // Masquer les boutons aux extrémités
  boutonPrecedent.style.display = index === 0 ? 'none' : 'flex';
  boutonSuivant.style.display = index === totalDiapositives - 1 ? 'none' : 'flex';
}

// Initialisation
afficherDiapositive(diapositiveActuelle);

// Bouton suivant
boutonSuivant.addEventListener('click', () => {
  if (diapositiveActuelle < totalDiapositives - 1) {
    diapositiveActuelle++;
    afficherDiapositive(diapositiveActuelle);
  }
});

// Bouton précédent
boutonPrecedent.addEventListener('click', () => {
  if (diapositiveActuelle > 0) {
    diapositiveActuelle--;
    afficherDiapositive(diapositiveActuelle);
  }
});
