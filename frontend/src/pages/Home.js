import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";


const Home = () => {

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
        <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')"}} >
            <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                [
                    new OCard("", "PERMIS DE CONDUIRE", "Nos forfaits permis de conduire","permis"),
                    new OCard("", "CODE", "Nos forfaits code","code"),
                    new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite"),
                ]} hauteur={"450px"} largeur={"350px"}/>
            <Stack marginTop="15px" gap="0">
                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>
                <div style={{backgroundColor: "rgb(15, 20, 17)", padding: "20px"}}>
                    <h4 style={style.title}>Avis de nos clients</h4>
                    <ElfsightWidget widgetId="4b32669e-1d41-4c0b-a813-efdeb3498bad" />;
                </div>
                <PannelInformationSOPermis/>;
                <PannelInformationsVehicules/>;
                <PannelApplication/>;
            </Stack>
        </Stack>

    );
};

export default Home