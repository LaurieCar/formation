-- Mettre à jour le prix des produits augmenter le prix de 10%
UPDATE produit SET prix_produit = prix_produit*1.10;

-- Ajouter un nouveau vendeur
INSERT INTO vendeur (nom_vendeur,prenom_vendeur)
VALUE ('lavaure','steven');

-- Mettre en majuscule le nom et le prenom de tous les vendeurs
UPDATE vendeur SET nom_vendeur = UPPER(nom_vendeur), prenom_vendeur = UPPER(prenom_vendeur);

-- Remplacer la date (mois) des tickets du mois de decembre par janvier
UPDATE ticket SET date_ticket = DATE_ADD(date_ticket, interval 1 month) WHERE month(date_ticket) = 04;
UPDATE ticket SET date_ticket = DATE_ADD(date_ticket, INTERVAL 1 MONTH) WHERE month(date_ticket) = 11;

-- Supprimer le vendeur ajouté précédement
DELETE FROM vendeur WHERE id_vendeur = 4;