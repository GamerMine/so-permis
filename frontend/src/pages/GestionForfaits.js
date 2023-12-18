import React, { useState, useEffect } from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Stack,
    Card,
    CardBody,
    Heading,
    Button,
    Link,
    RadioGroup,
    Radio,
    Center,
} from "@chakra-ui/react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const GestionForfait = () => {

    const [listItems, setListItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    let navigate = useNavigate();
    
    const verifConnexion = async () =>
    {
      const valeurDuCookie = Cookies.get('compte');
      let formData = new FormData();
      formData.append('compte', ''+valeurDuCookie);
      const response = await axios.post('http://localhost:8080/EstAdmin',
      formData);
      if (response.data != true)
      {
        navigate("/");
      }
      console.log(response.data);
    }

    useEffect(() => {
        const fetchData = async () => {
            await refreshPage();
        };

        fetchData();
    }, []);

    const refreshPage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getFormations');
            //const retour = response.data.map(item => new Formation(item.id,item.prix, item.nom, item.infos));;

            /*for (let key of response.data)
                retour.push(new Formation(key.prix, key.nom, key.infos));*/
            setFormations(response.data);
            console.log(formations);
            setListItems(formations);
        } catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };
    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

    // Fill remaining rows with empty strings
    currentItems = [...currentItems, ...Array(itemsPerPage - currentItems.length).fill('')];

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const [formations, setFormations] = useState([]);

    currentItems.map((formation, index) => {
        formations.push(
            <Tr key={index}>
                <Td>{formation.nom}</Td>
                <Td>{formation.prix}</Td>
                <Td>{formation.infos}</Td>
                <Td>
                    <Button style={{ ...style.bouton }} size="md" marginRight='2%'>Modifier</Button>
                    <Button colorScheme="red" size="md">Supprimer</Button>
                </Td>
            </Tr>
        );
    });

    const [value, setValue] = React.useState("permis")


    verifConnexion();//salut je suis Léo le gaulois
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Forfaits
            </Heading>

            <Box align='center'>
                <Center spacing="24px" marginY='1%' >
                    <RadioGroup onChange={setValue} value={value}>
                        <Stack direction="row">
                            <Radio value="permis">Permis</Radio>
                            <Radio value="code">Code de la route</Radio>
                        </Stack>
                    </RadioGroup>
                </Center>

                <Link href="/AjouterForfaits"><Button style={{ ...style.bouton }} marginBottom='2%'>AJOUTER</Button></Link>
            </Box>



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
                            {/* <Tr>
                                <Td>Forfait B</Td>
                                <Td>890€</Td>
                                <Td>20 leçons de conduite (sans code)</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="md" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="md">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Forfait B Complet</Td>
                                <Td>990€</Td>
                                <Td>Code + 20 leçons de conduite</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="md" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="md">Supprimer</Button>
                                </Td>
                            </Tr>
                            <Tr>
                                <Td>Forfait B Express</Td>
                                <Td>1200€</Td>
                                <Td>Formation au permis B Classique en accéléré en 1 mois</Td>
                                <Td>
                                    <Button style={{ ...style.bouton }} size="md" marginRight='2%'>Modifier</Button>
                                    <Button colorScheme="red" size="md">Supprimer</Button>
                                </Td>
    </Tr>*/}
                            {formations}
                        </Tbody>
                    </Table>

                    {/* Pagination buttons */}
                    <Center mt={4}>
                        <Box>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <Button
                                    key={index}
                                    colorScheme={currentPage === index + 1 ? 'teal' : 'gray'}
                                    onClick={() => paginate(index + 1)}
                                    mx={1}
                                >
                                    {index + 1}
                                </Button>
                            ))}
                        </Box>
                    </Center>
                </CardBody>
            </Card>
        </Box>
    );

}

export default GestionForfait;