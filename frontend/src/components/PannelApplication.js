import * as React from 'react';

import {
    Card,
    CardBody,
    Text,
    Image, Stack,Grid
} from "@chakra-ui/react";

const PannelApplication =()=>{
    const style ={
        body:{
            padding: "60px",
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
            alignContent:"center",
        },

        textBox:{
            color: 'black',
            fontSize: 30,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word',
            textAlign: "justify",
        },

        imageApp: {
            marginLeft: "auto",
            marginRight: "auto",
        }


    };

    return (
        <Stack style={style.body}>
            <Text style={style.title} textAlign={{base:"center", "sd":"left"}}>Application SAROOL</Text>
            <Grid style={{margin:"25px"}} templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="70px" alignSelf="center">
                <Card style={style.miniBox} marginRight={{base:"auto" , xl:"50px"}} marginLeft="auto" width={{base:"275px", "sd":"450px"}}>
                    <a href={"https://www.sarool.fr/"}><Image style={{...style.imageApp, width: "350px"}} src='./images/SAROOL LOGO.png'   alt='SAROOL' borderRadius='lg'/></a>
                </Card>
                <Card style={style.miniBox} marginRight={{base:"auto" , xl:"50px"}} marginLeft="auto" width={{base:"275px", "sd":"450px"}}>
                    <CardBody>
                        <Text style={style.textBox}>Visualise tes informations personnelles et gères tes disponibilités avec l’application SAROOL !</Text>
                        <Grid style={{margin:"25px"}} templateColumns={{base: `repeat(1, 1fr)`, md: `repeat(1, 1fr)`, xl: `repeat(2, 1fr)`,}} gap="30px" alignSelf="center">
                            <a href={"https://play.google.com/store/apps/details?id=fr.agx.sarool&pcampaignid=web_share"}><Image style={style.imageApp} src='./images/Google_Play_Store.png' alt='play store' borderRadius='lg'/></a>
                            <a href={"https://apps.apple.com/fr/app/sarool/id1438123977"}><Image style={style.imageApp} src='./images/apple store.png' alt='apple store' borderRadius='lg'/></a>
                        </Grid>
                    </CardBody>
                </Card>
            </Grid>
        </Stack>
    )
}
export default PannelApplication
