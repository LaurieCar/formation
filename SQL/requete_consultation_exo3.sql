-- Afficher toute les catégorie avec (nom)
SELECT nom_categorie FROM categorie;

-- Afficher tous les vendeur avec (nom, prénom) trié par nom et prénom ordre croissant
SELECT nom_vendeur AS nom, prenom_vendeur AS prenom FROM vendeur 
ORDER BY nom_vendeur ASC, prenom_vendeur ASC;

-- Afficher la liste des tickets avec (date_ticket) du mois de décembre
SELECT date_ticket FROM ticket WHERE month(date_ticket) = 12;

-- Afficher la liste des produits dont le prix est supérieur à 2 € 
-- et inférieur à 10 €  avec (nom_produit, description_produit, prix_produit),
SELECT nom_produit, description_produit, prix_produit FROM produit 
WHERE prix_produit BETWEEN '2' AND '10';

-- Afficher la liste des produits avec (nom_produit, prix_produit, nom_categorie)
SELECT nom_produit, prix_produit, nom_categorie FROM produit 
INNER JOIN categorie ON categorie.id_categorie = produit.id_categorie; 

-- Afficher la liste des produits avec (nom_produit, description_produit, prix_produit, nom_categorie) 
-- de type boissons (nom_categorie)
SELECT nom_produit, description_produit, prix_produit, nom_categorie FROM produit
INNER JOIN categorie ON categorie.id_categorie = produit.id_categorie 
WHERE nom_categorie = 'boissons';

-- Afficher la liste des tickets avec (date_ticket, nom_vendeur, prenom_vendeur)
SELECT date_ticket, nom_vendeur, prenom_vendeur FROM vendeur 
INNER JOIN ticket ON vendeur.id_vendeur = ticket.id_vendeur;

-- Afficher la liste des produits vendus sur le ticket (id_ticket = 1)  
-- avec (nom_produit, prix_produit, quantite)
SELECT nom_produit, prix_produit, quantite FROM ajouter 
INNER JOIN produit ON ajouter.id_produit = produit.id_produit  
INNER JOIN ticket ON ajouter.id_ticket = ticket.id_ticket
WHERE ajouter.id_ticket = 1;

-- Afficher la liste des produits qui ne sont pas ajouté sur un ticket 
-- avec le (nom_produit, description_produit, prix_produit)
SELECT nom_produit, description_produit, prix_produit FROM ajouter 
RIGHT JOIN produit ON ajouter.id_produit = produit.id_produit WHERE ajouter.id_produit IS NULL;

-- Afficher la liste des vendeurs qui ne sont pas sont pas lié à un ticket 
-- (nom_vendeur, prenom_vendeur)
SELECT nom_vendeur, prenom_vendeur FROM 