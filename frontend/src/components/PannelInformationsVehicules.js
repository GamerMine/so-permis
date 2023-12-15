import * as React from 'react';

import {
    Grid,
    Card,
    CardBody,
    Stack,
    Text,
    Image
} from "@chakra-ui/react";

const PannelInformationsVehicules =()=>{
    const style ={
        body:{
            padding: "15px",
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
            textAlign: "center",
            borderRadius: 40,
        },

        textBox:{
            margin:"20px",
            color: "#ffffff",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "16px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
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
        <Stack style={style.body}>
            <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Nos véhicules chez So'Permis </Text>
            <Grid templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="25px" alignItems="center">
                <Card marginLeft="auto" style={style.miniBox} marginRight={{base:"auto" , xl:"50px"}}  width={{base:"275px", "sd":"450px"}}>
                    <CardBody>
                        <Image style={style.imageVoiture} src='./images/Peugeot-208.png' alt='Peugeot-208' borderRadius='lg'/>
                        <Text style={style.textVoiture}>Peugeot 208</Text>
                        <Text style={style.textInfoVoiture}>Boîte Manuelle</Text>
                        <Text style={style.textBox}>Pratique et facile à manier, cette voiture t’accompagnera pour ton permis B</Text>
                    </CardBody>
                </Card>
                <Card marginRight="auto"  style={style.miniBox} marginLeft={{base:"auto" , xl:"50px"}} width={{base:"275px", "sd":"450px"}} >
                    <CardBody>
                        <Image style={style.imageVoiture} src='./images/Peugeot-5008.png' alt='Peugeot-5008' borderRadius='lg'/>
                        <Text style={style.textVoiture}>Peugeot 5008</Text>
                        <Text style={style.textInfoVoiture}>Boîte Automatique</Text>
                        <Text style={style.textBox}>Bien équipé et confortable, cette voiture t’accompagnera pour ton Permis B Automatique</Text>
                    </CardBody>
                </Card>
            </Grid>
        </Stack>
    )
}
export default PannelInformationsVehicules