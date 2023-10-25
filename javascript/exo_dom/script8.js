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
const bt = document.querySelector('#bt');
const resultat = document.querySelector('#resultat');

bt.addEventListener('click', ()=>{
    /* let nom = document.querySelector('#nom');
    let prixHt = document.querySelector('#prixHt');
    let quantite = document.querySelector('#quantite'); */
    let total = 0;
    let inputs = document.querySelectorAll('input[type="text"]');
    //console.log(inputs[0].value);
    for(let i=0; i<inputs.length; i++){
        if(inputs[i].value == ""){
            inputs[i].style.backgroundColor = 'red';
        }
        else{
            inputs[i].style.backgroundColor = 'green';
            //inputs.push(nom*prixHt*quantite);

        }
    }
    if(!isNaN(inputs[1].value) && !isNaN(inputs[2].value) && inputs[1].value>0 && inputs[2].value>0){
        total = (parseFloat(inputs[1].value)*parseInt(inputs[2].value)*1.20).toFixed(2);
        resultat.textContent = `Le prix TTC est égal à :  ${total} €`;
    }
    else{
        resultat.textContent = "données invalides ";
    }
        
})