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
} from "@chakra-ui/react";


export const FormArticle = () => {
    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }

    };

    let formations = [];

    const formulaire = () => {
            <Box>
                <GridItem colSpan={4}>
                    <FormLabel>Sous-titre</FormLabel>
                    <Input variant='flushed' placeholder="sous-titre" />
                </GridItem>

                <GridItem colSpan={4}>
                    <FormLabel>Contenu</FormLabel>
                    <Textarea variant='outline' size='md' placeholder="Contenu" />
                </GridItem>

                <GridItem colSpan={2}>
                    <FormLabel>Image</FormLabel>
                    <Input variant='unstyled' type="file" accept="image/*" size='md' />
                </GridItem>
            </Box>
    
    }

    function ajouterParagraphe()
    {
        return {formulaire};
    }


    return (
        <Box>
            <h1>Hello</h1>
            {formulaire}

            <Box align='center'>
                    {/*Ajout d'un bouton + pour ajouter un paragraphe*/}
                    <Button style={{ ...style.bouton }} size="md" marginRight='2%' onClick={ajouterParagraphe()}>+</Button>
            </Box>
        </Box>
    );
};
