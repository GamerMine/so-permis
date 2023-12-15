import {
    Grid,
    Button,
    Box,
    GridItem,
    FormLabel,
    Input,
    Textarea,
    Checkbox,
    Select,
    FormControl,
    FormHelperText,
    Divider,
    border,
    IconButton,
    Text,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { IoIosAdd, IoIosRemove } from "react-icons/io";


export const FormArticle = ({ getFormulairesLength }) => {
    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            
        },

        label: {
            color: "black",
            fontWeight: "bold",
            fontSize: "20px",
        },

    };

    const [formulaires, setFormulaires] = useState([]);

    useEffect(() => {
        getFormulairesLength(formulaires.length);
    }, [formulaires.length, getFormulairesLength]);
    

    const formulaire = 
        <Box>
            <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='4%' w='50%' marginBottom='3%'>
                <GridItem colSpan={4}>
                    <FormLabel style={{ ...style.label }}>Sous-titre</FormLabel>
                    <Input id={'sousTitre'+formulaires.length} variant='flushed' placeholder="sous-titre" />
                </GridItem>

                <GridItem colSpan={4}>
                    <FormLabel style={{ ...style.label }}>Contenu</FormLabel>
                    <Textarea id={'contenu'+formulaires.length} variant='outline' size='md' placeholder="Contenu" />
                </GridItem>

                <GridItem colSpan={2}>
                    <FormLabel style={{ ...style.label }}>Image</FormLabel>
                    <Input id={'image'+formulaires.length} variant='unstyled' type="file" accept="image/*" size='md' />
                </GridItem>
                
            </Grid>
        </Box>
        
    /**
     * Méthode permettant d'ajouter un paragraphe
     */
    function ajouterParagraphe()
    {
        formulaires.push(formulaire);
        setFormulaires([...formulaires]);
    }

    function supprimerParagraphe()
    {
        formulaires.pop();
        setFormulaires([...formulaires]);
    }
    
    
    return (
        <Box>
            
            {formulaires}

            <Box align='center'>
                    <IconButton style={{ ...style.bouton }} size="md" marginRight='2%' onClick={ajouterParagraphe} icon={<IoIosAdd/>}/>
                    <IconButton style={{ ...style.bouton }} size="md" onClick={supprimerParagraphe} icon={<IoIosRemove/>}/>
            </Box>
        </Box>
    );
};