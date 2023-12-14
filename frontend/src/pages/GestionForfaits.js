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
    HStack,
    RadioGroup,
    Radio,
} from "@chakra-ui/react";
import { useState } from 'react';

const GestionForfait = () => {

    const [value, setValue] = React.useState("permis")

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Forfaits
            </Heading>

            <HStack spacing="24px" marginStart='10%' marginBottom='2%'>
                <RadioGroup onChange={setValue} value={value}>
                    <Stack direction="row">
                        <Radio value="permis">Permis</Radio>
                        <Radio value="code">Code de la route</Radio>
                    </Stack>
                </RadioGroup>
            </HStack>

            <Link href="/AjouterForfaits"> <Button style={{ ...style.bouton }} marginStart='10%' marginBottom='2%'>AJOUTER</Button></Link>

            <Card>
                <CardBody>
                    <Table variant="striped" colorScheme="gray">
                        <Thead backgroundColor='black' >
                            <Tr>
                                <Th color='white'>Nom</Th>
                                <Th color='white'>Prix</Th>
                                <Th color='white'>Description</Th>
                                <Th color='white'>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Forfait B</Td>
                                <Td>890€</Td>
                                <Td>20 leçons de conduite (sans code)</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Forfait B Complet</Td>
                                <Td>990€</Td>
                                <Td>Code + 20 leçons de conduite</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Forfait B Express</Td>
                                <Td>1200€</Td>
                                <Td>Formation au permis B Classique en accéléré en 1 mois</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Box>
    );

}

export default GestionForfait;