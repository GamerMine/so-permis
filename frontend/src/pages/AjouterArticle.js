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
    Textarea,
    HStack,
    RadioGroup,
    Radio,
    Stack,
    Checkbox,
    FormControl,
} from "@chakra-ui/react";
import { FormArticle } from "../components/FormArticle";

/**
 * Page permettant d'ajouter un article ou de modifier un article
 * @returns code HTML
 */
const AjouterArticle = () => {

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const handleDelete = async (item) => {
        const formData = new FormData();

        const response = await axios.post('http://localhost:8080/AjouterArticle', //TestConnexion
        formData);
        window.location.reload();
      };

    const [tailleFormulaires, setTailleFormulaires] = useState(0);

    const handleGetFormulairesLength = (length) => {
        setTailleFormulaires(length);
    };

    const [value, setValue] = React.useState("article")

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
                            <Input id="source" variant='flushed' placeholder="Sources"/>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel style={{ ...style.label }}>Image de l'article</FormLabel>
                            <Input id='image' variant='unstyled' type="file" accept="image/*" size='md'/>
                        </GridItem>

                    </Grid>
                    
                    {/*<GridItem colSpan={4}>
                            <FormLabel>Contenu</FormLabel>
                            <Textarea variant='outline' size='md' placeholder="Contenu"/>
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel>Image</FormLabel>
                            <Input variant='unstyled' type="file" accept="image/*" size='md'/>
                        </GridItem>*/}

                    <FormArticle getFormulairesLength={handleGetFormulairesLength} />
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

        if (value === "article") {
            const titre = document.getElementById("titre").value;
            const sources = document.getElementById("source").value;
            const image = document.getElementById("image").value;

            const formulaires = [] //tableau contenant les différentes parties de l'article

            for (let i = 0; i < tailleFormulaires; i++) {
                const sousTitre = document.getElementById("sousTitre" + i).value;
                const contenu = document.getElementById("contenu" + i).value;
                const image = document.getElementById("image" + i).value;

                formulaires.push({ sousTitre: sousTitre, contenu: contenu, image: image });
            }

            JSON.stringify(formulaires);
            console.log(JSON.stringify(formulaires));
            
            console.log(titre);
            console.log(sources);
            console.log(image);
            console.log(formulaires);
        }
        else {
            const titre = document.getElementById("titre").value;
            const source = document.getElementById("source").value;

            console.log(titre);
            console.log(source);
        }

        const newsletter = document.getElementById("newsletter").checked;

        console.log(newsletter);

    }

    return (
        <Box>
            <Heading textAlign="center" marginTop='1%'>
                Ajouter un article / Modifier un article
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