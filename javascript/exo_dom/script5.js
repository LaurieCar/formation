/*// recuperation des imput HTML
const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');

// fonction recuperation des valeurs
function recup(){
    console.log(nom.value);
    console.log(prenom.value);
}*/

/*créer une fonction qui va se nommer calculer et qui va éffectuer le calcul du prix à payer des chocolatines :
récupérer la valeur de l'input (id quantité) avec value,
afficher dans le paragraphe (id = résultat) le montant à payer.*/

const quantite = document.querySelector('#quantite');
const resultat = document.querySelector('#resultat');
let prixChoco = [1.4, 1.3, 1.2];

function calculer(){
    let nbr = quantite.value;
    let total = 0;

    if(nbr > 0 && nbr <=10){
        total = nbr * prixChoco[0];
    }
    else if(nbr>10 && nbr <=20){
        total = (10*prixChoco[0])+((nbr-10)*prixChoco[1]);
    }
    else if(nbr>20){
        total = (10*prixChoco[0])+(10*prixChoco[1])+((nbr-20)*prixChoco[2]);
    }
    
    resultat.textContent = "le prix à payer est : " +total.toFixed(2)+" €";
}



