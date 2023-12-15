import * as React from 'react';

import {
    Card,
    CardBody,
    Grid,
    Text,
    Image,
    Stack
} from "@chakra-ui/react";

const PannelInformationSOPermis =()=>{
    const style ={
        body:{
            padding: "15px",
            backgroundColor: "#0F1411",
        },

        title:{
            margin:"50px",
            color: "#FFF",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal"
        },

        miniBoxImg:{
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40,
            marginLeft: "auto",
        },

        miniBoxTxt:{
            background: '#20AB9A',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40,
            textAlign: "center",
            marginRight: "auto",
        },

        textBox:{
            color: "#ffffff",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
            textAlign: "justify",
        },
        transitionFadeBot: {
            background: "linear-gradient(180deg, #0F1411 0%, rgba(0, 0, 0, 0) 100%)",
            height:"79px"
        }

    };

    return (
        <div>
            <Stack style={style.body}>
                <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>So'Permis - Votre auto-école locale de confiance !</Text>
                <Grid templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="25px" alignItems="center">
                    <Card style={style.miniBoxImg} marginRight={{base:"auto" , xl:"50px"}} width={{base:"275px", "sd":"350px"}}>
                        <Image src='./images/proprio.jpg' alt='Proprio' borderRadius='lg'/>
                    </Card>
                    <Card style={style.miniBoxTxt} marginLeft={{base:"auto" , xl:"50px"}} width={{base:"275px", "sd":"500px"}} >
                        <CardBody >
                            <Text style={style.textBox}>Chez So'Permis, nous redéfinissons l'expérience de l'auto-école au Havre. Notre engagement envers une formation de conduite personnalisée, proposée par des instructeurs dévoués, fait de nous le choix idéal. En tant qu'auto-école locale, nous comprenons les besoins spécifiques de nos élèves. Optez pour So'Permis et bénéficiez d'une formation efficace avec une approche moderne et des tarifs transparents.</Text>
                        </CardBody>
                    </Card>
                </Grid>

            </Stack>
            <div style={style.transitionFadeBot}/>
        </div>
    )
}
export default PannelInformationSOPermis