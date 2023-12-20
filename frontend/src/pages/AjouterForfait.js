import React from "react";
import {
    Box,
    Heading,
    Button,
    Grid,
    GridItem,
    Link,
    FormLabel,
    Input,
    Textarea, RadioGroup, Stack, Radio, Center,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import {HOSTNAME} from "../Variables";

const AjouterForfait = () => {
    
    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    let navigate = useNavigate();
    
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
    const [permisSelect, setPermisSelect] = React.useState('permis')

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


        console.log(nom);
        console.log(prix);
        console.log(info);
        console.log(permisSelecttest);

        handleUpdate(formData);


    }


    const handleUpdate = async (formData) => {
        const response = await axios.post(HOSTNAME+'/AjouterFormations', formData);
       window.location.replace("/GestionForfaits");

    };


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
                            <Radio value='annulation'>Annulation</Radio>

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

export default AjouterForfait;