/* // Récupération des éléments HTML
const bt1 = document.querySelector('#bt1');
const bt2 = document.querySelector('#bt2');
const listeBt = document.querySelector("button");

// Ajout d'un évènement click( bouton 1)
bt1.addEventListener('click', (e)=>{
    console.log('j\'ai cliqué sur ce super bouton 1');
    // équivalent (this) dans onclick (html)
    console.log(e.target.id);
});

// Ajout d'un évènement click (bouton 2)
bt2.addEventListener('click', ()=>{
    console.log('j\'ai cliqué sur ce super bouton 2');
    console.log(e);
});

console.log(listeBt);
// Ajouter un évènement click sur tous les boutons
listeBt.forEach(element=>{
    element.addEventListener('click', ()=>{
        // equivalent de (this) comme dans onclick en (html) pour récupérer l'élément cliqué
        console.log(element);
    });
}); */

// Exercice 21 DOM écouteur évènement

/* // Récupération du bouton
const bt = document.querySelector('#bt');
//Récupération du paragraphe (pour afficher le résultat)
const resultat = document.querySelector('#resultat');

// Ajouter un écouteur évènement click sur le bouton
bt.addEventListener('click', ()=>{
    // Création variable total
    let total = 0;
    // Liste des inputs text
    let inputs = document.querySelectorAll('input[type="text"]');
    
    // Tester si les champs sont remplis (boucle)
    for(let i=0; i<inputs.length; i++){
        // Si les champs sont vides
        if(inputs[i].value == ""){
            inputs[i].style.backgroundColor = 'red';
        }
        else{
            inputs[i].style.backgroundColor = 'green';
            //inputs.push(nom*prixHt*quantite);

        }
    }
    // Tester les valeurs pour le calcul
    if(!isNaN(inputs[1].value) && !isNaN(inputs[2].value) && inputs[1].value>0 && inputs[2].value>0){
        total = (parseFloat(inputs[1].value)*parseInt(inputs[2].value)*1.20).toFixed(2);
        resultat.textContent = `Le prix TTC est égal à :  ${total} €`;
    }
    else{
        resultat.textContent = "les données saisies sont invalides ";
    }
        
}) */

// Exercice 22 DOM écouteur évènement
const password = document.querySelector('#password');
let regexPwd = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{12,20}$/;
const email = document.querySelector('#email');
let regexEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const error = document.querySelector('#error');
const bt = document.querySelector('#bt');

// Ecouteur pour email
email.addEventListener('keyup', ()=>{
    // test si l'email match le regex
    if(email.value.match(regexEmail)){
        email.style.backgroundColor = 'green';
    }
    // test sinon ne matche pas le regex
    else{
        email.style.backgroundColor = 'red';
    }
})

// Ecouteur pour le password
password.addEventListener('blur' , ()=>{
    console.log('test')
    // test si le password match le regex
    if(password.value.match(regexPwd)){
        console.log('ok')
        password.style.backgroundColor = 'green';
    }
    // test sinon ne matche pas le regex
    else{
        console.log('No')
        password.style.backgroundColor = 'red';
    }
});

// Test si les 2 inputs sont valides
bt.addEventListener('click', ()=>{
    if(password.value.match(regexPwd) && email.value.match(regexEmail)){
        error.textContent = "Valide";
    }
    else{
        error.textContent = "Invalide";
    };
})
