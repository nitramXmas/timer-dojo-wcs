const startButton = document.querySelector('#btn-start'); //bouton de demarrage
const addButton = document.querySelector('#btn-add'); //bouton d'ajout utilisateur
let overlay = document.querySelector('.overlay'); //div avec la classe overlay
let counterView = document.querySelector('#counter'); //la div du compteur
let users = document.querySelector('.users'); //la div contenant les users
const firstUser = document.querySelector('.input-user'); //selection de l'input de nom d'utilisateur
const firstColor = document.querySelector('.input-color'); //selection de l'input de nom d'utilisateur

//Selection de tous les inputs -> a ameliorer avec um object contenant le couple user/color
// a ameliorer avec un bouton "+" pour ajouter une ligne de saisie
/* let users = document.querySelectorAll('.input-user');
let colors = document.querySelectorAll('.input-color'); */

/**
 * Fonction ajout d'utilisateur
 */
addButton.addEventListener('click', function () {
  let newUser = document.createElement('input');
  let newColor = document.createElement('input');
  users.appendChild(newUser);
  users.appendChild(newColor);
});

/**
 * Fonction daffichage de l'overlay au clic sur le bouton vert
 */

startButton.addEventListener('click', function () {
  overlay.style.display = 'flex';
  //modification du contenu avec l'utilisateur et la couleur de fond -> a ameliorer avec un objets
  counterView.innerText = `${users[0].value} is coding`;
  counterView.style.backgroundColor = colors[0].value;
});

//Sortie de l'overlay si on clique dessus - a modifier avec un bouton d'exit
//preventDefault pour eviter de reset la saisie des users
overlay.addEventListener('click', function (e) {
  e.preventDefault;
  overlay.style.display = 'none';
});
