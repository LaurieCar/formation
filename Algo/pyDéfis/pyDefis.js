// SW IV : On passe en vitesse lumière
let x = 997;
let y = 312;
let z = 663;

while (10 * x > y){
    x = (y * z) % 10000;
    y = (3 * z) % 10000;
    z = (7 * z) % 10000;
}
console.log(x,y,z);

// Désamorçage à la Tony Stark
for (let i=1; i<10; i++){
    if (i%3 == 0){
        i = i + i;
    } else if (i%5 == 0){
        i = i + i;
    }
    console.log(i);
}
