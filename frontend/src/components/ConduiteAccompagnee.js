import * as React from 'react';

import {
    Grid,
    Card,
    CardBody,
    Stack,
    Text,
    Image
} from "@chakra-ui/react";

const ConduiteAccompagnee =()=>{
    const style ={
        body:{
            padding: "80px",
        },

        title:{
            color: '#20AB9A',
            fontSize: "35px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px"
        },

        miniBox:{
            background: '#20AB9A',
            boxShadow: '10px 10px 4px rgba(0, 0, 0, 0.25)',
            borderRadius: 40,
            width: "450px"
        },

        bottomCard: {
            padding:"30px",
            borderRadius:40,
            fontSize: "38px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white",
            textAlign: "center",
            fontFamily: 'Montserrat',
            wordWrap: 'break-word',

        },
        textVoiture: {
            color: 'white',
            fontSize: "32px",
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "center"
        },

        imageVoiture: {
            marginLeft: "auto",
            marginRight: "auto",
        }
    };

    return (
        <Stack style={style.body}>
            <h4 style={style.title}>Conduite accompagnée</h4>
            <Grid style={{margin:"25px"}} templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="70px" alignSelf="center">
                <Card style={style.miniBox} >
                    <CardBody>
                        <Text style={style.textVoiture}>FORFAIT CONDUITE ACCOMPAGNÉE CODE<br/>
                            +<br/>
                            20 LEÇONS<br/>
                            +<br/>
                            CODE<br/>
                        </Text>
                        <Text style={style.bottomCard}>1200€</Text>
                    </CardBody>
                </Card>
                <Card style={style.miniBox} >
                    <CardBody>
                        <Text style={style.textVoiture}>FORFAIT CONDUITE ACCOMPANGNÉE<br/>
                            +<br/>
                            20 LEÇONS<br/><br/><br/></Text>
                        <Text style={style.bottomCard}>1110€</Text>
                    </CardBody>
                </Card>
            </Grid>
        </Stack>
    )
}
export default ConduiteAccompagnee