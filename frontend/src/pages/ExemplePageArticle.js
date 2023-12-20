import React from "react";
import {
    Box,
    Heading,
    Text,
} from "@chakra-ui/react";

/**
 * Page permettant d'afficher un article
 * @returns code HTML
 */
const ExemplePageArticle = () => {

    const titre = "Titre de l'article";
    const sources = "Anaelle";
    const image = "/images/pagePermis.jpg";

    const contenus = [ { 
        "sousTitre": "titre 1 ",
        "contenu": "lorem ipsum dolor sit amet lorergzrgzzm ipsum dolor sit amet lorem ipsum dolor sit amet lbtrthorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
        "image": ""
      },
      {
        "sousTitre": "titre 2 ",
        "contenu": "lorem ipsum dolor sit amet lorem zggipsuzh dolor sit ametlorem ipsu,u, doloht amet lthoremhegrger ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet ",
        "image": "/images/SAROOL LOGO.png"
      }]
    
    const style = {
        transition: {
            width: "100%",
            height: "20px", 
            background: "linear-gradient(180deg, rgba(241, 241, 241, 0) 0%, #F1F1F1 100%)"
        },

        imgFond: {
            objectFit: "cover",
            backgroundImage: "url("+image+")",
            width: "100%",
            height: "300px",
            marginBottom: "-20px",
            backgroundPosition: "center",
        },

        texte: {
            fontFamily: "Montserrat",
        },

        sousTitre: {
            fontFamily: "Montserrat",
            marginBottom: "1%",
            color: "#1EC6B1",
        },
    }

    const article = []
    contenus.forEach(element => {
        article.push(
            <Box>
                <Heading style={{ ...style.sousTitre }} fontSize='xl'>{element.sousTitre}</Heading>
                <Text style={{ ...style.texte }}>{element.contenu}</Text>
                {afficherImage(element.image)}
            </Box>
        )
    });

    /**
     * Méthode permettant d'afficher une image si elle est renseignée
     * @param {String} image image à afficher
     * @returns code HTML de l'image
     */
    function afficherImage(image) {
        if (image !== "") {
            return (
                <Box>
                    <img src={image} alt="image" />
                </Box>
            )
        }
    }

    return (
        <Box>
            <Box style={{ ...style.imgFond }}>
            </Box>

            <div style={{ ...style.transition}}></div>

            <Box align='left' marginTop='2%' backgroundColor='white' marginX='5%'>
                <Heading marginBottom='1%'> {titre} </Heading>

                {article}

                <Heading style={{ ...style.sousTitre }} fontSize='xl'>Sources</Heading>
                <Text style={{ ...style.texte }}>{sources}</Text>

            </Box>
        </Box>
    );
}

export default ExemplePageArticle;