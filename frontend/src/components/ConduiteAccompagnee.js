import * as React from 'react';

import {
    Grid,
    Card,
    CardBody,
    Stack,
    Text, GridItem, CardHeader, CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import {HOSTNAME} from "../Variables";
import {useEffect, useState} from "react";

const ConduiteAccompagnee = () => {
    const style ={
        body:{
            padding: "15px",
            marginTop: "30px",
        },

        title:{
            color: '#20AB9A',
            fontSize: "30px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px"
        },

        miniBox:{
            background: '#20AB9A',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40,
        },

        bottomCard: {
            padding:"5px",
            borderRadius:40,
            fontSize: "30px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white",
            textAlign: "center",
            fontFamily: 'Montserrat',
            wordWrap: 'break-word',

        },
        textVoiture: {
            color: 'white',
            fontSize: "25px",
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

    const getListePermis = async() => {
        try {

            const response = await axios.get(HOSTNAME+'/getListePermis');
            let result =[];
            let tmp = response.data;

            for (let key of tmp)
                if (key.type_f=="permis")
                    result.push(<Card style={{...style.card}} height={isSmallDevice ? "350px" : "450px"} flexDirection="column" width={isSmallDevice ? "275px" : "350px"}>
                        <GridItem>
                            <CardHeader height={isSmallDevice ? "160px" : "175px"}>
                                <Text style={style.textTitre} fontSize={{base:"33px", "smdp":"38px"}}>{key.nom}</Text>
                            </CardHeader>
                            <CardBody height={isSmallDevice ? "100px" : "200px"} alignSelf="center"  display="flex" flexDirection="column" justifyContent="center">
                                <Text style={style.text} fontSize={{base:"30px", "smd":"35px"}}>{key.info}</Text>
                            </CardBody>
                            <CardFooter display="flex" flexDirection="column" justifyContent="center" alignSelf="center" height={isSmallDevice ? "100px" : "75px"}>
                                <Text style={style.bottomCard}>{key.prix}</Text>
                            </CardFooter>
                        </GridItem>
                    </Card>);
            setListePermis(result);
        } catch (ignored) {}
    }
    const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    const [listePermis, setListePermis] = useState([])
    useEffect(() => {
        getListeConduiteAcc();
    },[])
    const getListeConduiteAcc = async() => {
        try {

            const response = await axios.get(HOSTNAME+'/getListePermis');
            let result =[];
            let tmp = response.data;

            for (let key of tmp)
                if (key.type_f=="conduite_accompagnee")
                    result.push(
                        <Card style={style.miniBox} width={{"smdp":"450px" ,base:"275px"}}>
                            <GridItem>
                                <CardHeader height={isSmallDevice ? "160px" : "175px"}>
                                    <Text style={style.textVoiture} fontSize={{base:"33px", "smdp":"38px"}}>{key.nom}</Text>
                                </CardHeader>
                                <CardBody height={isSmallDevice ? "100px" : "200px"} alignSelf="center"  display="flex" flexDirection="column" justifyContent="center">
                                    <Text style={style.textVoiture} fontSize={{base:"30px", "smd":"35px"}}>{key.info}</Text>
                                </CardBody>
                                <CardFooter display="flex" flexDirection="column" justifyContent="center" alignSelf="center" height={isSmallDevice ? "100px" : "75px"}>
                                    <Text style={style.bottomCard}>{key.prix}</Text>
                                </CardFooter>
                            </GridItem>
                        </Card>
                        );
            setListePermis(result);
        } catch (ignored) {}
    }


    return (
        <Stack style={style.body}>
            <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Conduite accompagnée</Text>
            <Grid  templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="70px" alignSelf="center">
                {listePermis}
            </Grid>
        </Stack>
    )
}
export default ConduiteAccompagnee