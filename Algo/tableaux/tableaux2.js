// Écrire une fonction qui prend un tableau en entrée et affiche le dernier élément de ce tableau.
function displayLast(tab){
    console.log(tab[tab.length - 1]);
}

displayLast([10,20]);
displayLast([1,2,3,4]);

// Écrire une fonction qui prend un tableau en entrée et retourne le dernier élément de ce tableau.
function returnLast(tab){
    let numéro = tab.length - 1;
    return tab[numéro];
}

console.log(returnLast([25,4,96,12]));
console.log(returnLast([45,75,3,0]));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le minimum de ce tableau.
function returnMin(t){
    let min = t[0];
    for (let i=0; i<t.length; i++){
        if (t[i] < min){
            min = t[i];
        }
    }
    return min; 
}

console.log(returnMin([1,2,3,4]));
console.log(returnMin([75,42,15,72]));

// Écrire une fonction qui prend en entrée un tableau et qui retourne le maximum de ce tableau.
function returnMax(t){
    let max = t[0];
    for (let i=0; i<t.length; i++){
        if (t[i] > max){
            max = t[i]
        }
    }
    return max;
}

console.log(returnMax([1,2,3,4]));
console.log(returnMax([25,44,100,35]))

// [Plus difficile - bonus] Écrire une fonction qui prend en entrée un tableau de nombres positifs et qui retourne la deuxième plus grande valeur du tableau.

// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne le nombre de fois que ce nombre apparaît dans le tableau.
function count(t,n){
    let counter = 0;
    for (let i=0; i<t.length; i++){
        if (t[i] == n){
            counter++
        }
    }
    return counter;
}

console.log(count([1,1,1,5,6,1,1,2],1));
console.log(count([2,2,4,5,8,7],2));


// Écrire une fonction qui prend en entrée un tableau et un nombre et qui retourne true si le nombre existe dans le tableau, false sinon.
function number(t,n){
    for (let i=0; i<t.length; i++){
        if (n == t[i]){
            return true;
        }
    }
    return false;
}

console.log(number([5,10,25,30],30));
console.log(number([1,2,8,4],10))
console.log(number([5,10,25,30],100));
console.log(number([5,10,25,30],5));
// [Bonus] Suite de l'exo : on **sait** que le tableau reçu est trié (on ne le vérifie pas). Comment exploiter cette information pour améliorer la recherche d'un élément ?

// Créer un tableau qui contient [1,2,3,...,7777].

// Créer un tableau qui contient [10,20,30,...,77770].

// En se servant du tableau précédent, créer un tableau qui contient [5,10,15,...,38885].

// Écrire une fonction qui prend un tableau en entrée et qui en supprime les dernières valeurs, tant qu'elles sont inférieures à 50.
// console.log(leNomDeVotreFonction([1,45,88,54,23,-100,12])); // doit afficher [1,45,88,54]