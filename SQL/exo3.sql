CREATE DATABASE exo3;
USE exo3;

CREATE TABLE produit(
id_produit INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_produit VARCHAR(50) NOT NULL,
description_produit TEXT NOT NULL,
prix_produit DECIMAL(4,2) NOT NULL,
id_categorie INT NOT NULL
)Engine=InnoDB;

CREATE TABLE categorie(
id_categorie INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_categorie VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE vendeur(
id_vendeur INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nom_vendeur VARCHAR(50) NOT NULL,
prenom_vendeur VARCHAR(50) NOT NULL
)Engine=InnoDB;

CREATE TABLE ticket(
id_ticket INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
date_ticket DATETIME NOT NULL,
id_vendeur INT NOT NULL
)Engine=InnoDB;

CREATE TABLE ajouter(
id_produit INT,
id_ticket INT,
PRIMARY KEY (id_produit, id_ticket),
quantite INT NOT NULL
)Engine=InnoDB;

ALTER TABLE produit
ADD CONSTRAINT fk_completer_categorie
FOREIGN KEY (id_categorie)
REFERENCES categorie(id_categorie);

ALTER TABLE ticket
ADD CONSTRAINT fk_vendre_vendeur
FOREIGN KEY (id_vendeur)
REFERENCES vendeur(id_vendeur);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_produit
FOREIGN KEY (id_produit)
REFERENCES produit(id_produit);

ALTER TABLE ajouter
ADD CONSTRAINT fk_ajouter_ticket
FOREIGN KEY (id_ticket)
REFERENCES ticket(id_ticket);