import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

import {Stack} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";
const MentionsLegales = () => {

    const style = {
        para:{
            margin:"50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word'
        },

        titre:{
            paddingBottom:"20px",
            paddingTop:"20px",
            color: '#1EC6B1',
            fontSize: 36,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word'
        },
        stitre: {
            paddingTop:"20px",
            paddingBottom:"10px",
            color: 'black',
            fontSize: 32,
            fontFamily: 'Montserrat',
            fontWeight: '600',
            wordWrap: 'break-word'
        }

    }

    return (
        <Stack marginTop="15px" gap="0">
    <div style={style.para}>
            <div style={style.titre}>Mentions légales</div>

                <div style={style.stitre}> Éditeur du site</div>

            So’Permis, auto école du Havre
            20 Rue Jean Lurçat
            76610 Le Havre


            <div style={style.stitre}> Directeur de la publication</div>

            Sonia So’Permis


            <div style={style.stitre}> Responsable de la rédaction</div>

            Équipe de développement du site


            <div style={style.stitre}> Données personnelles</div>

            L'auto-école du Havre s'engage à protéger les données personnelles de ses clients. Les données collectées sont nécessaires au traitement de la demande et à la gestion de la relation client. Elles sont conservées pendant une durée de trois ans à compter de la dernière interaction avec le client.

            Le client dispose d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition au traitement de ses données. Il peut exercer ces droits en contactant l'auto-école du Havre par email ou par courrier.


            <div style={style.stitre}> Propriété intellectuelle</div>

            L'ensemble du contenu du site est la propriété de l'auto-école du Havre. Toute reproduction, distribution, modification, adaptation, retransmission ou publication, même partielle, de ces différents éléments est strictement interdite sans l'accord préalable écrit de l'auto-école du Havre.


            <div style={style.stitre}> Liens hypertextes    </div>


            Le site peut contenir des liens hypertextes vers d'autres sites. L'auto-école du Havre n'a pas de contrôle sur ces sites et ne peut être tenu responsable de leur contenu.


            <div style={style.stitre}>  Loi applicable    </div>


            Les présentes mentions légales sont régies par la loi française.


            <div style={style.stitre}> Date de dernière mise à jour    </div>


            Les présentes mentions légales seront toujours à jour sur ce site
    </div>
        </Stack>

    );
};

export default MentionsLegales