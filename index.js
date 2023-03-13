let startBtn = document.querySelector('#btn-start'); //bouton de demarrage
let overlay = document.querySelector('.overlay'); //div avec la classe overlay
let counterView = document.querySelector('#counter'); //la div du compteur

//Selection de tous les inputs -> a ameliorer avec um object contenant le couple user/color
// a ameliorer avec un bouton "+" pour ajouter une ligne de saisie
let users = document.querySelectorAll('.input-user');
let colors = document.querySelectorAll('.input-color');

/**
 * Fonction daffichage de l'overlay au clic sur le bouton vert
 */

startBtn.addEventListener('click', function () {
  overlay.style.display = 'flex';
  //modification du contenu avec l'utilisateur et la couleur de fond -> a ameliorer avec un objets
  counterView.innerText = `${users[0].value} is coding`;
  counterView.style.backgroundColor = colors[0].value;
});

//Sortie de l'overlay si on cliaue dessus - a modifier avec un bouton d'exit
//preventDefault pour eviter de reset la saisie des users
overlay.addEventListener('click', function (e) {
  e.preventDefault;
  overlay.style.display = 'none';
});
