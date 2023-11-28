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
function afficherHumain(){
    console.log(usersHuman.name);
    console.log(usersHuman.email);
    console.log(usersHuman.age);
};
afficherHumain();

/*4) Créer la fonction afficherAnimal() qui prendra un objet en paramètre.
*/
function afficherAnimal(){
    console.log(usersPet.name);
    console.log(usersPet.espece);
    console.log(usersPet.age);
    console.log(usersPet.propriétaire);
};
afficherAnimal();

/*5) Créer la fonction afficherXeno() qui prendra un objet en paramètre.*/
function afficherXeno(){
    console.log(usersXeno.name);
    console.log(usersXeno.espece);
    console.log(usersXeno.age);
    console.log(usersXeno.menace);
};
afficherXeno();

/*6) Créer une fonction profil() qui prend un tableau d'objet en paramètre.
*/
function profil(){

};