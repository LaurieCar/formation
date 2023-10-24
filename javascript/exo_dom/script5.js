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

/* const quantite = document.querySelector('#quantite');
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
 */

function calculer(){
    // récupération des éléments HTML
    const resultat = document.querySelector('#resultat');
    // recuperation du nbr de choco à facturer
    const quantite = document.querySelector('#quantite').value;
    // prix total
    let total = 0;
    // prix chocolatines
    let prixChoco = [1.4, 1.3, 1.2];

    // test si quantité n'est pas un nombre
    if(isNaN(quantite)){
        resultat.textContent = "veuillez saisir un nombre";
    }
     // test si le champ est vide (bonus)
    if(quantite == ""){
       resultat.textContent = "veuillez remplir le champ quantité avec un nombre";
    }
    // test si quantité est égal ou inférieure à 0
    if(quantite == 0 || quantité <0){
        total = "veuillez saisir une valeur supérieure à 0";
    }
    // test sinon faire le calcul
    else{
        if(quantite > 0 && quantite <= 10){
            total = quantite * prixChoco[0];
        }
        else if(quantite >= 11 && quantite <= 20){
            total = (10*prixChoco[0])+((quantite-10)*prixChoco[1]);
        }
        else{
            total = (10*prixChoco[0])+(10*prixChoco[1])+((quantite-20)*prixChoco[2]);
        }
        // aficher dans le paragraphe le total a payer
        resultat.textContent = 'Le prix total est égal à : '+total.toFixed(2)+ " €";
        }
}
