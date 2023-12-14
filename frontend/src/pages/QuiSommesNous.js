import React from "react";

import {Stack, Text, Card} from "@chakra-ui/react";
import DocumentsInformations from "../components/DocumentsInformations";
import PannelInformationSOPermis from "../components/PannelInformationSOPermis";
import PannelInformationsVehicules from "../components/PannelInformationsVehicules";
import PannelApplication from "../components/PannelApplication.js";
const QuiSommesNous = () => {

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
        <Stack style={{backgroundImage: "url('./images/VueHavre.jpg')", backgroundRepeat: "no-repeat", backgroundSize:"cover",  minHeight: "800px"}}>
            <div style={style.para}>
                <Card>
                    <Text>Décrouvrez qui nous sommes</Text>
                </Card>
                <div style={style.para}>
                    <div style={style.titre}>Qui nous sommes?</div>
                    Les voitures
                </div>
            </div>
        </Stack>

    );
};

export default QuiSommesNous