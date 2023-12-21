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
            paddingTop:"80px",
            paddingBottom:"80px"
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
            <Text style={style.title} marginLeft={{"smdp":"65px"}} textAlign={{base:"center", "sd":"left"}}>Nos véhicules chez So'Permis</Text>
            <Grid templateColumns="repeat(1, 1fr)" gap="25px" alignSelf="center">
                <Card marginRight="auto"  style={style.miniBox} marginLeft={{base:"auto" , xl:"50px"}} width={{base:"275px", "sd":"450px"}} >
                    <CardBody>
                        <Image style={style.imageVoiture} src='./images/Citroen-C3.png' alt='Citroen-C3' borderRadius='lg'/>
                        <Text style={style.textVoiture}>Citroën C3</Text>
                        <Text style={style.textInfoVoiture}>Boîte Manuelle</Text>
                        <Text style={style.textBox}>Bien équipé et confortable, cette voiture t’accompagnera pour ton Permis B</Text>
                    </CardBody>
                </Card>
            </Grid>
        </Stack>
    )
}
export default PannelInformationsVehicules