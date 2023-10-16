/*console.log("texte");
var text = 'texte';

let text2 = "texte2";
*/
let nb1 = 10;
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
console.log('La solution est : '+texte+' '+utilisateur+' '+(nb1+nb2));

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
let nbr = parseInt(prompt("Saisir l'âge"));
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
}