// Exercice 12
let nbr = prompt("Saisir un nombre caché");
console.log(nbr);
let cherche = prompt("Choisir le nombre");


let nbrTour = 10;

while (cherche != nbr && nbrTour > 0){
    if(cherche < nbr){
        console.log("Et non c'est trop petit !");
        nbrTour--;
        cherche = prompt("Trouver le nombre");
        
    }
    else if (cherche > nbr){
        console.log(" Pff c'est trop grand !");
        nbrTour--;
        cherche = prompt("Trouver le nombre");
    }
    else {
        
        nbrTour = 0;
    }
    
}
if (cherche == nbr){
    console.log ("Gagné");
}