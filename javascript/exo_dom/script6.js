// Exercice 17 DOM
/* Créer une fonction calculer :
-récupérer les valeurs des 2 inputs,
-refaire le calcul comme dans l'exercice 8 (correction),
-Afficher le résultat dans le paragraphe (id= resultat) */

/* function calculer(){
    const nomProduit = document.querySelector('#nomProduit').value;
    const prixHt = parseFloat(document.querySelector('#prixHt').value);
    const quantite = parseInt(document.querySelector('#quantite').value);
    const resultat = document.querySelector('#resultat');
    let total = 0;

    total = prixHt*quantite*1.20;

    resultat.textContent = 'Le prix TTC pour ' +quantite+ ' ' +nomProduit+ ' est de : ' +total.toFixed(2)+ " €";
} */

/* let compteur = 1;

function ajouter(){
    // Récupération de l'élément HTML (ajouter des titres)
    const liste = document.getElementById('resultat');
    // Création d'un élément HTML
    const titre = document.createElement('h1');
    // Récupération de l'input HTML (#texte)
    const texte = document.getElementById('texte').value;
    // Ajout d'un attribut id
    titre.setAttribute("id" , compteur++);
    // Assigner la valeur de texte
    titre.textContent = texte;
    // Ajouter un enfant à la liste
    liste.appendChild(titre);
}

// Nodelist
const listeOrdonne = document.querySelectorAll('.menu');
console.log(listeOrdonne);

// HTML Collection
const listeOrdonneV2 = document.getElementsByClassName('menu');
console.log(listeOrdonneV2); */

// Fonction pour ajouter une tâche
function addTask(){
    // Récupération de la valeur task
   const task = document.querySelector('#task').value; 

   // récupération de l'élément HTML (ajouter des tâches)
   const liste = document.getElementById('tasks');

   // création d'un paragraphe
   const paragraphe = document.createElement('p');

   // Assigner la valeur au paragraphe
   paragraphe.textContent = task;

   // Ajouter la tache à la liste
   //liste.appendChild(paragraphe);
   
   // Création d'une div
   const  contenu = document.createElement('div');
   // Ajout d'un attribut class
   contenu.setAttribute('class' , 'container'); 

   // Création des boutons
   const btnDelete = document.createElement('button');
   const btnUpdate = document.createElement('button');

   // Attribut bouton Delete
   btnDelete.setAttribute('id','delete');
   btnDelete.setAttribute('onclick','deleteTask(this)');
   btnDelete.textContent = "Delete";

   // Attribut bouton Update
   btnUpdate.setAttribute('id','update');
   btnUpdate.setAttribute('onclick','updateTask(this)');
   btnUpdate.textContent = "Update";

   // Ajouter au contenu puis a la liste
   contenu.appendChild(paragraphe);
   contenu.appendChild(btnDelete);
   contenu.appendChild(btnUpdate);
   liste.appendChild(contenu);
}

// Fonction pour supprimer tous les enfants
function delAllTask(){ 
    const liste = document.getElementById('tasks');
    
    while (liste.firstChild){
        liste.removeChild(liste.firstChild);
    }

}

// Fonction pour rafraichir la page
function reload(){
    location.reload();
}

// Fonction pour supprimer la tache (div container parente)
function deleteTask(e){
    e.parentNode.remove();
}

// Fonction pour mettre à jour le texte de la tache courante
function updateTask(e){
    // recuperation de l'input (task)
    const task = document.querySelector('#task').value;

    // test si valeur est différente de vide
    if (task != ""){
        // Modifier depuis le parent -> 1 enfant
        e.parentNode.firstChild.textContent = task;
        /* // V2 Modifier depuis l'élément frère ou soeur
        e.previousElementSibling.textContent = task; */
    }
    // test si valeur est vide (redonne la même valeur)
    else{
        e.parentNode.firstChild.textContent = e.parentNode.firstChild.textContent;  
    }
    
}