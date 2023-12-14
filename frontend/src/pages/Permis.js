import React, {useEffect, useState} from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";
import {ListePermis} from "../components/ListePermis";
import axios from "axios";


const Permis = () => {
    const [listePermis, setListePermis] = useState()
    useEffect(() => {
        getListePermis();
    },[])

    const getListePermis = async() =>
    {
        const text = await axios.get('http://localhost:8080/getListePermis');
        console.log(text);
        setListePermis(text.data);
    }
    console.log(listePermis);

    const style = {
        cardsServices: {
            margin: "150px"
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
    }

    return (
        <Stack  >
            <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')"}}>

                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "PERMIS B", "Nos forfaits permis B","permis", "/Permis"),
                        new OCard("", "PERMIS B EXPRESS", "Nos forfaits permis B express","code", "/CodeDeLaRoute"),
                        new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite", "/CodeDeLaRoute"),
                    ]} hauteur={"450px"} largeur={"350px"}/>
                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>
            </Stack>
            <Stack style={{backgroundImage: "url('./images/route.jpg')"}}>

                <ListePermis style={style.cardsServices} cards={
                    [
                        new OCard("FORFAIT B COMPLET", "Code + 30 leçons de conduite", "990€"),
                        new OCard("FORFAIT B", "30 leçons de conduite (sans code)", "890€"),
                        new OCard("FORFAIT B COMPLET", "Code + 25 leçons de conduite", "1210€"),
                        new OCard("FORFAIT B", "25 leçons de conduite (sans code)", "1110€"),
                        new OCard("FORFAIT B COMPLET", "Code + 30 leçons de conduite", "1430€"),
                        new OCard("FORFAIT B", "30 leçons de conduite (sans code)", "1330€"),
                        new OCard("CONDUITE SUPERVISÉE", "", "1110€"),
                    ]} hauteur={"450px"} largeur={"350px"}/>

            </Stack>
        </Stack>

    );
};

export default Permis