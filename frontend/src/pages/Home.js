import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack, Text} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PanelActus from "../components/PanelActus"
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";


const Home = () => {

    const style = {
        cardsServices: {
            margin: "150px"
        },

        title:{
            margin:"50px",
            color: "#20AB9A",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "35px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal"
        },
    }

    //const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    return (
        <Stack style={{gap: 0}} >
            <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
            <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                [
                    new OCard("", "PERMIS DE CONDUIRE", "Nos forfaits permis de conduire","permis", "/Permis"),
                    new OCard("", "CODE", "Nos forfaits code","code", "/CodeDeLaRoute"),
                    new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite", "/CodeDeLaRoute"),
                ]} />
                
                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>
            </Stack>
                <div style={{backgroundColor: "rgb(15, 20, 17)", padding: "20px"}}>
                    <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Avis de nos clients</Text>
                    <ElfsightWidget widgetId="5fa0deb8-de05-4291-bda1-e6071929d77e" />;
                </div>
                <PannelInformationSOPermis/>;
                <PanelActus/>
                <PannelInformationsVehicules/>;
                <PannelApplication/>;
        </Stack>

    );
};

export default Home