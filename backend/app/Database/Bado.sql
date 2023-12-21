DROP TABLE IF EXISTS FORMATION CASCADE;
DROP TABLE IF EXISTS ADMINISTRATEUR CASCADE;
DROP TABLE IF EXISTS NEWSLETTER CASCADE;
DROP TABLE IF EXISTS ACTUALITE CASCADE;

CREATE TABLE IF NOT EXISTS FORMATION
(
    idFormation SERIAL Primary Key NOT NULL,
    prix varchar(10) NOT NULL,
    nom varchar(100) NOT NULL,
    infos varchar NOT NULL,
    type_f varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS ADMINISTRATEUR
(
    idAdmin SERIAL Primary Key NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(120) NOT NULL,
    id_unique varchar(250)
);

CREATE TABLE IF NOT EXISTS NEWSLETTER 
(
    idNewsletter SERIAL Primary Key NOT NULL,
    email varchar NOT NULL,
    nom varchar(30),
    prenom varchar(30),
    guid varchar(200),
    actif boolean not null default false
);

CREATE TABLE IF NOT EXISTS ACTUALITE
(
    idActualite SERIAL Primary Key NOT NULL,
    titreActualite varchar(200) NOT NULL,
    infosActualite varchar(250) NOT NULL,
    imageURL varchar(1000),
    sources varchar(250)
);

INSERT INTO ACTUALITE (titreActualite, infosActualite, imageURL, sources) VALUES
(
    'Léo est trop fort', 'Car il a réussi a connecter la base', 'imageDeLeoLeBg.png', 'léo'
);

INSERT INTO ADMINISTRATEUR(email, password, id_unique) VALUES 
(
    'enorme.bg@leo.fr', 'chsuikunu', '1535766848483415641343135'
);
INSERT INTO FORMATION (prix, nom, infos, type_f) VALUES
('130€', 'FORFAIT CODE SEUL', '', 'code'),
('990€', 'FORFAIT B COMPLET', 'Code + 20 leçons de conduite', 'permis'),
('890€', 'FORFAIT B', '20 leçons de conduite (sans code)', 'permis'),

('1210€','FORFAIT B COMPLET','Code + 25 leçons de conduite', 'permis'),
('1110€','FORFAIT B','25 leçons de conduite (sans code)', 'permis'),

('1430€', 'FORFAIT B COMPLET', 'Code + 30 leçons de conduite', 'permis'),
('1330€', 'FORFAIT B', '30 leçons de conduite', 'permis'),

('1200€','FORFAIT CONDUITE ACCOMPAGNÉE','Code + 20 leçons', 'conduite_accompagnee'),
('1100€','FORFAIT CONDUITE ACCOMPAGNÉE','Code + 20 leçons (sans code)', 'conduite_accompagnee'),

('250','FORFAIT CODE EXPRESS EN 4 JOURS','', 'code'),
('1390€','FORFAIT B ACCÉLÉRÉ EN 1 MOIS','', 'express'),

('150€','ANNULATION','Code', 'annulation'),
('250€','ANNULATION','Code Express 4 jours', 'annulation'),

('410€','ANNULATION','Code + conduite', 'annulation'),
('660€','ANNULATION','Code + conduite express 15 jours', 'annulation'),

('100€','CONDUITE SUPERVISÉE','', 'code');
