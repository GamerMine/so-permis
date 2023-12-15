import * as React from 'react';

import {
    Grid,
    Card,
    CardBody,
    Stack,
    Text,
    Image
} from "@chakra-ui/react";

const PermisB =()=>{
    const style ={
        body:{
        },

        title:{
            color: '#20AB9A',
            fontSize: "35px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px"
        },

        bottomCard: {
            margin:"70px",
            marginLeft:"200px",
            marginRight:"200px",
            padding:"30px",
            borderRadius:40,
            fontSize: "38px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white",
            textAlign: "center",
            fontFamily: "Montserrat-Bold, Helvetica",
            wordWrap: 'break-word',

        },

        textGaucheTitre: {
            paddingLeft:"90px",
            paddingRight:"90px",
            paddingBottom:"10px",
            paddingTop:"80px",
            borderRadius:0,
            backgroundColor: '#20AB9A',
            fontSize: "38px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            color: 'white',
            textAlign: "center"
        },

        textGauche: {
            backgroundColor: '#20AB9A',
            paddingLeft:"90px",
            paddingRight:"90px",
            paddingTop:"10px",
            color: 'white',
            fontSize: "33px",
            fontFamily: "Montserrat-Bold",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            textAlign: "center"

        },


        textDroite: {
            padding:"80px",
            borderRadius:0,
            backgroundColor: "#0F1411",
            color: 'white',
            fontSize: "32px",
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "justify"
        },
    };

    return (
        <Stack style={style.body}>
            <h4 style={style.title}>Forfait B express</h4>
            <Grid templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(2, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="70px" alignSelf="center">
                <Card style={{backgroundColor: '#20AB9A'}}>
                    <Text style={style.textGaucheTitre}>
                        Forfait B express
                    </Text>
                    <Text style={style.textGauche}>
                        Formation au permis B Classique accéléré en 1 mois
                    </Text>
                    <Text style={style.bottomCard}>1200€</Text>
                </Card>
                <Card style={{backgroundColor: '#0F1411'}}>
                    <Text style={style.textDroite}>
                        Le permis B en 1 mois, c'est comme un marathon. C'est un challenge qui demande de la motivation, de la concentration et de la persévérance. Mais c'est aussi une expérience fun et enrichissante. En 7 semaines, tu apprendras à conduire en sécurité, mais aussi à t'adapter à des situations de conduite variées.
<br/><br/>
                        Alors, si tu es prêt à relever le défi, lance-toi !</Text>
                </Card>
            </Grid>
        </Stack>
    )
}
export default PermisB