import React, { useState, useEffect } from "react";
import {
    Box,
    Stack,
    Heading,
} from "@chakra-ui/react";
import { HOSTNAME } from "../Variables";
import axios from "axios";
import { MultiHorizontalCardsWithButton, OCard } from "../components/MultiHorizontalCardsWithButton"
import { ListeCode } from "../components/ListeCode";


const ForfaitCode =()=>{
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

    const [forfaitCode, setforfaitCode] = useState([]);
    useEffect(() => {
        getForfaitsCode();
    },[])

    const getForfaitsCode = async () => {
        try {
            const response = await axios.get(HOSTNAME + '/getForfaitsCode');
            let result =[];
            let tmp = response.data;

            result.push(

                    <ListeCode style={style.cardsServices} cards={[
                        ...tmp.map((forfait, index) => {
                            return (
                                new OCard(forfait.nom, forfait.infos, forfait.prix, "", "", false, false)
                            );
                        })
                    ]} />
                );


            setforfaitCode(result);
        }
        catch (error) {
            console.error('Erreur lors de la récupération des données :', error);
        }
    };
    return (
        <Stack w='25%' columns={2} justify='center' marginBottom={"3%"}>
            {forfaitCode}
        </Stack>
    )
}
export default ForfaitCode