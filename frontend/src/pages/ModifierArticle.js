import { useState, useEffect } from "react";
import {
    Box,
    Button,
    Checkbox,
    FormLabel,
    Grid,
    GridItem,
    Heading,
    IconButton,
    Input,
    Radio,
    RadioGroup,
    Textarea,
    Tooltip,
    useToast,
    Stack,
    Link,
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

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
    const [formulaires, setFormulaires] = useState([]);
    const [value, setValue] = useState("article");

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

    }

    useEffect(() => {
        // Fonction asynchrone pour récupérer les détails de l'article à partir du backend
        const fetchArticleDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/ModifierArticle/${articleId}`);
                const articleData = response.data;
                setArticle({
                    id: articleData.id,
                    titre: articleData.titreActualite,
                    infos: articleData.infosActualite,
                    image: articleData.imageURL,
                    sources: articleData.sources
                });
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails de l'article :", error);
            }
        };

        fetchArticleDetails();
    }, [articleId]);

    const handleUpdate = async (formData) => {
        const response = await axios.post('http://localhost:8080/UpdateArticle', formData);
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

    const verifConnexion = async () => {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', '' + valeurDuCookie);
        const response = await axios.post('http://localhost:8080/EstAdmin', formData);
        if (response.data != true) {
            navigate("/");
        }
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
            const infos = document.getElementById("infos").value;

            formData.append('id', '' + article.id);
            formData.append('titreActualite', '' + titre);
            formData.append('infosActualite', '' + infos);
            formData.append('imageURL', '' + image);
            formData.append('sources', '' + sources);
        }
        else {
            const titre = document.getElementById("titre").value;
            const source = document.getElementById("source").value;

        }

        const newsletter = document.getElementById("newsletter").checked;

        handleUpdate(formData);
    }

    return (
        <Box>
            <Heading textAlign="center" marginTop='1%'>
                Modifier un article
            </Heading>

            <Box align='center'>
                <RadioGroup onChange={setValue} value={value} marginStart='40%'>
                    <Stack direction="row">
                        <Radio value="article">Écrire l'article</Radio>
                        <Radio value="source">Ajouter une source</Radio>
                    </Stack>
                </RadioGroup>
            </Box>

            {value === "article" && (
                <Box align='center' marginBottom='1%'>
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='4%' w='50%' marginBottom='3%'>

                        <GridItem colSpan={2}>
                            <FormLabel>Titre</FormLabel>
                            <Input id="titre" variant='flushed' placeholder="Titre" value={article.titre} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel>Sources</FormLabel>
                            <Input id="source" variant='flushed' placeholder="Sources" value={article.sources} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel style={{ ...style.label }}>Image de l'article</FormLabel>
                            <Input id='image' variant='unstyled' type="file" accept="image/*" size='md' onChange={handleInputChange} />
                        </GridItem>



                        <GridItem colSpan={4}>
                            <FormLabel style={{ ...style.label }}>Infos</FormLabel>
                            <Textarea id="infos" variant='outline' size='md' placeholder="Infos" value={article.infos} onChange={handleInputChange} />
                        </GridItem>
                    </Grid>
                </Box>
            )}

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

export default ModifierArticle;
