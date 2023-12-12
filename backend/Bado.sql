CREATE TABLE IF NOT EXISTS FORMATION
{
    idFormation int Primary Key NOT NULL,
    prix varchar(10) NOT NULL,
    nom varchar(30) NOT NULL,
    infos varchar NOT NULL
}

CREATE TABLE IF NOT EXISTS ADMINISTRATEUR
{
    idAdmin int Primary Key NOT NULL,
    email varchar(30) NOT NULL,
    password varchar(120) NOT NULL
}

CREATE TABLE IF NOT EXISTS NEWSLETTER 
{
    idNewsletter int Primary Key NOT NULL,
    email varchar NOT NULL
    nom varchar(30),
    prenom varchar(30)
}

CREATE TABLE IF NOT EXISTS ACTUALITE
{
    idActualite int Primary Key NOT NULL,
    titreActualite varchar NOT NULL,
    infosActualite varchar NOT NULL,
    imageURL varchar,
    sources varchar
}
