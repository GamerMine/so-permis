DROP TABLE IF EXISTS FORMATION CASCADE;
DROP TABLE IF EXISTS ADMINISTRATEUR CASCADE;
DROP TABLE IF EXISTS NEWSLETTER CASCADE;
DROP TABLE IF EXISTS ACTUALITE CASCADE;

CREATE TABLE IF NOT EXISTS FORMATION
(
    idFormation SERIAL Primary Key NOT NULL,
    prix varchar(10) NOT NULL,
    nom varchar(30) NOT NULL,
    infos varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS ADMINISTRATEUR
(
    idAdmin SERIAL Primary Key NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(120) NOT NULL
);

CREATE TABLE IF NOT EXISTS NEWSLETTER 
(
    idNewsletter SERIAL Primary Key NOT NULL,
    email varchar NOT NULL,
    nom varchar(30),
    prenom varchar(30)
);

CREATE TABLE IF NOT EXISTS ACTUALITE
(
    idActualite SERIAL Primary Key NOT NULL,
    titreActualite varchar NOT NULL,
    infosActualite varchar NOT NULL,
    imageURL varchar,
    sources varchar
);

INSERT INTO ACTUALITE (titreActualite, infosActualite, imageURL, sources) VALUES
(
    'Léo est trop fort', 'Car il a réussi a connecter la base', 'imageDeLeoLeBg.png', 'léo'
);