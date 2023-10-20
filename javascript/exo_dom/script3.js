/* // création d'un titre h1
const titre = document.querySelector('h1');
console.log(titre);
// changer le titre
titre.textContent = "Mon nouveau titre";
console.log(titre.textContent);
// changer la couleur du titre
titre.style.color = "red";

// création variable div
const section = document.createElement('div');

// création variable body
const body = document.querySelector('body');
// création d'un id 
section.setAttribute('id','contenu'); */


const titre = document.querySelector('h1');
titre.style.fontSize = '14px';
titre.textContent = "Mon nouveau titre";

const div = document.querySelector('div');
const paragraphe = document.querySelector('p');
div.style.fontFamily = 'arial';
paragraphe.style.fontFamily = 'arial';
paragraphe.style.color = 'green';
div.style.marginTop = '30px';
paragraphe.textContent = 'nouveau contenu de paragraphe';

