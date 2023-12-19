import React from "react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack, Text} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import {HOSTNAME} from "../Variables";

const PageAdmin = () => {

    const verifConnexion = async () =>
    {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', ''+valeurDuCookie);
        const response = await axios.post(HOSTNAME+'/EstAdmin',
            formData);
        if (response.data != true)
        {
            navigate("/");
        }
        console.log(response.data);
    }
    let navigate = useNavigate();


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

    //const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;
    verifConnexion();
    return (
        <Stack style={{gap: 0}} >
            <Stack style={{backgroundImage: "url('./images/code_article_ligne-de-rives.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>DASHBOARD</Text>

                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "AJOUTER UN ARTICLE", "Ajouter un article","", "/AjouterArticle"),
                        new OCard("", "GESTION DES ARTICLES", "Gestion des Articles","", "/GestionArticles"),
                        new OCard("", "AJOUTER UN FORFAIT", "Ajouter un Forfait ","", "/AjouterForfaits"),
                        new OCard("", "GESTION DES FORFAITS", "Nos forfaits code","", "/GestionForfaits"),
                        new OCard("", "CREATION D'UN COMPTE ", "Création d'un Compte","", "/CreationCompte"),
                    ]} />

            </Stack>

        </Stack>

    );
};

export default PageAdmin