import * as React from "react";
import {Card, CardBody, CardFooter, CardHeader, Grid, GridItem, Text} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import axios from "axios";
import {HOSTNAME} from "../Variables";


export const ListePermis = (args) => {

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
        },


        text: {
            paddingTop:"10px",
            color: 'white',
            fontSize: "25px",
            fontFamily: "Montserrat",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            textAlign: "center"
        },
        textTitre:{
            marginTop:"30px",
            borderRadius:0,
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            color: 'white',
            textAlign: "center"
        },
        bottomCard: {
            height:"40px",
            borderRadius:40,
            fontSize: "30px",
            backgroundColor: "black",
            color:"white",
            textAlign: "center",
            fontFamily: "Montserrat-Bold, Helvetica",
            wordWrap: 'break-word',
        },

    };

    const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    const [listePermis, setListePermis] = useState([])
    useEffect(() => {
        getListePermis();
    },[])

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
                            <Text style={style.textTitre} fontSize={{base:"30px", "smd":"35px"}}>{key.info}</Text>
                        </CardBody>
                        <CardFooter display="flex" flexDirection="column" justifyContent="center" alignSelf="center" height={isSmallDevice ? "100px" : "75px"}>
                            <Text style={style.bottomCard}>{key.prix}</Text>
                        </CardFooter>
                    </GridItem>
                </Card>);
            setListePermis(result);
        } catch (ignored) {}
    }

    return (
        <Grid
            style={args.style}
            templateColumns={{
                base: `repeat(1, 1fr)`,
                md: `repeat(2, 1fr)`,
                xl: `repeat(3, 1fr)`,
            }}
            gap="90px"
            alignSelf="center"
        >
            {listePermis}
        </Grid>
    );
};

export default ListePermis;