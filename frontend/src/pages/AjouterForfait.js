import React from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    VStack,
    Stack,
    Card,
    CardBody,
    SimpleGrid,
    Heading,
    Button,
    Grid,
    GridItem,
    Link,
    FormLabel,
    Input,
    Textarea,
} from "@chakra-ui/react";

const AjouterForfait = () => {
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Ajouter un forfait / Modifier un forfait
            </Heading>
            <Box align='center' marginBottom='2%'>
                <Grid templateColumns="repeat(4, 1fr)" gap={6} marginTop='5%' w='50%' marginBottom='5%'>
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
                <Button marginEnd='1%'>VALIDER</Button>
                <Button>ANNULER</Button>
            </Box>
        </Box>
    );

}

export default AjouterForfait;