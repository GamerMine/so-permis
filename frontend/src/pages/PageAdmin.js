import React from "react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack, Text} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const PageAdmin = () => {

    const verifConnexion = async () =>
    {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', ''+valeurDuCookie);
        const response = await axios.post('http://localhost:8080/EstAdmin',
            formData);
        if (response.data !== true)
        {
            navigate("/");
        }
        // console.log(response.data);
    }
    let navigate = useNavigate();


    const style = {
        cardsServices: {
            margin: "150px"
        },

        title:{
            margin:"50px",
            color: "#FFF",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
        },
    }

    // const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;
    verifConnexion();
    return (
        <Stack style={{gap: 0}} >
            <Stack style={{backgroundImage: "url('./images/code_article_ligne-de-rives.jpeg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Dashboard</Text>

                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "AJOUTER UN ARTICLE", "Ajouter un article","article", "/AjouterArticle"),
                        new OCard("", "GESTION DES ARTICLES", "Gestion des Articles","code", "/GestionArticles"),
                        new OCard("", "AJOUTER UN FORFAIT", "Ajouter un Forfait ","conduite", "/AjouterForfaits"),
                        new OCard("", "GESTION DES FORFAITS", "Nos forfaits code","code", "/GestionForfaits"),
                        new OCard("", "CREATION D'UN COMPTE ", "Création d'un Compte","code", "/CreationCompte"),


                    ]} />

            </Stack>

        </Stack>

    );
};

export default PageAdmin