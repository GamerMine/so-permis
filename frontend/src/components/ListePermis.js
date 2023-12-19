import {
    Card,
    CardBody,
    CardHeader,
    Grid,
    Text,
    CardFooter
} from "@chakra-ui/react";
import {useEffect, useState} from "react";
import * as React from "react";
import axios from "axios";


const ListePermis = (args) => {
    const isSmallDevice = window.matchMedia("(max-width: 449px").matches;

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            height: args.hauteur,
            width: args.largeur,
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
            fontSize: "38px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            color: 'white',
            textAlign: "center"
        },
        bottomCard: {
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

    }

    const [listePermis, setListePermis] = useState([])
    useEffect(() => {
        getListePermis();
    },[])

    const getListePermis = async() => {
        try {

            const response = await axios.get('http://localhost:8080/getListePermis');
            let result =[];
            let tmp = response.data;
            for (let key of tmp)
                result.push(<Card style={{...style.card}} height={isSmallDevice ? "350px" : "450px"} alignSelf="center" flexDirection="column" justifyContent="center" width={isSmallDevice ? "275px" : "350px"}>
                    <CardHeader>
                        <Text style={style.textTitre}>{key.nom}</Text>
                    </CardHeader>
                    <CardBody alignSelf="center"  display="flex" flexDirection="column" justifyContent="center">
                        <Text style={style.text} fontSize={{base:"30px", "smd":"35px"}}>{key.info}</Text>
                    </CardBody>
                    <CardFooter>
                        <Text style={style.bottomCard}>{key.prix}</Text>
                    </CardFooter>
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