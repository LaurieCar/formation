// Exercice 12
/* let nbr = prompt("Saisir un nombre caché");
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
 */
// Exercice 13
let scoreBanque = 0;
let scoreJoueur = 0;
for (let i=0; i<5; i++){
    // lancer de la banque
    const lanceBanque = numberRandom(6);
    // lancer du joueur
    const lanceJoueur = numberRandom(6);
    // test si le joueur a un score plus bas que la banque
    if(lanceJoueur<lanceBanque){
        scoreBanque++;
    }
    // test si le joueur a le même score que la banque
    if(lanceJoueur==lanceBanque){
        scoreJoueur+=2;
    }
    // test si le joueur a un score plus élévé que la banque
    if(lanceJoueur>lanceBanque){
        scoreJoueur++;
    }
}

// cas si le joueur a un score plus grand que la banque
if(scoreJoueur>scoreBanque){
    alert("Le joueur a gagné avec : " +scoreJoueur+" pts");
}
// cas si le joueur fait le même score que la banque
if(scoreJoueur==scoreBanque){
    alert("Egalité avec un score de :" +scoreJoueur+ "pts");
}
// cas si le joueur a un score plus petit que la banque
if(scoreJoueur<scoreBanque){
    alert("La banque a gagné avec : " +scoreJoueur+ "pts");
}

function numberRandom(nbr){
    return Math.floor((Math.random() * nbr) +1);
}