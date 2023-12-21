import React, { useState, useEffect } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    Input,
    Radio,
    RadioGroup,
    Textarea,
    Stack,
    Link,
    Spinner,
    Image
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { HOSTNAME } from "../Variables";

/**
 * Page permettant de modifier un article
 * @returns code HTML
 */
const ModifierArticle = () => {

    const { articleId } = useParams();
    const [article, setArticle] = useState({
        id: '',
        titre: '',
        infos: '',
        image: '',
        sources: ''
    });
    
    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        },

        label: {
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        },

        image: {
            maxWidth: "200px",
            maxHeight: "200px",
        },

    }

    const [urlImage, setUrlImage] = useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setUrlImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    useEffect(() => {
        // Fonction asynchrone pour récupérer les détails de l'article à partir du backend
        const fetchArticleDetails = async () => {
            try {
                verifConnexion();
                const response = await axios.get(`http://localhost:8080/ModifierArticle/${articleId}`);
                const articleData = response.data;
                setArticle({
                    id: articleData.id,
                    titre: articleData.titreActualite,
                    infos: articleData.infosActualite,
                    image: articleData.imageURL,
                    sources: articleData.sources
                });
                //Recuperation de l'image
                const url = HOSTNAME + '/public/images/' + articleData.imageURL;
                setUrlImage(url);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails de l'article :", error);
            }
        };

        fetchArticleDetails();
    }, [articleId]);

    const handleUpdate = async (formData) => {
        const response = await axios.post(HOSTNAME + '/UpdateArticle', formData);
        //console.log(response.data);
        window.location.replace("/GestionArticles");
    };

    function handleInputChange(event) {
        const { id, value } = event.target;
        setArticle(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    let navigate = useNavigate();
    const [content, setContent] = useState((
        <Stack style={{ top: "0", bottom: "0", position: "fixed", height: "100%", width: "100%" }}>
            <Spinner style={{ alignSelf: "center", position: "absolute", top: "50%", transform: "translateY(-50%)" }} />
        </Stack>
    ));
    
    const verifConnexion = async () => {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', '' + valeurDuCookie);
        const response = await axios.post(HOSTNAME + '/EstAdmin', formData);
        if (response.data !== true) {
            navigate("/");
        }
    }

    /**
     * Méthode permettant de récupérer les données du formulaire
     */
    function recupererDonnees() {
        let formData = new FormData();

        const titre = document.getElementById("titre").value;
        const sources = document.getElementById("sources").value;
        const image = document.getElementById("image").value;
        const infos = document.getElementById("infos").value;
        const files = document.getElementById("image");


        formData.append('id', '' + article.id);
        formData.append('titreActualite', '' + titre);
        formData.append('infosActualite', '' + infos);
        formData.append('imageURL', '' + image);
        formData.append('sources', '' + sources);
        if (files.files.length > 0) {
            const imageFile = files.files[0];
            formData.append('file', imageFile);
        }

        handleUpdate(formData);
    }

    return (
        <Stack style={{ gap: "0" }}>
            <Box>
                <Heading textAlign="center" marginTop='1%'>
                    Modifier un article
                </Heading>

                <Box align='center' marginBottom='1%'>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='4%' w='50%' marginBottom='3%'>

                        <GridItem colSpan={2}>
                            <FormLabel>Titre</FormLabel>
                            <Input id="titre" variant='flushed' placeholder="Titre" value={article.titre} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel>Sources</FormLabel>
                            <Input id="sources" variant='flushed' placeholder="source" value={article.sources} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel style={{ ...style.label }}>Image de l'article</FormLabel>
                            <Input id='image' variant='unstyled' type="file" accept="image/*" size='md' onChange={onImageChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <Image style={{ ...style.image }} src={urlImage} />
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormLabel style={{ ...style.label }}>Infos</FormLabel>
                            <Textarea id="infos" variant='outline' size='md' placeholder="Infos" value={article.infos} onChange={handleInputChange} />
                        </GridItem>
                    </Grid>
                </Box>

                <Box align='center' marginBottom='2%'>
                    <Checkbox id="newsletter" value="newsletter" colorScheme='teal' marginBottom='1%'> Envoyer dans une Newsletter </Checkbox>
                    <div>
                        <Button marginEnd='1%' style={{ ...style.bouton }} onClick={recupererDonnees}>VALIDER</Button>
                        <Link href="/GestionArticles"><Button colorScheme="red" >ANNULER</Button></Link>
                    </div>
                </Box>
            </Box>
        </Stack>
    );
}

export default ModifierArticle;
