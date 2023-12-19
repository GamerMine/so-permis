import * as React from 'react';

import {
    Card,
    Text,
    Grid,
    GridItem
} from "@chakra-ui/react";
import {FaHouseChimney} from "react-icons/fa6";
import {TbCameraPlus} from "react-icons/tb";
import {BsPersonVcard} from "react-icons/bs";

const DocumentsInformations = (arg) => {
    const style = {
        body: {
            paddingTop: "20px",
            paddingBottom: "20px",
            backgroundColor: "#0F1411",
        },
        transitionFadeTop:{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(15, 20, 17) 100%)",
            height: "79px",
        },

        title:{
            margin:"50px",
            color: "#FFF",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal",
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

        textLigne:{
            color: "#20AB9A",
            fontFamily: "Montagu Slab-Bold, Helvetica",
            fontSize: "35px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
            textAlign: "center",
        },

        miniBox:{
            padding:"20px",
            background: "#0F1411",
            weight: "200"
        },

        grid1: {
            margin: "10%",
            display: "grid",
            gap: "40px",
            alignSelf: "center"
        },

        grid2: {
            margin: "10%",
            display: "grid",
            gap: "40px",
            alignSelf: "center"
        },

        icon:{
            width:"85px",
            height: "85px",
            alignSelf:"center",
            color:"#20AB9A",
        },

        card:{
            backgroundColor:"#0F1411"
        }
    }

    return (
        <div>
            <div style={style.transitionFadeTop}/>
            <div style={style.body}>
                <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>{arg.titre}</Text>
                <Grid style={{...style.grid1}}
                      gridTemplateColumns={{base:"repeat(1,1fr)" , "md":"repeat(3,1fr)"}}>
                    <GridItem>
                        <Card style={{...style.card}}>
                            <TbCameraPlus style={{...style.icon}}/>
                            <Text style={{...style.textBox}}> 4 photos d’identité numérique </Text>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card style={{...style.card}}>
                            <FaHouseChimney style={{...style.icon}}/>
                            <Text style={{...style.textBox}}> Justificatif de domicile de moins de 6 mois </Text>
                        </Card>
                    </GridItem>
                    <GridItem>
                        <Card style={{...style.card}}>
                            <BsPersonVcard style={{...style.icon}}/>
                            <Text style={{...style.textBox}}> Carte d’identité </Text>
                        </Card>
                    </GridItem>
                </Grid>
                <Grid  style={{...style.grid2}} gridTemplateColumns={{base:"repeat(1,1fr)" , "md":"repeat(2,1fr)"}}>
                    <GridItem >
                        <Card style={{...style.card}}>
                            <Text style={{...style.textLigne}}> ASSR 2 </Text>
                            <Text style={{...style.textBox}}> Né(e) à partir de 1988 </Text>
                        </Card>
                    </GridItem>
                    <GridItem >
                        <Card style={{...style.card}}>
                            <Text style={{...style.textLigne}}> JAPD ou convocation </Text>
                            <Text style={{...style.textBox}}> Pour les moins de 25 ans </Text>
                        </Card>
                    </GridItem>
                </Grid>
            </div>
        </div>

    )
}

export default DocumentsInformations