import * as React from 'react';

import {
    Grid,
    Card,
    Stack,
    Text, GridItem, CardHeader, CardBody, CardFooter,
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {HOSTNAME} from "../Variables";

const PermisB =()=>{
    const style ={
        body:{
            marginTop: "30px",
            padding:"15px"
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
            padding:"15px",
            borderRadius:40,
            fontSize: "30px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white",
            textAlign: "center",
            fontFamily: "Montserrat-Bold, Helvetica",
            wordWrap: 'break-word',

        },

        textGaucheTitre: {
            marginTop:"80px",
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
            paddingTop:"10px",
            color: 'white',
            fontSize: "25px",
            fontFamily: "Montserrat",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            textAlign: "center"

        },


        textDroite: {
            borderRadius:0,
            backgroundColor: "#0F1411",
            color: 'white',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "justify"
        },
    };

    const [permisB, setPermisB] = useState([])
    useEffect(() => {
        getPermisExpress();
    },[])

    const getPermisExpress = async() => {
        try {

            const response = await axios.get(HOSTNAME+'/getListePermis');
            let result =[];
            let tmp = response.data;

            for (let key of tmp)
                if (key.type_f=="express")
                    result.push(
                        <Card style={{backgroundColor: '#20AB9A'}} marginLeft="-15px">
                            <Text style={style.textGaucheTitre}>
                                {key.nom}
                            </Text>
                            <Text style={style.textGauche}>
                                {key.info}
                            </Text>
                            <Text style={style.bottomCard}>{key.prix}</Text>
                        </Card>);
            setPermisB(result);
        } catch (ignored) {}
    }

    return (
        <Stack  style={style.body}>
            <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Forfait B express</Text>
            <Grid templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(2, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="70px" alignSelf="center">
                {permisB}
                <Card style={{backgroundColor: '#0F1411'}} fontSize={{base:"25px", sm: "18px"}}>
                    <Text style={style.textDroite} padding={{base:"15px", "smdp":"80px"}}>
                        Le permis B en 1 mois, c'est comme un marathon. C'est un challenge qui demande de la motivation, de la concentration et de la persévérance. Mais c'est aussi une expérience fun et enrichissante. En 7 semaines, tu apprendras à conduire en sécurité, mais aussi à t'adapter à des situations de conduite variées.
<br/><br/>
                        Alors, si tu es prêt à relever le défi, lance-toi !</Text>
                </Card>
            </Grid>
        </Stack>
    )
}
export default PermisB