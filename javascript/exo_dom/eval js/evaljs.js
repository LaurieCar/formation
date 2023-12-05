const usersHuman = [{
    type: "humain",
    name: "John Doe",
    email: "j.smith@gmail.com",
    age: 25
},
{
    type: "humain",
    name: "Jane Smith",
    email: "ja.doe@sfr.fr",
    age: 5
},
{
    type: "humain",
    name: "Le Vénérable",
    email: "levy@gmail.com",
    age: 500
}
];

const usersPet = [{
    type: "animal de compagnie",
    espece: "chien",
    name: "Rox",
    age: 7,
    propriétaire: "John Doe"
},
{
    type: "animal de compagnie",
    espece: "renard",
    name: "Roukie",
    age: 300,
    propriétaire: "Le Vénérable"
}
];

const usersXeno = [{
    type: "Xeno",
    espece: "Krogan",
    name: "Wrex",
    menace: "Rouge",
    age: 45
},
{
    type: "Xeno",
    espece: "Turien",
    name: "Garrus",
    menace: "Vert",
    age: 35
},
{
    type: "Xeno",
    espece: "Asari",
    name: "Liara",
    menace: "ULTRA Rouge",
    age: 25
}
];

/*1) Créer une constante tabData et lui assigner un tableau vide.*/
const tabData = [];
/*2) Ajouter à tabData les const usersHuman, usersPet et usersXeno*/
tabData.push(usersHuman);
tabData.push(usersPet);
tabData.push(usersXeno);

console.log(tabData);

/*3) Créer la fonction afficherHummain() qui prendra un objet en paramètre*/
function afficherHumain(objet){
    const afficher = `----------------------------------------
    nom : ${objet.name}
    email : ${objet.email}
    age : ${objet.age} ans
    ----------------------------------------
    `;
    console.log(afficher);
    
};
/* Test de la fonction*/
afficherHumain(usersHuman[0]);

/*4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
*/
function afficherAnimal(objet){
    const afficher = `----------------------------------------
    nom : ${objet.name}
    espece : ${objet.espece}
    age : ${objet.age} ans
    propriétaire : ${objet.propriétaire}
    ----------------------------------------
    `;
    console.log(afficher);
};
/* Test de la fonction*/
afficherAnimal(usersPet[1]);

/*5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.*/
function afficherXeno(objet){
    const afficher = `----------------------------------------
    nom : ${objet.name}
    espece : ${objet.espece}
    age : ${objet.age} ans
    menace : ${objet.menace}
    ----------------------------------------
    `;
    console.log(afficher);
};
/* Test de la fonction*/
afficherXeno(usersXeno[2]);

/*6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.
*/
/*7) Faire en sorte que la fonction profil() parcourt chaque objet du tableau.*/
/*8) Dans la fonction profil(), pour chaque objet, SI l'objet est de type "humain", appeler la fonction
afficherHumain(). SINON SI l'objet est de type "animal de compagnie", appeler la fonction
afficherAnimal(). SINON SI l'obet est de type "Xeno", appeler la fonction afficherXeno(). SINON
afficher dans la console, le message d'erreur "Type de Profil non Existant".*/

function profil(tab){
    tab.forEach(element =>{
        // test si l'objet est de type humain
        if(element.type == "humain"){
            afficherHumain(element);
        }
        // test si l'objet est de type animal
        else if(element.type == "animal de compagnie"){
            afficherAnimal(element);
        }
        // test si l'objet est un xéno
        else if(element.type == "Xeno"){
            afficherXeno(element);
        }
        else {
            console.log("Type de Profil non Existant");
        }
    })
};

// Version profil avec boucle for
function profilFor(tab){
    for(let i=0; i<tab.length; i++){
        if(tab[i].type == "humain"){
            afficherHumain(tab[i]);
        }
        else if(tab[i].type == "animal de compagnie"){
            afficherAnimal(tab[i]);
        }
        else if(tab[i].type == "Xeno"){
            afficherXeno(tab[i]);
        }
        else {
            console.log("Type de Profil non Existant");
        }
    }
}

/*10) Créer la fonction profilAll() que prend en paramètre un grand tableau constitué de petit tableaux
qui sont constitué d'objet (voir la structure de tabData)*/
function profilAll(tab){
    for(let i = 0; i<tab.length; i++){
        profil(tab[i]);
    }
}
profilAll(tabData);