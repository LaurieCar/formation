/*console.log("texte");
var text = 'texte';

let text2 = "texte2";
*/
/* let nb1 = 10;
let nb2 = 5;
let nb3 = nb1;
nb1 = nb2;
nb2 = nb3;

console.log(nb1,nb2);

let texte = "Bonjour";
let utilisateur = "Laurie";

// concaténation version template string
console.log(`La solution est : ${texte} ${utilisateur} ${nb1+nb2}`);
// concaténation version double " "
console.log("La solution est : "+texte+" "+utilisateur+" "+(nb1+nb2));
// concaténation version simple ' '
console.log('La solution est : '+texte+' '+utilisateur+' '+(nb1+nb2)); */

//Exercice 2 : Les tests
/* let nbr1 = prompt ("Saisir un nombre");
if(nbr1<0){
    console.log("négatif");
}else{
    console.log("positif");
} */
/*
// Exercice 3 : Les tests
let nbr1 = 10;
let nbr2 = 5;
if( (nbr1+nbr2) > 0){
    console.log("positif");
}else{
    console.log("négatif");
}
*/

/*
    Variables 
*/
/* let nbr1 = parseInt(prompt("Saisir le nombre 1"));
let nbr2 = parseInt(prompt("Saisir le nombre 2"));

/* 
    Logique 
*/
/* let addition = nbr1 + nbr2;
//test si nbr1 + nbr2 est positif
if((addition)> 0){
    console.log("Positif");
}
//test sinon si nbr 1 + nbr2 est égal à 0
else if((addition) == 0){
    console.log("Egale 0");
}
//test sinon si nbr1 + nbr2 n'est pas un nombre
else if(isNaN(addition)){
    console.log("Ce n'est pas un nombre");
}
//test sinon nbr1 + nbr2 est négatif
else{
    console.log("Négatif");
} */ 

// Exercice 4
/* let nbr1 = parseInt(prompt("Saisir le nombre 1"));
let nbr2 = parseInt(prompt("Saisir le nombre 2"));

if((nbr1>0 && nbr2>0) || (nbr1<0 && nbr2<0)){
    console.log("le produit est positif");
}
else if(nbr1==0 || nbr2==0){
    console.log("Le produit vaut 0");
}
else if(isNaN(nbr1) || isNaN(nbr2)){
    console.log("Ce n'est pas un nombre");
}
else{
    console.log("Le produit est négatif");
} */

// Exercice 5
/* let nbr = parseInt(prompt("Saisir l'âge"));
switch(true){
    case nbr==6 || nbr==7 :
        console.log("Poussin");
        break;
    case nbr==8 || nbr==9 :
        console.log("Pupille");
        break;
    case nbr==10 || nbr==11 :
        console.log("Minime");
        break;
    case nbr>=12 :
        console.log("Cadet");    
        break;
} */

// Exercice 6
/* let mot1 = prompt("Saisir un mot");
let mot2 = prompt("Saisir un mot");
let mot3 = prompt("Saisir un mot");

if ((mot1<mot2) && (mot2<mot3)){
    console.log("ils sont triés");
}
else{
    console.log("Ils ne sont pas triés");
} */

// Exercice 7 tableau
/* let nbr1 = prompt("Saisir une valeur");
let nbr2 = prompt("Saisir une valeur");
let nbr3 = prompt("Saisir une valeur");

let tab = [nbr1,nbr2,nbr3];

if(tab[0]<tab[1] && tab[1]<tab[2]){
    console.log("les valeurs sont dans l'ordre croissant");
}
else{
    console.log("les valeurs sont dans l'ordre décroissant");
} */

// Exercice 8 Tableau
let nom = prompt("Saisir le nom du produit");
let prixHt = parseFloat(prompt("Saisir le prix HT"));
let quantite = parseInt(prompt("Saisir la quantité"));

let tab = {"Nom du produit":nom, "Prix HT":prixHt, "Quantité":quantite};

tab.prixTTC = prixHt*1.20*quantite;

console.log(`Le prix TTC est : ${tab.prixTTC}`);

// Exercice 9 Tableau et boucle
// Créer le tableau en dehors de la boucle
// Le tableau va stocker la liste des utilisateurs
// let users = [];

// La boucle va créer 5 utilisateurs
/* for (let i=0; i<5; i++){
    let user = {
        "nom" : prompt("Saisir le nom de l'utilisateur n°" +(i+1)),
        "prenom" : prompt("Saisir le prénom de l'utilisateur n°" +(i+1)),
        "age" : parseInt(prompt("Saisir l'age de l'utilisateur n°" +(i+1))),
        "numTel" : parseInt(prompt("Saisir le numéro de télephone n°" +(i+1)))
    }
    users.push(user);
    console.log(users);
}

let minAge = users[0].age;
let indice = 0;

// Parcourir le tableau users
for (let i=0; i<users.length; i++){
    // Tester si l'âge est plus petit que minAge
    if(users[i].age < minAge){
        minAge = users[i].age;
        indice = i;
    }
}

console.log(`L'utilisateur le plus jeune est ${users[indice].nom} ${users[indice].prenom}`);
 */

// Exercice 10
/* let eleves = [];

for (let i=0; i<5; i++){
    let eleve = {
        "nom": prompt("Saisir le nom de l'élève"),
        "prenom" : prompt("Saisir le prénom de l'élève"),
        "note" : parseInt(prompt("Saisir la note de l'élève"))
    }
    eleves.push(eleve);
}

let total = 0;

for (let i=0; i<eleves.length; i++){
    total += eleves[i].note;
}

console.log(`La moyenne du devoir est de : ${(total/eleves.length)}`) */

// Exercice 11
/* let nbChoco = prompt("Saisir le nombre de chocolatines");
let prix1 = 1.40;
let prix2 = 1.30;
let prix3 = 1.20;
let total = 0;

if (nbChoco>0 && nbChoco <= 10){
    total = nbChoco*prix1;
} 
else if(nbChoco>10 && nbChoco<=20){
    total = (nbChoco - 10) *prix2 + (10*prix1);
} 
else {
    total = (nbChoco - 20) *prix3 + (10*prix1) + (10*prix2);
}
// afficher dans un pop up
alert(`Le montant à payer est de : ${total}`);
 */
