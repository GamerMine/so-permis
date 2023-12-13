import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton";

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import {PannelListePermisB, cardPermis} from "../components/PannelListePermisB.js";
const Permis = () => {

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            height: args.hauteur,
            width: args.largeur,
            borderRadius: "10px 50px 10px 50px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
        },

        text: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            left: 0,
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
        },

        button: {
            backgroundColor: "black",
            borderRadius: "15px",
            overflowWrap: "break-word",
            whiteSpace: "normal",
            height: "60px",
            marginLeft: "55px",
            marginRight: "55px",
        },

        buttonText: {
            color: "white",
        },
    };

    return (
        <Stack marginTop="15px" gap="0">
            <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')"}} >
                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "PERMIS B", "Nos forfaits conduite permis B","/CodeDeLaRoute"),
                        new OCard("", "PERMIS B EXPRESS", "Nos forfaits conduite permis B express","/CodeDeLaRoute"),
                        new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","/CodeDeLaRoute")
                    ]} hauteur={"450px"} largeur={"350px"}/>
            </Stack >PannelListePermisB
            <DocumentsInformations titre={"Documents à fournir"}/>
            <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')"}} >
                <PannelListePermisB style={style.cardsServices} cards={
                    [
                        new cardPermis("", "PERMIS B", "Nos forfaits conduite permis B"),
                        new cardPermis("", "PERMIS B EXPRESS", "Nos forfaits conduite permis B express"),
                        new cardPermis("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée")
                    ]} hauteur={"450px"} largeur={"350px"}/>
            </Stack >

        </Stack>

    );
};

export default Permis