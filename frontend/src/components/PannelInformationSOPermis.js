import * as React from 'react';

import {
    Card,
    CardBody,
    SimpleGrid,
    Text,
    Image
} from "@chakra-ui/react";

const PannelInformationSOPermis =()=>{
    const style ={
        body:{
            padding: "20px",
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
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40,
            width: "40%",
            height: "48%"
        },

        miniBoxTxt:{
            width: '100%',
            height: '100%',
            background: '#20AB9A',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40
        },

        textBox:{
            color: "#ffffff",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "18px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
            // position: "fixed",
            textAlign: "center",
        },
        transitionFadeBot: {
            background: "linear-gradient(180deg, #0F1411 0%, rgba(0, 0, 0, 0) 100%)",
            height:"79px"
        }

    };

    return (
        <div>
            <div style={style.body}>

                <div style={style.body}>
                    <h4 style={style.title}>So'Permis - Votre auto-école locale de confiance !</h4>
                    <SimpleGrid minChildWidth='120px' spacing='70px' alignSelf="center">
                        <Card style={style.miniBoxImg} >
                            <Image src='./images/proprio.jpg' alt='Proprio' borderRadius='lg'/>
                        </Card>
                        <Card style={style.miniBoxTxt} >
                            <CardBody >
                                <Text style={style.textBox}>Chez So'Permis, nous redéfinissons l'expérience de l'auto-école au Havre. Notre engagement envers une formation de conduite personnalisée, proposée par des instructeurs dévoués, fait de nous le choix idéal. En tant qu'auto-école locale, nous comprenons les besoins spécifiques de nos élèves. Optez pour So'Permis et bénéficiez d'une formation efficace avec une approche moderne et des tarifs transparents.</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>

                </div>

            </div>
            <div style={style.transitionFadeBot}/>
        </div>
    )
}
export default PannelInformationSOPermis