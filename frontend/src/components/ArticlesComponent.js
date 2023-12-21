import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Heading,
    Link,
    Table,
    Tbody, Td,
    Th,
    Thead,
    Tooltip,
    Tr
} from "@chakra-ui/react";
import axios from "axios";
import {HOSTNAME} from "../Variables";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const ArticlesComponent = () => {

    const [articles, setArticles] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const itemsPerPage = 8;
    const navigate = useNavigate();

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const handleDelete = async (item) => {
        const formData = new FormData();
        console.log(item);
        formData.append('idactualite', item);
        await axios.post(HOSTNAME+'/DeleteArticle', formData);
        window.location.reload();
    };

    const handleUpdate = async (item) => {
        navigate(`/ModifierArticle/${item}`);
    };

    const loadContent = async () => {
        try {
            const response = await axios.get(HOSTNAME+'/getArticles');
            const listItems = response.data;
            const indexOfLastItem = currentPage * itemsPerPage;
            const indexOfFirstItem = indexOfLastItem - itemsPerPage;
            const currentItems = listItems.slice(indexOfFirstItem, indexOfLastItem);

            setTotalPages(Math.ceil(listItems.length / itemsPerPage));

            console.log(currentItems);

            let tmpArticles = [];
            currentItems.map((article, index) => {
                tmpArticles.push(
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

            setArticles(tmpArticles);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        loadContent()
    }, []);

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
    )
}

export default ArticlesComponent