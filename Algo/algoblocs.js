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
*/

// C2
// Init
setPos(225,500);
faceUp();
setLineWidth(10);
changeColor(color.fuchsia);

// Rea
for (let j=0; j<5; j++){
    
}