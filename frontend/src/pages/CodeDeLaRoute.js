import React from "react";
import {
    Box,
    Text,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    VStack,
    Card,
    CardBody,
    SimpleGrid,
    CardHeader,
    Heading,
    CardFooter,
    Button,
} from "@chakra-ui/react";

const CodeDeLaRoute = () => {
    const style = {
        horaires: {
            color: "#1EC6B1",
        },

        textBlanc: {
            color: "white",
        },

        carte: {
            backgroundColor: "#1EC6B1",
        },

        bouton: {
            backgroundColor: "#05221F",
            color: "white",
        },

        texte: {
            color: "white",
            fontWeight: "bold",
            textWrap: "nowrap",
            marginRight: "20px",
        },

        prix: {
            color: "white",
            fontWeight: "bold",
            textAlign: "center",
        }
    };

    return (
        <VStack w="100%" h="100%" align="center" marginBottom={"5%"}>
            <Box w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} style={{ ...style.textBlanc }}>
                <Text fontSize="2xl">Forfait Code</Text>
                <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                    <Card style={{...style.carte}}>
                        <CardHeader>
                            <Heading size='md'>FORFAIT CODE SEUL</Heading>
                        </CardHeader>
                        
                        <CardFooter>
                            <Button style={{...style.bouton}}>1200 €</Button>
                        </CardFooter>
                    </Card>
                    <Card style={{...style.carte}}>
                        <CardHeader>
                            <Heading size='md'>FORFAIT CODE EXPRESS EN 4 JOURS</Heading>
                        </CardHeader>
                       
                        <CardFooter>
                            <Button style={{...style.bouton}}>1100 €</Button>
                        </CardFooter>
                    </Card>
                </SimpleGrid>
            </Box>

            <Box w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"}>
                <Text fontSize="2xl" style={{ ...style.textBlanc }}>Horaires code en salle</Text>

                <TableContainer w='50%'>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th style={{ ...style.textBlanc }}>Lundi</Th>
                                <Th style={{ ...style.textBlanc }}>Mardi</Th>
                                <Th style={{ ...style.textBlanc }}>Mercredi</Th>
                                <Th style={{ ...style.textBlanc }}>Jeudi</Th>
                                <Th style={{ ...style.textBlanc }}>Vendredi</Th>
                            </Tr>
                        </Thead>
                        <Tbody style={{ ...style.textBlanc }}>
                            <Tr>
                                <Td>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-17h30 </p>
                                </Td>
                                <Td>
                                    <p>Matin : </p>
                                    <p style={{ ...style.horaires }}>10h00-11h00</p>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-16h30</p>
                                </Td>
                                <Td>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-17h30 </p>
                                </Td>
                                <Td>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}> 14h00-17h30 </p>
                                </Td>
                                <Td>
                                    <p>Matin : </p>
                                    <p style={{ ...style.horaires }}> 10h00-11h00 </p> Après-midi
                                    : <p style={{ ...style.horaires }}>15h00-18h00</p>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

            <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #000000, #FFFFFF)'></Box>

            <Box w="50%" h="100%">
                <Text fontSize="2xl" align='center'>Condition d’annulation du code</Text>
                <Card align='center' style={{ ...style.carte }} boxShadow={"5px 5px 5px #b5b5b5"}>
                    <CardBody >
                        <SimpleGrid columns={2} >
                            <Box w='100%' style={{ ...style.texte }}>ANNULATION CODE</Box>
                            <Box style={{ ...style.prix }}>150€</Box>
                            <Box w='100%' style={{ ...style.texte }}>ANNULATION CODE EXPRESS EN 4 JOURS</Box>
                            <Box style={{ ...style.prix }}>250€</Box>
                            <Box w='100%' style={{ ...style.texte }}>ANNULATION CODE + CONDUITE</Box>
                            <Box style={{ ...style.prix }}>410€</Box>
                            <Box w='100%' style={{ ...style.texte }}>ANNULATION CODE + CONDUITE EXPRESS 15 JOURS</Box>
                            <Box style={{ ...style.prix }}>660€</Box>
                        </SimpleGrid>
                    </CardBody>
                </Card>
            </Box>
        </VStack>
    );
};

export default CodeDeLaRoute;
