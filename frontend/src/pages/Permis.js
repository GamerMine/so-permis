import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";


const Permis = () => {

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

            </Stack>
            <Stack marginTop="15px" gap="0">
                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>

            </Stack>
        </Stack>

    );
};

export default Permis