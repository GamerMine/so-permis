import React, {useEffect, useState} from "react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import {ListePermis} from "../components/ListePermis";
import axios from "axios";

const Permis = () => {
    let result =[];
    const [listePermis, setListePermis] = useState([])
    useEffect(() => {
        getListePermis();
    },[])


    const getListePermis = async() => {
        const response = await axios.get('http://localhost:8080/getListePermis');
            result =[];
            let tmp = response.data;
            if(response.data.length !=782)
            for (let key of tmp)
                result.push(new OCard(key.nom, key.info, key.prix));

            setListePermis(result);
    }

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
        }
    }


    return (
        <Stack style={{gap: 0}} >
            <Stack style={{backgroundImage: "url('./images/auto-ecole 1.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>

                <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                    [
                        new OCard("", "PERMIS B", "Nos forfaits permis B","permis", "/Permis"),
                        new OCard("", "PERMIS B EXPRESS", "Nos forfaits permis B express","code", "/CodeDeLaRoute"),
                        new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée","conduite", "/CodeDeLaRoute"),
                    ]} hauteur={"450px"} largeur={"350px"}/>
                <DocumentsInformations titre={"Comment s’inscrire chez So’Permis ?"}/>

            </Stack>
            <Stack style={{backgroundImage: "url('./images/route.jpg')",backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
                <div style={style.transitionFadeBot}/>

                <ListePermis style={style.cardsServices} cards={listePermis} hauteur={"450px"} largeur={"350px"}/>
            </Stack>

        </Stack>
    );
};

export default Permis