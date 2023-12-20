import React, { useState, useEffect } from "react";
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
    Link, Center,
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {HOSTNAME} from "../Variables";
import { IoIosAdd, IoIosRemove } from "react-icons/io";

/**
 * Page permettant de modifier un article
 * @returns code HTML
 */
const ModifierForfaits = () => {
    const [permisSelect, setPermisSelect] = React.useState('permis')
    const { formationId } = useParams();
    const [formation, setFormation] = useState({
        idformation: '',
        prix: '',
        nom: '',
        infos: '',
        type_f: ''
    });
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
        // Fonction asynchrone pour récupérer les forfaits de l'article à partir du backend
        const fetchFormationDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/ModifierFormation/${formationId}`);
                const forfaitData = response.data;
                setFormation({
                    idformation: forfaitData.idformation,
                    prix: forfaitData.prix,
                    nom: forfaitData.nom,
                    infos: forfaitData.infos,
                    type_f: forfaitData.type_f
                });
                console.log(response.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails de la formation :", error);
            }
        };

        fetchFormationDetails();
    }, [formationId]);

    const handleUpdate = async (formData) => {
        const response = await axios.post(HOSTNAME+'/UpdateFormation', formData);
        window.location.replace("/GestionForfaits");
    };

    function handleInputChange(event) {
        const { id, value } = event.target;
        setFormation(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    let navigate = useNavigate();
    const verifConnexion = async () => {
        const valeurDuCookie = Cookies.get('compte');
        let formData = new FormData();
        formData.append('compte', '' + valeurDuCookie);
        const response = await axios.post(HOSTNAME+'/EstAdmin', formData);
        if (response.data != true) {
            navigate("/");
        }
    }

    /**
     * Méthode permettant de récupérer les données du formulaire
     */
    function recupererDonnees() {
        let formData = new FormData();

        const nom = document.getElementById("nom").value;
        const prix = document.getElementById("prix").value;
        const info = document.getElementById("info").value;
        const permisSelecttest = permisSelect;

        formData.append('nom', ''+nom);
        formData.append('infos', ''+info);
        formData.append('prix', ''+prix);
        formData.append('type_f', ''+permisSelecttest);

        handleUpdate(formData);
    }
    verifConnexion();
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Ajouter un forfait / Modifier un forfait
            </Heading>

            <Box align='center' marginBottom='2%'>
                <Center spacing="24px" marginY='1%' >
                    <RadioGroup id="formationSelect" onChange={setPermisSelect} value={permisSelect}>
                        <Stack direction="row">
                            <Radio value='permis'>Permis</Radio>
                            <Radio value='conduite_accompagnee'>Conduite Accompagnée</Radio>
                            <Radio value='code'>Code de la route</Radio>

                        </Stack>
                    </RadioGroup>
                </Center>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Nom</FormLabel>
                        <Input id="nom" variant='flushed' placeholder="Nom" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel >Prix</FormLabel>
                        <Input id="prix" variant='flushed' placeholder="Prix" />
                    </GridItem>

                    <GridItem colSpan={4}>
                        <FormLabel >Description</FormLabel>
                        <Textarea id="info" variant='outline' size='md' placeholder="Info" />
                    </GridItem>
                </Grid>
                <Button marginEnd='1%' style={{ ...style.bouton }} onClick={recupererDonnees}>VALIDER</Button>
                <Link href="/GestionForfaits"><Button colorScheme="red" >ANNULER</Button></Link>
            </Box>
        </Box>
    );
}
export default ModifierForfaits;
