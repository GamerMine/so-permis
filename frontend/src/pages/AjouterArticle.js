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
    HStack,
    RadioGroup,
    Radio,
    Stack,
    Checkbox,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";
import { FormArticle } from "../components/FormArticle";

const AjouterArticle = () => {
    
    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const [value, setValue] = React.useState("article")

    function changerFormulaire() {
        if (value === "article") {
            return (
                <Box align='center' marginBottom='1%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='4%' w='50%' marginBottom='3%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Titre</FormLabel>
                        <Input variant='flushed' placeholder="Titre" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel>Sources</FormLabel>
                        <Input variant='flushed' placeholder="Sources"/>
                    </GridItem>

                    {/*<GridItem colSpan={4}>
                        <FormLabel>Contenu</FormLabel>
                        <Textarea variant='outline' size='md' placeholder="Contenu"/>
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel>Image</FormLabel>
                        <Input variant='unstyled' type="file" accept="image/*" size='md'/>
            </GridItem>*/}

                    {FormArticle}
                </Grid>
                
                </Box>
            );
        }

        return (
            <Box align='center' marginBottom='1%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Titre</FormLabel>
                        <Input variant='flushed' placeholder="Titre" />
                    </GridItem>
                    <GridItem colSpan={2}>
                        <FormLabel>URL (source)</FormLabel>
                        <Input variant='flushed' placeholder="URL"/>
                    </GridItem>
                </Grid>
            </Box>
        );
        
        
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
                <Checkbox value="newsletter" colorScheme='teal' marginBottom='1%'> Envoyer dans une Newsletter </Checkbox>
                <div>
                    <Button marginEnd='1%' style={{ ...style.bouton }}>VALIDER</Button>
                    <Link href="/GestionArticles"><Button colorScheme="red" >ANNULER</Button></Link>
                </div>
            </Box>
        </Box>
    );
}

export default AjouterArticle;