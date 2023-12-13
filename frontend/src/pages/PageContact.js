import React from "react";
import { ElfsightWidget } from 'react-elfsight-widget';
import { MultiHorizontalCardsWithButton, OCard } from "../components/MultiHorizontalCardsWithButton"

import { Stack } from "@chakra-ui/react";
import PannelMap from "../components/Map.js";
import PannelContact from "../components/Contact.js";

const PageContact = () => {

    const style = {
        para: {
            margin: "50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word'
        },

        baliseTiret: {
            marginLeft: "30px"
        },

        titre: {
            paddingBottom: "20px",
            paddingTop: "20px",
            color: '#1EC6B1',
            fontSize: 36,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word'
        },
        stitre: {
            paddingTop: "20px",
            paddingBottom: "10px",
            color: 'black',
            fontSize: 32,
            fontFamily: 'Montserrat',
            fontWeight: '600',
            wordWrap: 'break-word'
        }

    }

    return (
        <Stack marginTop="15px" gap="0">
            <PannelContact />
            <PannelMap />
        </Stack>
    );
};

export default PageContact