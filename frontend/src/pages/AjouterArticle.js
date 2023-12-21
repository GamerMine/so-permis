import React, { useState } from "react";
import {
    Box,
    Heading,
    Button,
    Grid,
    GridItem,
    FormLabel,
    Input,
    Checkbox,
    Textarea,
    Image
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import { HOSTNAME } from "../Variables";

/**
 * Page permettant d'ajouter un article 
 * @returns code HTML
 */
const AjouterArticle = () => {

    const [urlImage, setUrlImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUrlImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        },

        image: {
            maxWidth: "200px",
            maxHeight: "200px",
        },
    }

    const navigate = useNavigate();
    const handleUpdate = async (formData) => {
        await axios.post(HOSTNAME + '/AjouterArticle', formData);
        navigate("/GestionArticles");

    };

    const verifConnexion = async () => {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', '' + valeurDuCookie);
        const response = await axios.post(HOSTNAME + '/EstAdmin',
            formData);
        if (response.data !== true) {
            navigate("/");
        }
    }

    verifConnexion();
    /**
     * Méthode permettant de récupérer les données du formulaire
     */
    function recupererDonnees() {
        let formData = new FormData();

        const titre = document.getElementById("titre").value;
        const sources = document.getElementById("source").value;
        const image = document.getElementById("image").value;
        const contenu = document.getElementById("contenu").value;
        const images = document.getElementById("image");
        const newsletterChecked = document.getElementById("newsletter").checked;

        formData.append('titreActualite', '' + titre);
        formData.append('infosActualite', '' + contenu);
        formData.append('imageURL', '' + image);
        formData.append('sources', '' + sources);
        formData.append('newsletter', '' + newsletterChecked);
        if (images.files.length > 0) {
            const imageFile = images.files[0];
            formData.append('file', imageFile);
        }
        console.log(formData);
        handleUpdate(formData);

        const newsletter = document.getElementById("newsletter").checked;
    }

    return (
        <Box>
            <Heading textAlign="center" marginTop='1%'>
                Ajouter un article
            </Heading>

            <Box align='center' marginBottom='1%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='4%' w='50%' marginBottom='3%'>

                    <GridItem colSpan={2}>
                        <FormLabel>Titre</FormLabel>
                        <Input id="titre" variant='flushed' placeholder="Titre" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel>Sources</FormLabel>
                        <Input id="source" variant='flushed' placeholder="Sources" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel style={{ ...style.label }}>Image de l'article</FormLabel>
                        <Input id='image' variant='unstyled' type="file" accept="image/*" size='md' onChange={onImageChange} />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <Image style={{ ...style.image }} src={urlImage} fallbackSrc='https://via.placeholder.com/200' />
                    </GridItem>

                    <GridItem colSpan={4}>
                        <FormLabel>Contenu</FormLabel>
                        <Textarea id="contenu" variant='outline' size='md' placeholder="Contenu" />
                    </GridItem>
                </Grid>
            </Box>

            <Box align='center' marginBottom='2%'>
                <Checkbox id="newsletter" value="newsletter" colorScheme='teal' marginBottom='1%'> Envoyer dans une Newsletter </Checkbox>
                <div>
                    <Button marginEnd='1%' style={{ ...style.bouton }} onClick={recupererDonnees}>VALIDER</Button>
                    <NavLink to="/GestionArticles"><Button colorScheme="red" >ANNULER</Button></NavLink>
                </div>
            </Box>
        </Box>
    );
}

export default AjouterArticle;