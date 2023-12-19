import React from "react";
import {
    Box,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Card,
    CardBody,
    Heading,
    Button,
    Link,
    Center,
    Tooltip,
} from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";

const GestionArticles = () => {

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
    }

    const handleDelete = async (item) => {
        const formData = new FormData();
        console.log(item);
        formData.append('idactualite', item);
        const response = await axios.post('http://localhost:8080/DeleteArticle',
            formData);
        window.location.reload();
    };

    const handleUpdate = async (item) => {
        const formData = new FormData();
        console.log(item);
        formData.append('idactualite', item);
        //const response = await axios.post('http://localhost:8080/ModifierArticle', formData);
        
        //window.location.replace("/ModifierArticle");
        navigate(`/ModifierArticle/${item}`);
    };

    useEffect(() => {
        const fetchData = async () => {
            await refreshPage();
        };

        fetchData();
    }, []);

    const refreshPage = async () => {
        try {
            const response = await axios.get('http://localhost:8080/getArticles');

            setListItems(response.data);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };

    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    let articles = [];

    currentItems.map((article, index) => {
        articles.push(
            <Tr key={index}>
                <Td>{article.titreActualite}</Td>
                <Td>{article.sources}</Td>
                <Td>
                    <Button style={{ ...style.bouton }} size="md" marginRight='2%' onClick={() => handleUpdate(article.id)}>Modifier</Button>
                    <Button colorScheme="red" size="md" onClick={() => handleDelete(article.id)}>Supprimer</Button>
                </Td>
            </Tr>
        );
    });

    const [value, setValue] = React.useState("permis")
    verifConnexion();
    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px" marginBottom='2%'>
                Articles
            </Heading>

            <div align='center'>
                <Tooltip label="Ajouter un article" aria-label="Ajouter un article">
                    <Link href="/AjouterArticle"> <Button style={{ ...style.bouton }}>AJOUTER</Button></Link>
                </Tooltip>
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
                            {articles}
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

export default GestionArticles;