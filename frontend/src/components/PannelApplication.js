import * as React from 'react';

import {
    Box,
    SimpleGrid,
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

const PannelApplication =()=>{
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
            alignContent:"center",
        },

        textBox:{
//            textAlign: 'justify',
            color: 'black',
            fontSize: 35,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "center",

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
                    <h4 style={style.title}>Application SAROOL</h4>
                    <SimpleGrid columns={{sm: 2, md: 2}} spacing='70px' alignSelf="center">
                        <Card>
                                <Image style={style.imageVoiture} src='./images/SAROOL LOGO.png' alt='SAROOL' borderRadius='lg'/>
                        </Card>
                        <Card style={style.miniBox} >
                            <CardBody>
                                <Text style={style.textBox}>Visualise tes informations personnelles et gères tes disponibilités avec l’application SAROOL !</Text>
                                <SimpleGrid columns={{sm: 2, md: 2}} spacing='70px' alignSelf="center">
                                    <Image style={style.imageVoiture} src='./images/Google_Play_Store.png' alt='play store' borderRadius='lg'/>
                                    <Image style={style.imageVoiture} src='./images/apple store.png' alt='apple store' borderRadius='lg'/>
                                </SimpleGrid>
                            </CardBody>
                        </Card>

                    </SimpleGrid>

                </div>

            </div>
            <div style={style.transitionFadeBot}/>
        </div>
    )
}
export default PannelApplication
