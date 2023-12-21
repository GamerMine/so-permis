import React, { useState, useEffect } from "react";
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
    Heading,
} from "@chakra-ui/react";
import { MultiHorizontalCardsWithButton, OCard } from "../components/MultiHorizontalCardsWithButton"
import ForfaitCode from "../components/ForfaitCode"
import ForfaitAnnulation from "../components/ForfaitAnnulation"

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
            textAlign: "left",
        },

        prix: {
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "right",
        },

        police: {
            fontFamily: "Montserrat",
        },

        cardsServices: {
            margin: "150px"
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

    const tabDate = () => {
        return (
            <TableContainer marginBottom={"3%"}>
                <Table w='60%' size='base' variant='unstyled' style={{ ...style.tableau }}>
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
            </TableContainer>);
    }

    const ligneDate = () => {
        return (
            <TableContainer marginBottom={"3%"}>
                <Table w='60%' size='base' variant='unstyled' style={{ ...style.tableau }}>
                    <Tbody style={{ ...style.textBlanc }}>
                        <Tr>
                            <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Lundi</Th>
                            <Td borderTop='1px solid white'>
                                <p>Après-midi : </p>
                                <p style={{ ...style.horaires }}>14h00-17h30 </p>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Mardi</Th>
                            <Td borderTop='1px solid white'>
                                <p>Matin : </p>
                                <p style={{ ...style.horaires }}>10h00-11h00</p>
                                <p>Après-midi : </p>
                                <p style={{ ...style.horaires }}>14h00-16h30</p>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Mercredi</Th>
                            <Td borderTop='1px solid white'>
                                <p>Après-midi : </p>
                                <p style={{ ...style.horaires }}>14h00-17h30 </p>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Jeudi</Th>
                            <Td borderTop='1px solid white'>
                                <p>Après-midi : </p>
                                <p style={{ ...style.horaires }}> 14h00-17h30 </p>
                            </Td>
                        </Tr>
                        <Tr>
                            <Th borderEnd='1px solid white' style={{ ...style.textBlanc, ...style.entete }}>Vendredi</Th>
                            <Td borderTop='1px solid white'>
                                <p>Matin : </p>
                                <p style={{ ...style.horaires }}> 10h00-11h00 </p>
                                <p> Après-midi</p>
                                <p style={{ ...style.horaires }}>15h00-18h00</p>
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>);
    }

    const useSetWidthWindow = () => {
        const [content, setContent] = React.useState(window.innerWidth);

        React.useEffect(() => {
            const handleResize = () => {
                setContent(window.innerWidth);
            };

            window.addEventListener("resize", handleResize);

            return () => {
                window.removeEventListener("resize", handleResize);
            };
        }, []);

        return content < 625 ? ligneDate() : tabDate();
    };

    return (
        <Stack style={{gap: 0 , ...style.police}}  marginBottom={"5%"} >
            <Stack style={{backgroundImage: "url('./images/code-route.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "FORFAITS CODE", "Nos forfaits code", "code", "#boxForfaits"),
                        new OCard("", "CODE EN SALLE", "Nos horaires", "code", "#boxHoraires"),
                        new OCard("", "CONDITIONS D'ANNULATION", "Nos conditions", "code", "#boxAnnulation"),
                    ]} />

                <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #FFFFFF00, #000000)'></Box>
            </Stack>

            <Box w='100%' h='30px' align="center" bgGradient='linear(to-b, #040405, #000000)'></Box>

            <Box id="boxForfaits" w='100%' align="center" backgroundColor={"black"} marginBottom={"-10px"} marginTop={"-10px"}>
                <Heading size="lg" style={{ ...style.textBlanc }}>Forfait Code</Heading>
                <ForfaitCode/>
            </Box>

            <Box id="boxHoraires" w='100%' align="center" backgroundColor={"black"}  style={{ ...style.textBlanc }}>
                <Heading size="lg" marginBottom={"2%"}>Horaires code en salle</Heading>
                {useSetWidthWindow()}
            </Box>

            <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #000000, #FFFFFF)'></Box>

            <Stack id="boxAnnulation" w={{ base: "80%", "sb": "50%" }} h="100%" mx={"10%"} px={"5%"}>
                <Heading size="lg" align='center' marginBottom={"2%"}>Condition d’annulation du code</Heading>
                <Card style={{ ...style.carte }} boxShadow={"5px 5px 5px #b5b5b5"}>
                    <ForfaitAnnulation/>
                </Card>
            </Stack>
        </Stack>
    );
};

export default CodeDeLaRoute;
