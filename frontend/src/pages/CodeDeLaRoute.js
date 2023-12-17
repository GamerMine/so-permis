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
} from "@chakra-ui/react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"
import {ListeCode} from "../components/ListeCode";

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
        },

        cardsServices: {
            margin: "100px"
        },

        tableau: {
            borderSpacing: "0",
            borderCollapse: "separate",
            borderRadius: "10px",
            border: "1px solid white",
        },

        entete: {
            borderBottom: "1px solid white",
        }
    };

    const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    return (

        
        <VStack w="100%" h="100%" align="center" marginBottom={"5%"} style={{ ...style.police }}>
            <Stack w={isSmallDevice ? "auto" : "100%"}  marginBottom={"-10px"} style={{ ...style.textBlanc, ...style.box1}}>
           
                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "FORFAITS CODE", "Nos forfaits code","code", "#boxForfaits"),
                        new OCard("", "CODE EN SALLE", "Nos horaires","code", "#boxHoraires"),
                        new OCard("", "CONDITIONS D'ANNULATION", "Nos conditions","code", "#boxAnnulation"),
                    ]}/>
            
                <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #FFFFFF00, #000000)'></Box>
            </Stack> 

            <Box w='100%' h='30px' align="center" bgGradient='linear(to-b, #040405, #000000)'></Box>

            <Box id="boxForfaits" w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} marginTop={"-10px"}>
                <Heading size="lg" style={{ ...style.textBlanc }}>Forfait Code</Heading>
                <Stack w='25%' columns={2}  justify='center' marginBottom={"3%"}>
                        
                    <ListeCode style={style.cardsServices} cards={
                    [
                        new OCard("FORFAIT CODE SEUL", "", "1200€"),
                        new OCard("FORFAIT CODE EXPRESS", "EN 4 JOURS", "1100€"),
                    ]} hauteur={"450px"} largeur={"350px"}/>
                   
                </Stack>
            </Box>

            <Box id="boxHoraires" w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} style={{ ...style.textBlanc }}>
                <Heading size="lg" marginBottom={"2%"}>Horaires code en salle</Heading>
                <TableContainer w='60%' marginBottom={"3%"}>
                    <Table size='lg' variant='unstyled' style={{ ...style.tableau }}>
                        <Thead border='1px solid white'>
                            <Tr>
                                <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Lundi</Th>
                                <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Mardi</Th>
                                <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Mercredi</Th>
                                <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Jeudi</Th>
                                <Th style={{ ...style.textBlanc, ...style.entete }}>Vendredi</Th>
                            </Tr>
                        </Thead>
                        <Tbody style={{ ...style.textBlanc }}>
                            <Tr>
                                <Td borderEnd='1px solid white'>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-17h30 </p>
                                </Td>
                                <Td borderEnd='1px solid white'>
                                    <p>Matin : </p>
                                    <p style={{ ...style.horaires }}>10h00-11h00</p>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-16h30</p>
                                </Td>
                                <Td borderEnd='1px solid white'>
                                    <p>Après-midi : </p>
                                    <p style={{ ...style.horaires }}>14h00-17h30 </p>
                                </Td>
                                <Td borderEnd='1px solid white'>
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
                <Heading size="lg" align='center' marginBottom={"2%"}>Condition d’annulation du code</Heading>
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
