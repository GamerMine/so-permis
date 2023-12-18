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

const GestionArticles = () => {

    const [listItems, setListItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    
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

    let articles = [];

    currentItems.map((article, index) => {
        articles.push(
            <Tr key={index}>
                <Td>{article.titreActualite}</Td>
                <Td>{article.sources}</Td>
                <Td>
                    <Button style={{ ...style.bouton }} size="md" marginRight='2%'>Modifier</Button>
                    <Button colorScheme="red" size="md">Supprimer</Button>
                </Td>
            </Tr>
        );
    });

    const [value, setValue] = React.useState("permis")

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

class Articles {
    constructor(idActualite, titreActualite, infosActualite, imgUrl, sources) {
        this.idActualite = idActualite;
        this.titreActualite = titreActualite;
        this.infosActualite = infosActualite;
        this.imgUrl = imgUrl;
        this.sources = sources;
    }

    getIdActualite() {
        return this.idActualite;
    }

    getTitreActualite() {
        return this.titreActualite;
    }

    getInfosActualite() {
        return this.infosActualite;
    }

    getImgUrl() {
        return this.imgUrl;
    }

    getSources() {
        return this.sources;
    }

    toString() {
        return this.idActualite + " " + this.titreActualite + " " + this.infosActualite + " " + this.imgUrl + " " + this.sources;
    }
}

export default GestionArticles;