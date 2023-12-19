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
    Center, GridItem, CardHeader, Text, CardFooter,
} from "@chakra-ui/react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import {HOSTNAME} from "../Variables";

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
      const response = await axios.post(HOSTNAME+'/EstAdmin',
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
            const response = await axios.get(HOSTNAME+'/getFormations');
            setListItems(response.data);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };


    const handleDelete = async (item) => {
        const formData = new FormData();
        console.log(item);
        formData.append('idFormation', item);
        const response = await axios.post(HOSTNAME+'/DeleteFormations',
            formData);
        window.location.reload();
    };

    const handleUpdate = async (item) => {
        const formData = new FormData();
        console.log(item);
        formData.append('idFormation', item);
        const response = await axios.post(HOSTNAME+'/UpdateFormations',
            formData);
        ;
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

    let formationsForfait = [];
    const [permisSelect, setPermisSelect] = React.useState('Permis')

    currentItems.map((formation, index) => {
        console.log(formation);
        if(permisSelect=="Permis" && formation.type_f=="permis")
            formationsForfait.push(
                <Tr>
                    <Td>{formation.nom}</Td>
                    <Td>{formation.prix}</Td>
                    <Td>{formation.infos}</Td>
                    <Td>
                        <Button style={{ ...style.bouton }} size="md" marginRight='2%' onClick={() => handleUpdate(formation.id)}>Modifier</Button>
                        <Button colorScheme="red" size="md" onClick={() => handleDelete(formation.id)}>Supprimer</Button>
                    </Td>
                </Tr>
            );
        if(permisSelect=="Code" && formation.type_f=="code")
            formationsForfait.push(
                <Tr>
                    <Td>{formation.nom}</Td>
                    <Td>{formation.prix}</Td>
                    <Td>{formation.infos}</Td>
                    <Td>
                        <Button style={{ ...style.bouton }} size="md" marginRight='2%' onClick={() => handleUpdate(formation.id)}>Modifier</Button>
                        <Button colorScheme="red" size="md" onClick={() => handleDelete(formation.id)}>Supprimer</Button>
                    </Td>
                </Tr>
            );
    });


    verifConnexion();
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Forfaits
            </Heading>

            <Box align='center'>
                <Center spacing="24px" marginY='1%' >
                    <RadioGroup id="formationSelect" onChange={setPermisSelect} value={permisSelect}>
                        <Stack direction="row">
                            <Radio value='Permis'>Permis</Radio>
                            <Radio value='Code'>Code de la route</Radio>
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
                            {formationsForfait}
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