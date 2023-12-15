import axios from "axios";
import {useEffect, useState} from "react";
import {Box, Card, CardBody, Flex, Spinner, Stack, Text} from "@chakra-ui/react";
import * as React from "react";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import {isMobile} from "react-device-detect"

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

    const [content, setContent] = useState((
        <Card style={style.cards} size={"xl"}>
            <CardBody style={style.cardBody}>
                <Spinner/>
            </CardBody>
         </Card>
    ));

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
        const style = {
            cards: {
                alignSelf: "center",
                backgroundImage: "linear-gradient(to top, #000000 0%, rgba(0, 0, 0, 0) 30%), url(" + imgLink + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            },

            cardBody: {
                position: "absolute",
                bottom: 0,
                width: "100%",
                left: 0,
            },

            text: {
                color: "white",
                fontFamily: 'Montserrat',
                fontSize: 20
            },

            textDescription: {
                color: "#e0e0e0",
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
        }

        const images = Array(Math.min(nbActus, 3)).fill('a');

        console.log(status);

        return (
            <Stack style={{paddingLeft: "80px", paddingRight: "80px"}}>
                <h4 style={style.title}>Retrouvez nos dernières actus !</h4>
                    <Card style={style.cards} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} width={{xl: "900px", md: "700px", sm: "350px"}} height= "400px">
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
                            </Stack>) : (<p/>)
                        }
                    <CardBody style={style.cardBody}>
                        <Text style={{...style.text, whiteSpace: "nowrap"}}>{title} - <span
                            style={{...style.text, fontStyle: "italic"}}>{author}</span></Text>
                        <Text style={{...style.textDescription}}>{description}</Text>
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
        )
    }

    function changeActu(nbActus, actus) {
        if (currentActu >= Math.min(nbActus, 3) - 1) currentActu = 0;
        else currentActu++;

        setContent(createCardBody(actus[currentActu].imageURL, actus[currentActu].titreActu, actus[currentActu].sources, actus[currentActu].infosActu, nbActus));
    }

    const setActus = async() => {
        try {
            const response = await axios.get("http://localhost:8080/getListeActus");

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
        </Stack>
    )
}

export default PanelActus