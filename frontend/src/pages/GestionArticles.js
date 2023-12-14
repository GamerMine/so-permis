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
import { useState, useEffect } from 'react';
import axios from "axios";

const GestionArticles = () => {

    /*let result = [];
    const [listeFormations, setListeFormations] = useState()
    useEffect(() => {
        getListeFormations();
    }, [])

    const getListeFormations = async () => {
        const response = await axios.get('http://localhost:8080/getFormations');
        if (response.data === true) {
            setListeFormations(response.data);
            let tmp = response.data;
            for (let key in tmp) {
                result.push({ nom: tmp[key][0], info: tmp[key][1], nom: tmp[key][2] });
            };
        } else {
            console.log(response.data);
            alert(response.data);
        }
    }

    let formations = [];

    result.forEach((formation, index) => {
        formations.push(
                <Tr>
                    <Td>{formation.nom}</Td>
                    <Td>{formation.prix}</Td>
                    <Td>{formation.infos}</Td>
                    <Td>
                        <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                        <Button colorScheme="red" size="xs">Supprimer</Button>
                    </Td>
                </Tr>
        );
    });*/

    const [value, setValue] = React.useState("permis")

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px" marginBottom='2%'>
                Articles
            </Heading>

            <div align='center'>
                <Link href="/AjouterArticle"> <Button style={{ ...style.bouton }}>AJOUTER</Button></Link>
            </div>

            <Card marginTop='2%'>
                <CardBody>
                    <Table variant="striped" colorScheme="gray">
                        <Thead backgroundColor='black' >
                            <Tr>
                                <Th color='white'>Titre</Th>
                                <Th color='white'>Sources</Th>
                                <Th color='white'>Actions</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td>Nouveau permis de conduire: Tout savoir !</Td>
                                <Td>Rédigé sur So'Permis</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Permis de conduire dès 17 ans : beaucoup d'auto école pas convaincues</Td>
                                <Td><Link>x.com</Link></Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Documents pour s'inscrire chez So'Permis</Td>
                                <Td><Link>facebook.com</Link></Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="xs" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="xs">Supprimer</Button>
                                </Td>
                            </Tr>
                            {/*{formations}*/}
                        </Tbody>
                    </Table>
                </CardBody>
            </Card>
        </Box>
    );

}

export default GestionArticles;