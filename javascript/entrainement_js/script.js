/*Créer une fonction qui prend en entrée un nombre qui s'ajoute lui même 10 fois. A la 5 eme fois où il s'ajoute, divise le resultat final par ce nombre. Afficher le résultat après division dans la console. Nombre de départ 567.*/
function steven(a){
    let b = 0;
    for(let i=0; i<10; i++){
        a+=a;
        if(i==4){
            b = a;
        }
    };
    console.log(a/b);
};
steven(567);

/*La classe des cyberdev de l'ADRAR a mis en place le chocoblast. 
Jean-Marie se fait chocoblast tous les mercredis, et un mardi sur 2. 
Sachant qu'il ramène les chocos un jeudi sur 3, combien de tournées de chocolatines en retard aura-t-il après 60 semaines de cours ?*/