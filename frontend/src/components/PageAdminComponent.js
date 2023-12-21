import {Stack, Text} from "@chakra-ui/react";
import {MultiHorizontalCardsWithButton, OCard} from "./MultiHorizontalCardsWithButton";
import React from "react";

const PageAdminComponent = () => {
    const style = {
        cardsServices: {
            margin: "50"
        },

        title:{
            margin:"50px",
            color: "black",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "45px",
            wordWrap: 'break-word',
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
            textAlign:"center"
        },
    }

    return (
        <Stack style={{backgroundImage: "url('./images/code_article_ligne-de-rives.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

            <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>DASHBOARD</Text>

            <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                [
                    new OCard("", "AJOUTER UN ARTICLE", "Ajouter un article","", "/AjouterArticle", false, true),
                    new OCard("", "GESTION DES ARTICLES", "Gestion des Articles","", "/GestionArticles", false, true),
                    new OCard("", "AJOUTER UN FORFAIT", "Ajouter un Forfait ","", "/AjouterForfaits", false, true),
                    new OCard("", "GESTION DES FORFAITS", "Nos forfaits code","", "/GestionForfaits", false, true),
                    new OCard("", "CREATION D'UN COMPTE ", "Création d'un Compte","", "/CreationCompte", false, true),
                ]} />

        </Stack>
    )
}

export default PageAdminComponent