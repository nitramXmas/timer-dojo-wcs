const startButton = document.querySelector('#btn-start'); //bouton de demarrage
const addButton = document.querySelector('#btn-add'); //bouton d'ajout utilisateur
const delButton = document.querySelector('#btn-del'); //bouton d'ajout utilisateur
let overlay = document.querySelector('.overlay'); //div avec la classe overlay
let counterView = document.querySelector('#counter'); //la div du compteur
let inputParam = document.querySelector('.input-param'); //la div contenant les inputs user et color
const firstUser = document.querySelector('.input-user'); //selection du premier input user
const firstColor = document.querySelector('.input-color'); //selection du premier input color

//Selection de tous les inputs -> a ameliorer avec um object contenant le couple user/color

/**
 * Fonction ajout d'utilisateur
 */
addButton.addEventListener('click', function () {
  let newUser = document.createElement('input');
  let newColor = document.createElement('input');
  newUser = firstUser.cloneNode(true);
  newColor = firstColor.cloneNode(true);
  inputParam.appendChild(newUser);
  inputParam.appendChild(newColor);
});

/**
 * Fonction supression d'utilisateur
 * ameliorable avec objet ? + declanche une erreur dans la console
 */

delButton.addEventListener('click', function () {
  let users = document.querySelectorAll('.input-user');
  let colors = document.querySelectorAll('.input-color');
  for (let cptDel = users.length - 1; cptDel > 0; cptDel++) {
    users[cptDel].remove();
    colors[cptDel].remove();
  }
});

console.log(document.querySelectorAll('.input-user'));
console.log(document.querySelectorAll('.input-color'));

/**
 * Fonction daffichage de l'overlay au clic sur le bouton de demarrage
 */

startButton.addEventListener('click', function () {
  overlay.style.display = 'flex';
  //modification du contenu avec l'utilisateur et la couleur de fond -> a ameliorer avec un objets
  /*   counterView.innerText = `${users[0].value} is coding`;
  counterView.style.backgroundColor = colors[0].value; */
});

//Sortie de l'overlay si on clique dessus - a modifier avec un bouton d'exit
//preventDefault pour eviter de reset la saisie des users
overlay.addEventListener('click', function (e) {
  e.preventDefault;
  overlay.style.display = 'none';
});
