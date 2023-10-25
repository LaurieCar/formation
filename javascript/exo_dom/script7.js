// Exercice 19

// Fonction pour ajouter une tâche
/* function addTask(){
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
        const valeur = e.parentNode.firstChild.textContent;
        // Création d'un input
        const input = document.createElement('input');
        input.setAttribute('type','text');
        // Remplacer le paragraphe par l'input créé
        e.parentNode.replaceChild(input, e.parentNode.firstChild);
        // Assigner la valeur 1 a l'input
        e.parentNode.firstChild.value = valeur;
        // Changer la valeur de statut
        statut = false;
    }
    else{
        // Récupérer la valeur de l'input
        const valeur = e.parentNode.firstChild.value;
        // Creation d'un paragraphe
        const paragraphe = document.createElement('p');
        // Remplacer l'input par le paragraphe créé
        e.parentNode.replaceChild(paragraphe, e.parentNode.firstChild);
        // Assigner la valeur 1 au paragraphe
        e.parentNode.firstChild.textContent = valeur;
        // Changer la valeur de statut
        statut = true;

    }
} */

// Exercice 20

// création du tableau (pour éviter que la clé tasks soit réécrite à chaque fois)
localStorage.getItem('tasks') == null ? 
localStorage.setItem("tasks", []):false;


function addTask(){
// Le code ci-dessous récupère la clé dans le localStorage et le met à jour avec la valeur saisie dans l'input du formulaire
    // Récupération de l'input ('#task')
    let task = document.querySelector('#task').value;
    // Récupérer dans une variable la valeur clé ('tasks')
    let tasks = localStorage.getItem('tasks');

    // test si la clé tasks dans localStorage est vide
    if (tasks == ""){
        tasks += task;
    }
    // Test sinon elle n'est pas vide
    else{
        // Transforme en tableau
        tasks = tasks.split(",");
        // Ajoute la valeur de l'input au tableau
        tasks.push(task);
    }
    // Mise à jour de la clé 
    localStorage.setItem('tasks', tasks);

    // Récupération de la valeur task
   //const task = document.querySelector('#task').value; 
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

// Fonction pour générer les taches depuis le localStorage
function showAllTask(){
    // Récupération de la clé task dans localStorage
    let taches = localStorage.getItem('tasks');
    // test si taches ne contient rien
    if(taches!=""){
        // Conversion en tableau
        taches = taches.split(',');
    
        // Boucle pour parcourir le tableau de tâches
        for(let i=0; i<taches.length; i++){
            // création d'un paragraphe
            const paragraphe = document.createElement('p');
            // Assigner la valeur au paragraphe
            paragraphe.textContent = task;
            
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
    }
}