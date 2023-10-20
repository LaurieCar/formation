// création de la variable user
const user = {
    'id' : 1,
    'nom' : 'Carriere',
    'prenom' : 'Laurie',
    'age' : '39 ans',
    'image' : './logo.jpg'
}

// création variable div
const section = document.querySelector('div');
// ajout attribut id
section.setAttribute('id', user.id);


// création variable paragraphe
const paragraphe1 = document.querySelector('#p1');
const paragraphe2 = document.querySelector('#p2');
const paragraphe3 = document.querySelector('#p3');
// modification contenu paragraphe
paragraphe1.textContent = user.nom;
paragraphe2.textContent = user.prenom;
paragraphe3.textContent = user.age;

// création variable image
const image = document.querySelector('img');
// insertion de l'image 
image.src = user.image;

// Modif paragraphe
section.style.fontSize = '20px';
section.style.color = 'blue';
section.style.backgroundColor = 'rgb(220,220,220)';

// Modif image
// taille image
image.style.width = '100px';
image.style.height = '100px';
// position image
image.style.margin = '10px';
image.style.float = 'right';
