// Exercice 12
let nbr = prompt("Saisir un nombre caché");
console.log(nbr);
let cherche2 = prompt("Choisir le nombre");


let nbrTour = 10;

while (cherche2 != nbr && nbrTour > 0){
    if(cherche2 < nbr){
        console.log("Et non c'est trop petit !");
        nbrTour--;
        cherche2 = prompt("Trouver le nombre");
        
    }
    else if (cherche2 > nbr){
        console.log(" Pff c'est trop grand !");
        nbrTour--;
        cherche2 = prompt("Trouver le nombre");
    }
    else {
        
        nbrTour = 0;
    }
    
}
if (cherche2 == nbr){
    console.log ("Gagné");
}