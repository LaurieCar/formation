-- insertion requêtes

--  ajouter 3 catégories
INSERT INTO categorie (nom_categorie) VALUE ('fruits et légumes');
INSERT INTO categorie (nom_categorie) VALUE ('boissons');
INSERT INTO categorie (nom_categorie) VALUE ('épicerie');

-- ajouter 5 produits
INSERT INTO produit (nom_produit,description_produit,prix_produit,id_categorie)
VALUE ('pomme','sachet de pommes de 1kg',1.50,1);
INSERT INTO produit (nom_produit,description_produit,prix_produit,id_categorie)
VALUE ('banane','sachet de bananes de 1kg',2.30,1);
INSERT INTO produit (nom_produit,description_produit,prix_produit,id_categorie)
VALUE ('eau','pack de 6 bouteilles',1.75,2);
INSERT INTO produit (nom_produit,description_produit,prix_produit,id_categorie)
VALUE ('lait','pack de 6 bouteilles',3.25,2);
INSERT INTO produit (nom_produit,description_produit,prix_produit,id_categorie)
VALUE ('sucre','paquet de sucre de 1kg',1.50,3);

-- ajouter 3 vendeurs
INSERT INTO vendeur (nom_vendeur,prenom_vendeur)
VALUE ('Carriere','Laurie');
INSERT INTO vendeur (nom_vendeur,prenom_vendeur)
VALUE ('Simon','Audrey');
INSERT INTO vendeur (nom_vendeur,prenom_vendeur)
VALUE ('Petit','Quentin');

-- ajouter 5 tickets de caisse
INSERT INTO ticket (date_ticket, id_vendeur)
VALUE ('2023/12/05 15:45:30', 1);
INSERT INTO ticket (date_ticket, id_vendeur)
VALUE ('2023/11/25 09:20:30', 2);
INSERT INTO ticket (date_ticket, id_vendeur)
VALUE ('2023/07/14 14:15:10', 1);
INSERT INTO ticket (date_ticket, id_vendeur)
VALUE ('2023/04/26 18:37:30', 3);
INSERT INTO ticket (date_ticket, id_vendeur)
VALUE ('2023/12/05 03:45:30', 3);

-- ajouter 2 produits et une quantité à chaque ticket de caisse
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (1,1,10);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (2,1,4);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (4,2,7);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (3,2,6);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (5,3,12);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (3,3,1);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (1,4,4);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (2,4,4);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (5,5,2);
INSERT INTO ajouter (id_produit,id_ticket,quantite)
VALUE (3,5,4);