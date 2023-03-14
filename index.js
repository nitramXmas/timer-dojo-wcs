const startButton = document.querySelector('#btn-start'); //bouton de demarrage
const addButton = document.querySelector('#btn-add'); //bouton d'ajout utilisateur
const delButton = document.querySelector('#btn-del'); //bouton d'ajout utilisateur
let overlay = document.querySelector('.overlay'); //div avec la classe overlay
let counterView = document.querySelector('#counter'); //la div du compteur
let inputParam = document.querySelector('.input-param'); //la div contenant les inputs user et color

//2 input de base avec utilisation d'un formulaire pour avoir l'evenement submit (bouton vert)
//sur le clic, creation d'un nouvel objet avec les saisies + creation de 2 nouyveau inputs avec un submit
//il faut utiliser un formulaire pour

class userParam {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
}

let param1 = new userParam();

/**
 * Fonction ajout d'utilisateur
 */
addButton.addEventListener('click', function () {
  let newUser = document.createElement('input');
  let newColor = document.createElement('input');
  inputParam.appendChild(newUser);
  inputParam.appendChild(newColor);
});

/**
 * Fonction supression d'utilisateur
 */
delButton.addEventListener('click', function () {});

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
