/*
// A1
// Initilalisation
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);

// Réalisation
forward(200);
faceRight();
forward(100);

// A2
// Initialisation
setPos(300,300);
faceLeft();
setLineWidth(10);
changeColor(color.yellow);

// Réalisation
forward(50);
faceDown();
forward(50);
faceRight();
forward(100);
faceUp();
forward(100);

// A3
// Initialisation
setPos(300,300);
faceLeft();
setLineWidth(10);
changeColor(color.yellow);

// Réalisation
forward(50);
faceRight();
forward(100);
faceLeft();
forward(50);
faceDown();
forward(50);
faceUp();
forward(100);

// A4 
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);

// A5
// Initialisation
setPos(250,150);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Réalisation
arcRight(100,180);
arcRight(100,180);
arcRight(50,180);
arcLeft(50,180);

// A6
// Initialisation
setPos(300,300);
faceUp();
setLineWidth(10);
changeColor(color.blue);

// Réalisation
forward(50);
up();
forward(50);
down();
forward(100);

// A7
// Initialisation
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.green);

//Réalisation
forward(100);
arcLeft(50,180)
forward(50);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);

// A8
// Initialisation
setPos(300,300);
faceUp();
setLineWidth(10);
changeColor(color.fuchsia);

// Réalisation
forward(50);
faceRight();
forward(100);
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
forward(50);
down();
forward(50);

// A9
// Initialisation
setPos(150,350)
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Réalisation
arcLeft(50,180);
arcRight(50,180);
forward(200);
arcRight(50,180);
arcLeft(50,180);
backward(200);

// A10
// Initialisation
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réalisation
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);

// A11
// Init
setPos(120,200);
faceUp();
setLineWidth(10);
changeColor(color.blue);

// Rea
arcRight(50,180);
faceRight();
up();
forward(50);
down();
faceUp();
arcRight(50,180);
up();
forward(50);
faceLeft();
forward(25);
faceDown();
down();
changeColor(color.fuchsia)
arcRight(100,180);

// A12
// Init
setPos(100,200);
faceUp();
setLineWidth(10);
changeColor(color.green);

// Réa
arcRight(50,180);
forward(100);
arcLeft(50,180);
faceRight();
up();
forward(50);
down();
changeColor(color.yellow);
faceDown();
arcLeft(50,180);
forward(100);
arcRight(50,180);

// B1
// Initialisation
setPos(100,100);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réalisation
for (let i=0 ; i<4 ; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

// B2
// Init
setPos(50,300);
faceUp();
setLineWidth(10);
changeColor(color.red);

// Rea
for (let i=0 ; i<4 ; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}

// B3
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Réa
for (let i=0 ; i<4 ; i++){
    forward(100);
    right(90);
}

// B4
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Rea
for (let i=0 ; i<3 ; i++){
    forward(100);
    left(120);
}

// B5
// Init
setPos(300,300);
faceUp();
setLineWidth(10);
changeColor(color.yellow);

// Rea
forward(100);
changeColor(color.red);
for (let i=0 ; i<3 ; i++){
    forward(50);
    right(120);
}

// B6
// Init
setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Rea
for (let i=0 ; i<2 ; i++){
    forward(50);
    faceUp();
    forward(50)
    faceRight();
}
changeColor(color.green);
for (let i=0 ; i<3 ; i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

// B7
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réa
for (let i=0 ; i<3 ; i++){
    forward(100);
    left(120);
}
for (let i=0 ; i<4 ; i++){
    forward(100);
    right(90);
}

// B8
// Init
setPos(300,300);
faceRight;
setLineWidth(10);
changeColor(color.yellow);

// Rea
for (let i=0 ; i<8 ; i++){
    forward(200);
    right(135);
}

// B9
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Rea
forward(50);
up();
forward(50);
down();
for (let i=0 ; i<3 ; i++){
    forward(100);
    right(120);
}

// B10
// Init
setPos(100,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Rea
for (let i=0 ; i<8 ; i++){
    forward(100);
    right(135);
}
up();
forward(200);
down();
changeColor(color.yellow);
for (let i=0 ; i<8 ; i++){
    forward(200);
    left(135);
}
right(90);
up();
forward(100);
down();
changeColor(color.fuchsia);
for (let i=0 ; i<8 ; i++){
    forward(100);
    right(135);
}

// B11
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Rea
for (let i=0 ; i<4 ; i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
}

// B12
// Init
setPos(250,250);
faceRight();
setLineWidth(10)
changeColor(color.fuchsia);

// Rea
for (let i=0 ; i<3 ; i++){
    right(90);
    forward(50);
}
up();
forward(50);
down();
changeColor(color.green);
for (let i=0 ; i<3 ; i++){
    forward(50);
    right(90);
}

// B13
// Init
setPos(200,200);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Rea
for (let i=0 ; i<8 ; i++){
    forward(50);
    left(135);
    forward(25);
    right(90);
    forward(25);
    right(90);
}

// B14
// Init
setPos(90,90);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Rea
forward(100);
for (let i=0 ; i<5 ; i++){
    right(120);
    forward(100);
    left(120);
    forward(100);
}

// B15
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Rea
for (let i=0 ; i<4 ; i++){
    forward(100);
    arcLeft(50,90);
}

// B16
// Init
setPos(150,350);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Rea
arcLeft(200,90);
faceLeft();
for (let i=0 ; i<4 ; i++){
    arcLeft(25,90);
    arcRight(25,90);
}

// B17
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Rea
for (let i=0 ; i<6 ; i++){
    arcLeft(50,180);
    left(120);
}

// B18
// Init
setPos(200,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Rea
for (let i=0 ; i<8 ; i++){
    forward(200);
    left(90);
    forward(50);
    left(45);
}

// B19
// Init
setPos(250,500);
faceRight();
setLineWidth(10);
changeColor(color.aqua);

// Rea
for (let i=0 ; i<4 ; i++){
    arcLeft(50,180);
    faceRight();
}
faceUp();
up();
forward(50);
down();
faceLeft();
for (let i=0 ; i<4 ; i++){
    arcLeft(50,180);
    faceLeft();
}

// B20
// Init
setPos(150,200);
faceDown();
setLineWidth(10);
changeColor(color.aqua);

// Rea
for (let i=0 ; i<2 ; i++){
    forward(100);
    arcLeft(50,90);
}
forward(100);
faceLeft();
forward(200);
faceUp();
forward(50);
arcRight(50,90);
forward(100);
arcRight(50,90);
forward(75);
faceLeft();
up();
forward(100);
down();
for (let i=0 ; i<4 ; i++){
    arcLeft(50,90);
}

// B21
// Init
setPos(300,150);
faceRight();
setLineWidth(10);
shiftColor(0.5);

// Rea
for (let i=0 ; i<6 ; i++){
    forward(100);
    left(120);
    forward(50);
    left(120);
    forward(100);
    right(60);
    forward(50);
    right(120);
    forward(50);
    right(120);
    up();
    forward(100);
    down();
    shiftColor(0.1);
}

// B22 
// Init
setPos(250,300);
faceUp();
right(60);
setLineWidth(10);
changeColor(color.yellow);

// Rea
for (let i=0 ; i<6 ; i++){
    forward(100);
    left(60);
}
right(90);
changeColor(color.red);
for (let i=0 ; i<3 ; i++){
    forward(100);
    right(120);
}
changeColor(color.green);
for (let i=0 ; i<4 ; i++){
    forward(100);
    left(90);
}
right(60);
for (let i=0 ; i<6 ; i++){
    forward(100);
    right(90);
}

// B23
// Init
setPos(150,250);
faceUp();
right(45);
setLineWidth(10);
changeColor(color.fuchsia);

// Rea
for (let i=0; i<3; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(135);
forward(50);
right(45);
for (let i=0; i<3; i++){
    forward(50);
    right(90);
    forward(50);
    left(90);
}
right(135);
forward(50);

// B24
// Init
setPos(200,200);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Rea
for (let i=0; i<8 ;i++){
    forward(100);
    left(135);
}
forward(50);
changeColor(color.green);
for (let i=0; i<3; i++){
    right(135);
    forward(100);
    left(135);
    forward(50);
}
forward(50);
right(90);
for (let i=0; i<2; i++){
    forward(25);
    left(90);
}
forward(25);
right(90);
forward(50);
for (let i=0; i<3; i++){
    forward(50);
    left(135);
    forward(100);
    right(135);
}


// C1
// Init
setPos(45,225);
faceRight();
setLineWidth(10);
changeColor(color.aqua);

// Rea
for (let j=0; j<4; j++){
    for (let i=0; i<3; i++){
        forward(100);
        right(120);
    }
    forward(100);
}

// C2
// Init
setPos(225,500);
faceUp();
setLineWidth(10);
changeColor(color.fuchsia);

// Rea
for (let j=0; j<5; j++){
    for (let i=0; i<4; i++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}

// C3
// Init
setPos(10,270);
faceRight();
setLineWidth(10);
shiftColor(0.4);

// Réa
for (let j=0; j<3; j++){
    for (let i=0; i<8; i++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    down();
    shiftColor(0.2);
}

// C4
// Init
setPos(10,270);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réa
for (let k=0; k<5; k++){
    for (let j=0; j<3; j++){
        forward(50);
        left(120);
    }
    changeColor(color.yellow);
    for (let i=0; i<4; i++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}

// C5
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
shiftColor(0);

// Réa
for (let j=0; j<4; j++){
    for (let i=0; i<8; i++){
        forward(200);
        left(135);
    }
    shiftColor(0.25);
    right(90);
}

// C6
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réa
for (let j=0; j<3; j++){
    for (let i=0; i<4; i++){
        forward(100);
        left(120);
    }
    forward(100);
}

// C7
// Init
setPos(230,350);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réa
for (let j=0; j<8; j++){
    for (let i=0; i<3; i++){
        forward(50);
        right(120);
    }
    forward(50);
    left(45);
}

// C8
// Init
setPos(300,500);
faceUp();
setLineWidth(10);
changeColor(color.green);

// Réa
forward(200);
right(45);
for (let j=0; j<4; j++){
    changeColor(color.red);
    for (let i=0; i<3; i++){
        forward(100);
        right(120);
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}

// C9
// Init
setPos(350,350);
faceRight();
setLineWidth(10);
changeColor(color.green);

// Réa
for (let k=0; k<3; k++){
    for (let j=0; j<3; j++){
        for (let i=0; i<4; i++){
            right(90);
            forward(50);
        }
        forward(100);
        right(120);
    }
    left(120);
    forward(200);
}

// C10
// Init
setPos(250,80);
faceDown();
setLineWidth(10);
changeColor(color.red);

// Réa
for (let k=0; k<4; k++){
    for (let j=0; j<4; j++){
        forward(50);
        for (let i=0; i<4; i++){
            left(90);
            forward(25);
        }
        right(90);
    }
    forward(100);
}

// C11
// Init
setPos(170,170);
faceRight();
setLineWidth(10);
shiftColor(0.5);

// Réa
for (let k=0; k<6; k++){
    for (let j=0; j<6; j++){
        for (let i=0; i<4; i++){
            forward(50);
            left(120);
        }
        right(60);
    }
    up();
    forward(100);
    down();
    shiftColor(0.10);
    right(60);
}

// C12 
// Init
setPos(250,200);
faceRight();
setLineWidth(10);
changeColor(color.yellow);

// Réa
for (let j=0; j<4; j++){
    for (let i=0; i<4; i++){
        arcLeft(50,90);
        forward(50);
        left(90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
arcRight(50,180);
left(120);
for (let k=0; k<3; k++){
    arcLeft(100,90)
}
arcLeft(100,30);

// D1
// Init
setPos(200,120);
faceRight();
setLineWidth(10);
changeColor(color.red);

// Réa
for (let i=0; i<8; i++){
    forward(100);
    right(45);
}

// D2
// Init
setPos(250,200);
faceRight();
setLineWidth(10);
changeColor(color.green);

//Réa
forward(50);
faceDown();
forward(100);
faceRight();
forward(150);
faceUp();
forward(50);
faceLeft();
forward(100);

// D3 
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);

// Réa
forward(100);
right(135);
forward(150);
left(135);
forward(100);

// D4
// Init
setPos(120,500);
faceRight();
setLineWidth(10);
changeColor(color.blue);

// Réa
for (let i=0; i<6; i++){
    faceUp();
    forward(50);
    faceLeft();
    forward(50);
    faceUp();
    forward(25);
    faceRight();
    forward(100);
}

// D5
// Init
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);

// Réa
forward(150);
left(90);
forward(50);
faceUp();
forward(150);
changeColor(color.yellow);
for (let i=0; i<4; i++){
    forward(50);
    left(90);
}

// D6
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);
let longueur;
longueur = 50;

// Réa
forward(longueur);
faceUp();
longueur = 100;
forward(longueur);
faceRight();
longueur = 150;
forward(longueur);

// D7 
// Init
setPos(300,300);
faceUp();
setLineWidth(10);
changeColor(color.fuchsia);
let longueur;
longueur = 50;

// Réa
forward(longueur);
faceRight();
forward(longueur);
faceUp();
longueur = 100;
forward(longueur);
faceLeft();
forward(longueur);
faceDown();
longueur = 50;
forward(longueur);

// D8
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.red);
let longueur;
longueur = 100;

// Réa
forward(longueur);
faceDown();
forward(longueur);
for (let i=0; i<2; i++){
    faceLeft();
    longueur = 50;
    forward(longueur);
    faceUp();
    forward(longueur);
}

// D9 
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.blue);
let longueur = 50;

// Réa
for (let i=0; i<6; i++){
    forward(longueur);
    right(120);
    longueur = longueur + 50;
}

// D10
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.yellow);
let longueur = 50;

// Réa
for (let i=0; i<10; i++){
    forward(longueur);
    right(90);
    longueur = longueur + 25;
}

// D11
// Init
setPos(20,250);
faceRight();
setLineWidth(10);
changeColor(color.aqua);
let longueur = 125;

// Réa
for (let j=0; j<5; j++){
    for (let i=0; i<4; i++){
        forward(longueur);
        left(120);
    }
    right(120);
    longueur = longueur + -25;
}

// D12
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.aqua);
let longueur = 50;

// Réa
for (let j=0; j<6; j++){
    for (let i=0; i<4; i++){
        forward(longueur);
        left(120);
    }
    right(60);
    longueur = longueur + 25;
}

// D13
// Init
setPos(300,300);
faceRight();
setLineWidth(10);
changeColor(color.fuchsia);
let longueur=50;

// Réa
for (let i=0; i<8; i++){
    arcRight(longueur,180);
    up();
    forward(longueur);
    down();
    longueur=longueur+25;
}

// D14
// Init 
setPos(70,250);
faceUp();
right(45);
setLineWidth(10);
changeColor(color.green);
let longueur=25;

// Réa
for (let j=0; j<2; j++){
    for (let i=0; i<4; i++){
        forward(longueur);
        right(90);
        forward(longueur);
        left(90);
        longueur=longueur+25;
    }
    right(90);
    right(90);
}

// D15 (ne fonctionne pas !!)
// Init
setPos(300,300);
faceDown();
setLineWidth(10);
changeColor(color.red);
let longueur=50;
let angle=90;

// Réa
for (let i=0; i<10; i++){
    forward(longueur);
    left(angle);
    longueur=longueur+10;
    angle=angle+175;
}

// D16
// Init
setPos(250,200);
faceDown();
setLineWidth(10);
changeColor(color.green);
let rayon=50;

// Réa
forward(100);
right(120);
forward(50);
faceLeft();
for (let i=0; i<3; i++){
    forward(50);
    right(90);
}
left(120);
forward(50);
faceRight();
up();
forward(50);
down();
changeColor(color.yellow);
for (let j=0; j<3; j++){
    arcRight(rayon,180);
    up();
    rayon=rayon+25;
    arcRight(rayon,180);
    down();
    rayon=rayon+25;
}
*/