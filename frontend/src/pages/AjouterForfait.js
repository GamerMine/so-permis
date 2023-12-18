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
    Textarea,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

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
      const response = await axios.post('http://localhost:8080/EstAdmin',
      formData);
      if (response.data != true)
      {
        navigate("/");
      }
      console.log(response.data);
    }

    verifConnexion();
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Ajouter un forfait / Modifier un forfait
            </Heading>
            <Box align='center' marginBottom='2%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Nom</FormLabel>
                        <Input variant='flushed' placeholder="Nom" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel>Prix</FormLabel>
                        <Input variant='flushed' placeholder="Prix" />
                    </GridItem>

                    <GridItem colSpan={4}>
                        <FormLabel>Description</FormLabel>
                        <Textarea variant='outline' size='md' placeholder="Description" />
                    </GridItem>
                </Grid>
                <Button marginEnd='1%' style={{ ...style.bouton }}>VALIDER</Button>
                <Link href="/GestionForfaits"><Button colorScheme="red" >ANNULER</Button></Link>
            </Box>
        </Box>
    );
}

export default AjouterForfait;