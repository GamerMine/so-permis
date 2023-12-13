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
    Card,
    CardBody,
    SimpleGrid,
    Heading,
    Button,
    Grid,
    GridItem,
    Link,
} from "@chakra-ui/react";

const CodeDeLaRoute = () => {
    const style = {

        horaires: {
            color: "#1EC6B1",
        },

        box1: {
            backgroundImage: "url('/images/code-route.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },

        textBlanc: {
            color: "white",
        },

        carte: {
            backgroundColor: "rgba(30,198,177,0.79)",
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
        },

        police: {
            fontFamily: "Montserrat", 
        }
    };

    return (
        <VStack w="100%" h="100%" align="center" marginBottom={"5%"} style={{ ...style.police }}>

            <Box w='100%' align='center' marginBottom={"-10px"} style={{ ...style.textBlanc, ...style.box1}}>
                <SimpleGrid w='40%' columns={3} spacing={4} justify='center' marginBottom={"2%"}  marginTop={"2%"}>
                    <Card style={{ ...style.carte }} position={"relative"}>
                        <Grid w={"100%"} h={"100%"} placeItems={"center"} padding={"10%"}>
                            <GridItem>
                                <Heading size='md' style={{ ...style.textBlanc }}>FORFAITS CODE</Heading>
                            </GridItem>
                            <GridItem>
                                <Link href="#boxForfaits"><Button align='center' style={{ ...style.bouton }}>Nos forfaits code</Button></Link>
                            </GridItem>
                        </Grid>
                    </Card>

                    <Card style={{ ...style.carte }}>
                        <Grid w={"100%"} h={"100%"} placeItems={"center"} padding={"10%"}>
                            <GridItem>
                                <Heading size='md' style={{ ...style.textBlanc }}>CODE EN SALLE</Heading>
                            </GridItem>
                            <GridItem>
                                <Link href="#boxHoraires"><Button align='center' style={{ ...style.bouton }}>Nos horaires</Button></Link>
                            </GridItem>
                        </Grid>
                    </Card>

                    <Card style={{ ...style.carte }}>
                        <Grid w={"100%"} h={"100%"} placeItems={"center"} padding={"10%"}>
                            <GridItem>
                                <Heading size='md' style={{ ...style.textBlanc }}>CONDITIONS D'ANNULATION</Heading>
                            </GridItem>
                            <GridItem>
                                <Link href="#boxAnnulation"><Button align='center' style={{ ...style.bouton }}>Nos conditions</Button></Link> 
                            </GridItem>
                        </Grid>
                    </Card>
                </SimpleGrid>
            
                <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #FFFFFF00, #000000)'></Box>

            </Box>

            <Box w='100%' h='30px' align="center" bgGradient='linear(to-b, #040405, #000000)'></Box>

            <Box id="boxForfaits" w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} marginTop={"-10px"} style={{ ...style.textBlanc }}>
                <Heading size="lg" marginBottom={"1%"}>Forfait Code</Heading>
                <SimpleGrid w='25%' columns={2} spacing={4} justify='center' marginBottom={"3%"}>
                    <Card style={{ ...style.carte }} position={"relative"}>
                        <Grid w={"100%"} h={"100%"} placeItems={"center"} padding={"10%"}>
                            <GridItem>
                                <Heading size='md' style={{ ...style.textBlanc }}>FORFAIT CODE SEUL</Heading>
                            </GridItem>
                            <GridItem>
                                <Button align='center' style={{ ...style.bouton }}>1200 €</Button>
                            </GridItem>
                        </Grid>
                    </Card>

                    <Card style={{ ...style.carte }}>
                        <Grid w={"100%"} h={"100%"} placeItems={"center"} padding={"10%"}>
                            <GridItem>
                                <Heading size='md' style={{ ...style.textBlanc }}>FORFAIT CODE EXPRESS EN 4 JOURS</Heading>
                            </GridItem>
                            <GridItem>
                                <Button align='center' style={{ ...style.bouton }}>1100 €</Button>
                            </GridItem>
                        </Grid>
                    </Card>
                </SimpleGrid>
            </Box>

            <Box id="boxHoraires" w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} style={{ ...style.textBlanc }}>
                <Heading size="lg" marginBottom={"1%"}>Horaires code en salle</Heading>
                <TableContainer w='50%' marginBottom={"2%"}>
                    <Table variant="simple" border={"white 1px solid"}>
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

            <Box id="boxAnnulation" w="50%" h="100%" mx={"10%"} px={"5%"}>
                <Heading size="lg" align='center'>Condition d’annulation du code</Heading>
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
