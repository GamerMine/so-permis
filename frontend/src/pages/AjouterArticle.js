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
} from "@chakra-ui/react";

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
                <Box align='center' marginBottom='2%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='4%'>
                    <GridItem colSpan={2}>
                        <FormLabel>Titre</FormLabel>
                        <Input variant='flushed' placeholder="Titre" />
                    </GridItem>

                    <GridItem colSpan={2}>
                        <FormLabel>Sources</FormLabel>
                        <Input variant='flushed' placeholder="Sources" />
                    </GridItem>

                    <GridItem colSpan={4}>
                        <FormLabel>Contenu</FormLabel>
                        <Textarea variant='outline' size='md' placeholder="Contenu" />
                    </GridItem>
                </Grid>
                <Button marginEnd='1%' style={{ ...style.bouton }}>VALIDER</Button>
                <Link href="/GestionArticles"><Button colorScheme="red" >ANNULER</Button></Link>
                </Box>
            );
        }

        return (
            <><Button marginEnd='1%' style={{ ...style.bouton }}>VALIDER</Button><Link href="/GestionArticles"><Button colorScheme="red">ANNULER</Button></Link></>
        );
        
        
    }

    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Ajouter un article / Modifier un article
            </Heading>

            <HStack spacing="24px" marginStart='40%' marginBottom='2%'>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                        <Radio value="article">Écrire l'article</Radio>
                        <Radio value="source">Ajouter une source</Radio>
                    </Stack>
                </RadioGroup>
            </HStack>

            {changerFormulaire()}
        </Box>
    );
}

export default AjouterArticle;