import React from "react";

import {
    Stack,
    Text,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Heading,
    Button,
    Box,
} from "@chakra-ui/react";

const QuiSommesNous = () => {

    const style = {
        imgFond: {
            backgroundImage: "url('./images/VueHavre.jpg')", 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover", 
            minHeight: "600px",
            marginBottom: "-28px"
        },
        para: {
            margin: "50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word',
            backgroundColor: "white",
        },

        titre: {
            paddingBottom: "20px",
            paddingTop: "20px",
            color: '#1EC6B1',
            fontSize: 36,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word'
        },
        stitre: {
            paddingTop: "20px",
            paddingBottom: "10px",
            color: 'black',
            fontSize: 32,
            fontFamily: 'Montserrat',
            fontWeight: '600',
            wordWrap: 'break-word'
        },

        cardsServices: {
            margin: "100px"
        },

        card: {
            marginTop: "3%",
            backgroundColor: "rgba(30,198,177,0.79)",
            height: "450px",
            width: "350px",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
        },

        textTitre: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold"
        },
        text: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
        },
        bottomCard: {
            padding: "30px",
            borderRadius: 40,
            fontSize: "10px",
            backgroundColor: "black",
            alignContent: "center",
            color: "white"
        }

    }

    return (
        <Stack>
            <div align="center" style={{ ...style.imgFond }}>
                <Card align='center' justify='center' style={style.card}>
                    <CardHeader>
                        <Heading style={{ ...style.textTitre }}></Heading >
                    </CardHeader>
                    <CardBody>
                        <Text style={{ ...style.text }}>Qui sommes nous ?</Text>
                    </CardBody>
                    <CardFooter>
                        <Button style={{ ...style.bottomCard }}>Découvrez qui se cache derrière So'Permis</Button>
                    </CardFooter>
                </Card>

                
            </div>
            <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #FFFFFF00, #FFFFFF)'></Box>
            
            <div style={style.para}>
                <div style={style.titre}>Qui nous sommes?</div>
                Les voitures
            </div>
        
        </Stack>

    );
};

export default QuiSommesNous;
