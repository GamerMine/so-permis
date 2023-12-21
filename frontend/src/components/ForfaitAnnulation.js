import React, { useState, useEffect } from "react";
import {
    Box,
    CardBody,
    GridItem, Grid,
} from "@chakra-ui/react";
import { HOSTNAME } from "../Variables";
import axios from "axios";

const ForfaitAnnulation =()=>{
    const style = {

        horaires: {
            color: "#1EC6B1",
        },

        box1: {
            backgroundImage: "url('/images/code-route.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },

        textBlanc: {
            color: "white",
        },

        carte: {
            backgroundColor: "rgba(30,198,177,0.79)",
        },

        bouton: {
            backgroundColor: "#05221F",
            color: "white",
        },

        texte: {
            color: "white",
            textAlign: "left",
        },

        prix: {
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            textAlign: "right",
        },

        police: {
            fontFamily: "Montserrat",
        },

        cardsServices: {
            margin: "100px"
        },

        tableau: {
            borderSpacing: "0",
            borderCollapse: "separate",
            borderRadius: "10px",
            border: "1px solid white",
        },

        entete: {
            borderBottom: "1px solid white",
        }
    };

    const [forfaitsAnnulation, setForfaitsAnnulation] = useState([]);
    useEffect(() => {
        getForfaitsAnnulation();
    },[])

    const getForfaitsAnnulation = async () => {
        try {
            const response = await axios.get(HOSTNAME + '/getForfaitsAnnulation');
            let tmp = response.data;
            let result=[];

            result.push(
                <Grid columns={2} >
                    {
                        tmp.map((forfait, index) => {
                            return (
                                <Box>
                                    <GridItem style={{ ...style.texte }} >{forfait.nom}  {forfait.infos}</GridItem>
                                    <GridItem style={{ ...style.prix }}>{forfait.prix}</GridItem>
                                </Box>
                            );
                        })
                    }
                </Grid>
            );

            setForfaitsAnnulation(result);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };
    return (
        <CardBody >
            {forfaitsAnnulation}
        </CardBody>
    )
}
export default ForfaitAnnulation