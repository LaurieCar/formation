// Exercice 19

// Fonction pour ajouter une tâche
function addTask(){
    // Récupération de la valeur task
   const task = document.querySelector('#task').value; 
   // récupération de la div (tasks)
   const liste = document.getElementById('tasks');

   // création d'un paragraphe
   const paragraphe = document.createElement('p');
   // Assigner la valeur au paragraphe
   paragraphe.textContent = task;

   // Ajouter la tache à la liste
   //liste.appendChild(paragraphe);
   
   // Création de la div container
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

let statut = true;

function updateTask(e){
    if(statut){
        // Récupérer la valeur du paragraphe
        const texte = e.parentNode.firstChild.textContent;
        // Création d'un input
        const input = document.createElement('input');
        input.setAttribute('type','text');
        // Remplacer le paragraphe par l'input créé
        e.parentNode.replaceChild(input, e.parentNode.firstChild);
        // Assigner la valeur 1 a l'input
        e.parentNode.firstChild.value = texte;
        statut = false;
    }
    else{
        // Récupérer la valeur de l'input
        const texte = e.parentNode.firstChild.value;
        // Creation d'un paragraphe
        const paragraphe = document.createElement('p');
        // Remplacer l'input par le paragraphe créé
        e.parentNode.replaceChild(paragraphe, e.parentNode.firstChild);
        // Assigner la valeur 1 au paragraphe
        e.parentNode.firstChild.textContent = texte;
        statut = true;

    }
}