import React, {useEffect, useState} from "react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import {ListePermis,CardPermis} from "../components/ListePermis";
import axios from "axios";
import ConduiteAccompagnee from "../components/ConduiteAccompagnee";
import PermisB from "../components/PermisB"

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
        transitionFadeBot: {
            background: "linear-gradient(180deg, #0F1411 0%, rgba(0, 0, 0, 0) 100%)",
            height:"79px"
        },

        transitionFadeTop:{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(15, 20, 17) 100%)",
            height: "79px",
        },
        transitionFadebasbas:{
            background: "linear-gradient(180deg, #0F1411 0%, #000 100%)",
            height: "79px",
        },

        fondBas: {
            backgroundColor: "#0F1411",
        }
    }


    const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    return (
        <Stack style={{gap: 0}} >
            <Stack style={{backgroundImage: "url('./images/pagePermis.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                {!isSmallDevice ? (
                    <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                        [
                        new OCard("", "PERMIS B", "Nos forfaits permis B","permis", "/Permis"),
                        new OCard("", "PERMIS B EXPRESS", "Nos forfaits permis B express","code", "/CodeDeLaRoute"),
                        new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite", "/CodeDeLaRoute"),

                    ]} hauteur={"450px"} largeur={"350px"}/>
                ) : (
                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "PERMIS B", "Nos forfaits permis B","permis", "/Permis"),
                        new OCard("", "PERMIS B EXPRESS", "Nos forfaits permis B express","code", "/CodeDeLaRoute"),
                        new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite", "/CodeDeLaRoute"),
                    ]} hauteur={"300px"} largeur={"275px"}/>
                )}
                <DocumentsInformations titre={"Documents à fournir"}/>


            </Stack>
            <Stack style={{backgroundImage: "url('./images/route.jpg')",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div style={style.transitionFadeBot}/>

                <ListePermis style={style.cardsServices} hauteur={"450px"} largeur={"350px"}/>
                <div style={style.transitionFadeTop}/>

            </Stack>
            <div style={style.fondBas}>
                <PermisB/>
                <ConduiteAccompagnee/>
                <div style={style.transitionFadebasbas}/>
            </div>
        </Stack>
    );
};

export default Permis