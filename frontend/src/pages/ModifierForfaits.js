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
    Link, Center, Spinner,
} from "@chakra-ui/react";
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {HOSTNAME} from "../Variables";

/**
 * Page permettant de modifier un article
 * @returns code HTML
 */
const ModifierForfaits = () => {
    const { formationId } = useParams();
    const [formation, setFormation] = useState({
        idformation: '',
        prix: '',
        nom: '',
        infos: '',
        type_f: ''
    });
    let navigate = useNavigate();
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
    const [value, setValue] =    useState("");

    useEffect(() => {
        // Fonction asynchrone pour récupérer les forfaits de l'article à partir du backend
        const fetchFormationDetails = async () => {
            try {
                const response = await axios.get(HOSTNAME+`/ModifierFormation/${formationId}`);
                const forfaitData = response.data;
                setFormation({
                    idformation: forfaitData.idformation,
                    prix: forfaitData.prix,
                    nom: forfaitData.nom,
                    infos: forfaitData.infos,
                    type_f: forfaitData.type_f
                });
                setValue(forfaitData.type_f);
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

    const [content, setContent] = useState((
        <Stack style={{top: "0", bottom: "0", position: "fixed", height: "100%", width: "100%"}}>
            <Spinner style={{alignSelf: "center", position: "absolute", top: "50%", transform: "translateY(-50%)"}}/>
        </Stack>
    ));

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
        const info = document.getElementById("infos").value;
        formData.append('id', '' + formation.idformation);
        formData.append('nom', ''+nom);
        formData.append('infos', ''+info);
        formData.append('prix', ''+prix);
        formData.append('type_f', ''+value);

        handleUpdate(formData);
    }

    verifConnexion();

    return (
        <Stack style={{gap: 0}}>
            <Box>
                <Heading textAlign="center" paddingTop="20px">
                    Modifier un forfait
                </Heading>

                <Box align='center' marginBottom='2%'>
                    { formation.type_f != "express" && formation.type_f != "" && (
                        <Center spacing="24px" marginY='1%' >
                            <RadioGroup id="type_f" value={value} onChange={setValue}>
                                <Stack direction="row">
                                    <Radio value='permis'>Permis</Radio>
                                    <Radio value='conduite_accompagnee'>Conduite Accompagnée</Radio>
                                    <Radio value='code'>Code de la route</Radio>
                                    <Radio value='annulation'>Annulation</Radio>
                                </Stack>
                            </RadioGroup>
                        </Center>
                        )}
                    <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                        <GridItem colSpan={2}>
                            <FormLabel>Nom</FormLabel>
                            <Input id="nom" variant='flushed' placeholder="Nom" value={formation.nom} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={2}>
                            <FormLabel >Prix</FormLabel>
                            <Input id="prix" variant='flushed' placeholder="Prix" value={formation.prix} onChange={handleInputChange} />
                        </GridItem>

                        <GridItem colSpan={4}>
                            <FormLabel >Description</FormLabel>
                            <Textarea id="infos" variant='outline' size='md' placeholder="Info" value={formation.infos} onChange={handleInputChange} />
                        </GridItem>
                    </Grid>
                    <Button marginEnd='1%' style={{ ...style.bouton }} onClick={recupererDonnees}>VALIDER</Button>
                    <Link href="/GestionForfaits"><Button colorScheme="red" >ANNULER</Button></Link>
                </Box>
            </Box>
        </Stack>
    );
}
export default ModifierForfaits;
