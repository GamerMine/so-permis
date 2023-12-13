import * as React from 'react';

import {
    SimpleGrid,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
    Text,
    Icon, createIcon,
    Image, Grid
} from "@chakra-ui/react";

const PannelInformationsVehicules =()=>{
    const style ={
        body:{
            padding: "20px",
        },

        title:{
            color: '#20AB9A',
            fontSize: "35px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px"
        },

        miniBox:{
            background: '#20AB9A',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40
        },

        textBox:{
            margin:"20px",
            color: "#ffffff",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
            // position: "fixed",
            textAlign: "center",
        },
        textVoiture: {
            color: 'white',
            fontSize: "32px",
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "center"

        },

        textInfoVoiture:{
            color: 'white',
            fontSize: "21px",
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "center"
        },
        imageVoiture: {
            marginLeft: "auto",
            marginRight: "auto",
        }


    };

    return (
        <div>
            <div style={style.body}>

                <div style={style.body}>
                    <h4 style={style.title}>So'Permis - Votre auto-école locale de confiance !</h4>
                    <SimpleGrid columns={{sm: 2, md: 2}} spacing='70px' alignSelf="center">
                        <Card style={style.miniBox} >
                            <CardBody>
                                <Image style={style.imageVoiture} src='./images/Peugeot-208.png' alt='Peugeot-208' borderRadius='lg'/>
                                <Text style={style.textVoiture}>Peugeot 208</Text>
                                <Text style={style.textInfoVoiture}>Boîte Manuelle</Text>
                                <Text style={style.textBox}>Pratique et facile à manier, cette voiture t’accompagnera pour ton permis B</Text>
                            </CardBody>
                        </Card>
                        <Card style={style.miniBox} >
                            <CardBody>
                                <Image style={style.imageVoiture} src='./images/Peugeot-5008.png' alt='Peugeot-5008' borderRadius='lg'/>
                                <Text style={style.textVoiture}>Peugeot 5008</Text>
                                <Text style={style.textInfoVoiture}>Boîte Automatique</Text>
                                <Text style={style.textBox}>Bien équipé et confortable, cette voiture t’accompagnera pour ton Permis B Automatique</Text>
                            </CardBody>
                        </Card>

                    </SimpleGrid>

                </div>

            </div>
            <div style={style.transitionFadeBot}/>
        </div>
    )
}
export default PannelInformationsVehicules