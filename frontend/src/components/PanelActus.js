import axios from "axios";
import { useEffect, useState } from "react";
import {
    Box,
    Card,
    CardBody,
    Text,
    Button,
    Stack,
    Flex,
    Spinner, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
} from "@chakra-ui/react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { isMobile } from "react-device-detect";
import { HOSTNAME } from "../Variables";
import { useNavigate } from "react-router-dom";

let currentActu = 0;

function checkImageExists(imageUrl) {
    return new Promise((resolve, reject) => {
        let imageData = new Image();

        imageData.onload = function () {
            resolve(true);
        };
        imageData.onerror = function () {
            reject(false);
        };

        imageData.src = imageUrl;
    });
}



const PanelActus = () => {
    const style = {
        cards: {
            alignSelf: "center",
            backgroundColor: "rgba(0,0,0,0.10)",
            width: "900px",
            height: "400px",
        },

        cardBody: {
            alignSelf: "center",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            left: 0,
            textAlign: "center"
        }
    }

    let nbActus = 0;
    let actus = [];
    const [sizePage, setSizePage] = useState("580px");

    const [content, setContent] = useState((
        <Card style={style.cards} size={"xl"}>
            <CardBody style={style.cardBody}>
                <Spinner />
            </CardBody>
        </Card>
    ));

    const hostname = HOSTNAME;


    const [isPopupOpen, setPopupOpen] = useState(false);
    const [isAutoScrollingPaused, setAutoScrollingPaused] = useState(false);
    const [fullDescription, setFullDescription] = useState('');


    function openPopup(description) {
        setPopupOpen(true);
        setAutoScrollingPaused(true);
        setFullDescription(description);
    }

    function closePopup() {
        setPopupOpen(false);
        setAutoScrollingPaused(false);
    }


    const navigate = useNavigate();
    const handleRedirect = (link) => {
        navigate(link);
    };

    const [isHovering, setIsHovering] = useState(false);
    let isHoveringOld = false;

    function handleMouseEnter() {
        isHoveringOld = true;
        setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus, true))
    }

    function handleMouseLeave() {
        isHoveringOld = false;
        setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus, false))
    }

    function createCardBody(imgLink, title, author, description, nbActus, status=isHoveringOld) {

        //console.log(imgLink)

        if(imgLink == "null" )
        {
            imgLink = "Actualites.png";
        }

        //console.log(imgLink)

        const style = {
            cards: {
                alignSelf: "center",
                backgroundImage: "linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 30%), url(" + hostname + "/public/images/" + imgLink + ")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top",
            },

            cardBody: {

                position: "absolute",
                bottom: 0,
                width: "100%",
                maxHeight : "50%",
                left: 0,
            },

            text: {
                color: "black",
                fontFamily: 'Montserrat',
                fontSize: 20
            },

            textDescription: {
                color: "black",
                fontFamily: "Montserrat",
                fontSize: 16
            },

            title:{
                color: '#20AB9A',
                fontSize: "35px",
                fontFamily: "Montserrat-Bold, Helvetica",
                fontWeight: '700',
                wordWrap: 'break-word',
                marginBottom:"30px"
            },

            button:{
                width:"25%",
                minWidth:"250px",
                backgroundColor:"#20AB9A",
                alignSelf:"center"
            }
        }

        const images = Array(Math.min(nbActus, 3)).fill('a');

        const imageContent = hostname + "/public/images/" + imgLink;

        const sizeText = () => {
            return description.length > 290;
        }
        //console.log(status);

        return (
            <Stack>
                <Stack paddingLeft={{base:"15px" , "smdp":"80px"}} paddingRight={{base:"15px" , "smdp":"80px"}} >
                    <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Retrouvez nos dernières actus !</Text>
                    <Card style={style.cards} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} width={{xl: "900px", md: "700px", sm: "350px"}} height={sizePage} backgroundSize={{base:"100% 45%", "md":"100% 72%"}}>
                        {status || isMobile ? (
                            <Stack>
                                <Box style={{display: "flex", justifyContent: "center", position: "absolute", top: "50%", transform: "translateY(-50%)", left: "10px"}} borderRadius={"full"} bg={"rgba(0,0,0,0.37)"} w={"12"} h={"12"}>
                                    <MdOutlineKeyboardDoubleArrowLeft
                                        size={30}
                                        style={{color: "white", position: "absolute", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}}
                                        onClick={() => {
                                            if (currentActu <= 0) currentActu = Math.min(nbActus, 2);
                                            else currentActu--;
                                            setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus))
                                        }}
                                    />
                                </Box>
                                <Box style={{display: "flex", justifyContent: "center", position: "absolute", top: "50%", transform: "translateY(-50%)", right: "10px"}} borderRadius={"full"} bg={"rgba(0,0,0,0.37)"} w={"12"} h={"12"}>
                                    <MdOutlineKeyboardDoubleArrowRight
                                        size={30}
                                        style={{color: "white", position: "absolute", top: "50%", transform: "translateY(-50%)", cursor: "pointer"}}
                                        onClick={() => {
                                            if (currentActu >= Math.min(nbActus, 3) - 1) currentActu = 0;
                                            else currentActu++;
                                            setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus))
                                        }}
                                    />
                                </Box>
                            </Stack>
                        ) : (<p/>)

                        }
                        <CardBody style={style.cardBody}>
                            <Text style={{...style.text, whiteSpace: "normal"}}>{title} - <span
                                style={{...style.text, fontStyle: "italic"}}>{author}</span></Text>
                            { sizeText() ? (
                                <>
                                    <p style={{...style.textDescription}}>
                                        {description.substring(0, 290)}
                                        <Button onClick={() => openPopup(description)}>...</Button>
                                    </p>
                                </>
                            ) : (
                                <Text style={{...style.textDescription}}>{description}</Text>
                            )
                            }
                        </CardBody>
                    </Card>
                    <Flex mt="2" style={{alignSelf: "center"}}>
                        {images.map((_, index) => (
                            <Box
                                key={index}
                                w="4"
                                h="4"
                                mx="1"
                                bg={index === currentActu ? '#1EC6B1' : 'gray'}
                                borderRadius="full"
                                cursor="pointer"
                                onClick={() => {
                                    currentActu = index;
                                    setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus))
                                }}
                            />
                        ))}
                    </Flex>
                </Stack>
                <Stack>
                    <Button style={style.button} onClick={() => handleRedirect("/Actualite")}>
                        Consultez toutes nos actualités
                    </Button>
                </Stack>
            </Stack>
        )
    }

    const Popup = ({ description }) => (
        <Modal isOpen={isPopupOpen} onClose={closePopup}>
            <ModalContent>
                <ModalHeader color="#20AB9A">Description complète</ModalHeader>
                <ModalCloseButton />
                <ModalBody>{description}</ModalBody>
                <ModalFooter>
                    <Button color="#20AB9A" onClick={closePopup}>
                        Fermer
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );

    function changeActu(nbActus, actus) {
        if (!isPopupOpen) {
            if (currentActu >= Math.min(nbActus, 3) - 1) currentActu = 0;
            else currentActu++;

            setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus));
        }
    }

    const setActus = async() => {
        try {
            const response = await axios.get(HOSTNAME+"/getListeActus");

            nbActus = response.data.length;
            actus = response.data;
            actus = actus.reverse();
            setContent(createCardBody(response.data[0].imageURL, response.data[0].titreActu, response.data[0].sources, response.data[0].infosActu, nbActus));
        } catch (ignored) {}
    }

    useEffect(() => {
        setActus();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            changeActu(nbActus, actus);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Stack>
            {content}
            <Popup description={fullDescription} />
        </Stack>
    )
}

export default PanelActus