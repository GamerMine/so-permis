import React, { useState } from "react";
import {
    Box,
    Heading,
    Button,
    Grid,
    GridItem,
    Link,
    FormLabel,
    Input,
    HStack,
    RadioGroup,
    Radio,
    Stack,
    Checkbox,
    Textarea,
} from "@chakra-ui/react";
import { FormArticle } from "../components/FormArticle";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {HOSTNAME} from "../Variables";

/**
 * Page permettant d'ajouter un article 
 * @returns code HTML
 */
const AjouterArticle = () => {

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const handleUpdate = async (formData) => {
        const response = await axios.post(HOSTNAME+'/AjouterArticle', formData);
        window.location.replace("/GestionArticles");
    };

    const [tailleFormulaires, setTailleFormulaires] = useState(0);

    const handleGetFormulairesLength = (length) => {
        setTailleFormulaires(length);
    };

    let navigate = useNavigate();

    const verifConnexion = async () => {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', '' + valeurDuCookie);
        const response = await axios.post(HOSTNAME+'/EstAdmin',
            formData);
        if (response.data != true) {
            navigate("/");
        }
        console.log(response.data);
    }

    const [value, setValue] = React.useState("article")
    verifConnexion();
    /**
     * Méthode permettant de changer le formulaire en fonction de la valeur du radio bouton
     * @returns code HTML du formulaire
     */
    function changerFormulaire() {
        if (value === "article") {
            return (
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
                            <Input id='image' variant='unstyled' type="file" accept="image/*" size='md' />
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormLabel>Contenu</FormLabel>
                            <Textarea id="contenu" variant='outline' size='md' placeholder="Contenu" />
                        </GridItem>
                    </Grid>
                </Box>
            );

        }

        return (
            <Box align='center' marginBottom='1%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Titre</FormLabel>
                        <Input id="titre" variant='flushed' placeholder="Titre" />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel>URL (source)</FormLabel>
                        <Input id="source" variant='flushed' placeholder="URL" />
                    </GridItem>
                </Grid>
            </Box>
        );


    }


    /**
     * Méthode permettant de récupérer les données du formulaire
     */
    function recupererDonnees() {
        let formData = new FormData();

        if (value === "article") {
            const titre = document.getElementById("titre").value;
            const sources = document.getElementById("source").value;
            const image = document.getElementById("image").value;
            const contenu = document.getElementById("contenu").value;


            formData.append('titreActualite', '' + titre);
            formData.append('infosActualite', '' + contenu);
            formData.append('imageURL', '' + image);
            formData.append('sources', '' + sources);

            handleUpdate(formData);
        }
        else {
            const titre = document.getElementById("titre").value;
            const source = document.getElementById("source").value;

        }

        const newsletter = document.getElementById("newsletter").checked;
    }

    return (
        <Box>
            <Heading textAlign="center" marginTop='1%'>
                Ajouter un article
            </Heading>

            <Box align='center'>
                <HStack spacing="24px" marginStart='40%' marginY='1%'>
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="row">
                            <Radio value="article">Écrire l'article</Radio>
                            <Radio value="source">Ajouter une source</Radio>
                        </Stack>
                    </RadioGroup>
                </HStack>
            </Box>

            {changerFormulaire()}

            <Box align='center' marginBottom='2%'>
                <Checkbox id="newsletter" value="newsletter" colorScheme='teal' marginBottom='1%'> Envoyer dans une Newsletter </Checkbox>
                <div>
                    <Button marginEnd='1%' style={{ ...style.bouton }} onClick={recupererDonnees}>VALIDER</Button>
                    <Link href="/GestionArticles"><Button colorScheme="red" >ANNULER</Button></Link>
                </div>
            </Box>
        </Box>
    );
}

export default AjouterArticle;