import React, { useEffect, useState } from "react";
import {
    Grid,
    GridItem,
    Stack,
    Text,
    Divider,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody, ModalFooter, ModalCloseButton,
} from "@chakra-ui/react";
import axios from "axios";
import {HOSTNAME} from "../Variables";

const Actualite = () => {
    const [actus, setActus] = useState([]);

    const style = {
        titre: {
            color: '#20AB9A',
            textAlign: "center",
            fontSize: "45px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            margin: "30px"
        },
        actu: {
            height:"max-content",
            borderRadius:30,
            border: "3px solid" ,
            borderColor: "#20AB9A",
            fontSize: "30px",
            backgroundColor: "#F1F1F1",
            color:"#1EC6B1",
            textAlign: "center",
            fontFamily: "Montserrat-Bold, Helvetica",
            marginLeft:"25px",
            marginRight:"25px",
            margin:"3%"
        },
        image:{
            margin:"auto" ,
            width:'auto',
            display: 'block',
            marginBottom: '30px',
            height: 'auto',
            maxHeight:"350px",
            maxWidth:"350px",
            borderRadius: '8px'
        }
    };

    const [modalStates, setModalStates] = React.useState([]);

    const hostname = HOSTNAME ;

    const onOpen = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = true;
        setModalStates(newModalStates);
    };

    const onClose = (index) => {
        const newModalStates = [...modalStates];
        newModalStates[index] = false;
        setModalStates(newModalStates);
    };

    //const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        const fetchActus = async () => {
            try {
                const response = await axios.get("http://localhost:8080/getListeActus");
                const actu = response.data;
                const reversedActus = actu.reverse();
                setActus(reversedActus);
            } catch (error) {
                console.error("Error fetching news articles:", error);
            }
        };
        fetchActus();
    }, []); // Empty dependency array to run the effect only once on mount

    return (
        <Stack>
            <Text style={style.titre}>Les actualités</Text>
            <Grid marginTop="20px" marginBottom="90px" templateColumns={{ base: "repeat(1, 1fr)", sd: "repeat(2, 1fr)", xg: "repeat(3, 8fr)" }}>
                {actus.map((actuItem, index) => (
                    <Stack key={actuItem.idActu}>
                        <GridItem style={style.actu}>
                            <Stack onClick={() => onOpen(index)}>
                                <Text marginTop="5px" alignSelf="center">
                                    {actuItem.titreActu}
                                </Text>
                                <Divider borderColor={"#1EC6B1"} />
                                <Text>
                                    {(actuItem.infosActu).split(' ').slice(0,4).join(' ') + " ... "}
                                </Text>
                            </Stack>
                        </GridItem>
                        <Modal isOpen={modalStates[index]} onClose={() => onClose(index)}>
                            <ModalContent>
                                <ModalHeader>
                                    {actuItem.titreActu != null ? actuItem.titreActu : null}
                                </ModalHeader>
                                <ModalCloseButton />
                                <ModalBody alignItems="center">
                                    {actuItem.imageURL != "null" ? (
                                        <img
                                            style={{ ...style.image }}
                                            src={hostname + "/public/images/"+ actuItem.imageURL}
                                            alt="Description of the image"
                                        />
                                    ) : ""}
                                    {actuItem.infosActu != null ? actuItem.infosActu : null}
                                </ModalBody>
                                <ModalFooter>
                                    Source: {actuItem.sources != null ? actuItem.sources : null}
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </Stack>
                ))}
            </Grid>
        </Stack>
    );
};

export default Actualite;