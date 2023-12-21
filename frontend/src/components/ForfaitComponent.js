import React, {useEffect, useState} from "react";
import axios from "axios";
import {HOSTNAME} from "../Variables";
import {
    Box,
    Button,
    Card,
    CardBody,
    Center,
    Heading,
    Link, Radio, RadioGroup,
    Stack,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const ForfaitComponent = () => {
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [formationsForfait, setFormationsForfait] = useState([]);
    const [permisSelect, setPermisSelect] = useState('permis');

    const navigate = useNavigate();

    const ITEM_PAR_PAGE = 8;

    const style = {
        bouton: {
            backgroundColor: "#1ec6b1",
            color: "white",
        }
    }

    const loadContent = async () => {
        try {
            const response = await axios.get(HOSTNAME+'/getFormations');
            let currentItems = changementCatego(response.data);

            let tmpFormationsForfait = [];
            currentItems = [...currentItems, ...Array(ITEM_PAR_PAGE - currentItems.length).fill('')];
            currentItems.map((formation) => {
                if(permisSelect != 'express' && permisSelect === formation.type_f) {
                    tmpFormationsForfait.push(
                        <Tr>
                            <Td>{formation.nom}</Td>
                            <Td>{formation.prix}</Td>
                            <Td>{formation.infos}</Td>
                            <Td>
                                <Button style={{...style.bouton}} size="md" marginRight='2%'
                                        onClick={() => handleUpdate(formation.id)}>Modifier</Button>
                                <Button colorScheme="red" size="md"
                                        onClick={() => handleDelete(formation.id)}>Supprimer</Button>
                            </Td>
                        </Tr>
                    );
                }
                else  if(permisSelect == 'express' && permisSelect === formation.type_f){
                    tmpFormationsForfait.push(
                        <Tr>
                            <Td>{formation.nom}</Td>
                            <Td>{formation.prix}</Td>
                            <Td>{formation.infos}</Td>
                            <Td>
                                <Button style={{...style.bouton}} size="md" marginRight='2%'
                                        onClick={() => handleUpdate(formation.id)}>Modifier</Button>
                            </Td>
                        </Tr>
                    );
                }
            });

            setFormationsForfait(tmpFormationsForfait);
        }
        catch (error) {}
    };

    function changementCatego(listItems){
        let tabtemp = [];
        const indexOfLastItem = currentPage * ITEM_PAR_PAGE;
        const indexOfFirstItem = indexOfLastItem - ITEM_PAR_PAGE;

        for(let tesee of listItems)
            if(permisSelect === tesee.type_f)
                tabtemp.push(tesee);

        setTotalPages(Math.ceil(tabtemp.length / ITEM_PAR_PAGE));

        return tabtemp.slice(indexOfFirstItem, indexOfLastItem);
    }

    const handleDelete = async (item) => {
            const formData = new FormData();
            //console.log(item);
            formData.append('idFormation', item);
            await axios.post(HOSTNAME+'/DeleteFormations', formData);
            window.location.reload();
    };

    const handleUpdate  = async (item) => {
        navigate(`/ModifierForfaits/${item}`);
    };

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        loadContent();
    }, [permisSelect]);

    return (
        <Box>
            <Heading textAlign="center" paddingTop="20px">
                Forfaits
            </Heading>
            <Box align='center'>
                <Center spacing="24px" marginY='1%' >
                    <RadioGroup id="formationSelect" onChange={setPermisSelect} value={permisSelect}>
                        <Stack direction="row">
                            <Radio value='permis'>Permis</Radio>
                            <Radio value='conduite_accompagnee'>Conduite Accompagnée</Radio>
                            <Radio value='code'>Code de la route</Radio>
                            <Radio value='annulation'>Annulation</Radio>
                            <Radio value='express'>Forfait Express</Radio>
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
    )
}