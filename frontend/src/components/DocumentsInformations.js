import * as React from 'react';

import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
    Text,
    Icon, createIcon,
    Image, Grid
} from "@chakra-ui/react";

const DocumentsInformations = (arg) => {
    const style = {
        body: {
            padding: "20px",
            backgroundColor: "#0F1411",
        },
        transitionFadeTop:{
            background: "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(15, 20, 17) 100%)",
            height: "79px",
        },

        title:{
            margin:"50px",
            color: "#FFF",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "48px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "normal"
        },

        textBox:{
            color: "#ffffff",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontSize: "36px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
           // position: "fixed",
            textAlign: "center",
        },

        textLigne2:{
            color: "#1dc5b1",
            fontFamily: "Montagu Slab-Bold, Helvetica",
            fontSize: "60px",
            fontWeight: "700",
            letterSpacing: "0",
            lineHeight: "normal",
            textAlign: "center",
        },

        miniBox:{
            padding:"20px",
            background: "#0F1411",
            weight: "200"
        }
    }
    const iconLigne1 = [
        { name: '4 photos d’identité numérique', icon: <Icon width="150" height="139" viewBox="0 0 150 139" fill="none">path:(<path d="M150 0H0.000232458V17.2667H150V0Z" fill="#1EC6B1"/><path d="M150 120.867H0.000232458V138.133H150V120.867Z" fill="#1EC6B1"/><path d="M0 107.916V98.5921C0 87.7141 18.5625 79.1671 42.1875 79.1671C65.8125 79.1671 84.375 87.7141 84.375 98.5921V107.916H0Z" fill="#1EC6B1"/><path d="M63.2812 49.6417C63.2812 60.3698 53.8372 69.0667 42.1874 69.0667C30.5377 69.0667 21.0937 60.3698 21.0937 49.6417C21.0937 38.9135 30.5377 30.2167 42.1874 30.2167C53.8372 30.2167 63.2812 38.9135 63.2812 49.6417Z" fill="#1EC6B1"/><path d="M150 90.6495H112.5V107.916H150V90.6495Z" fill="#1EC6B1"/><path d="M150 60.4328H112.5V77.6995H150V60.4328Z" fill="#1EC6B1"/><path d="M150 30.2167H93.7501V47.4833H150V30.2167Z" fill="#1EC6B1"/>)</Icon>},
        { name: 'Justificatif de domicile de moins de 6 mois', icon:<Icon width="136" height="131" viewBox='0 0 136 131'> <path fill='#1EC6B1' d='M75.7861 2.74113C71.4171 -0.91371 64.5829 -0.91371 60.2139 2.74113L5.32077 48.6619C1.9244 51.5032 0 55.4564 0 59.592V115.439C0 123.746 7.61113 130.481 17 130.481H34C43.3889 130.481 51 123.746 51 115.439V90.3698C51 87.601 53.5371 85.3561 56.6667 85.3561H79.3333C82.4629 85.3561 85 87.601 85 90.3698V115.439C85 123.746 92.6115 130.481 102 130.481H119C128.389 130.481 136 123.746 136 115.439V59.592C136 55.4564 134.076 51.5032 130.679 48.6619L75.7861 2.74113Z'/></Icon>},
        { name: 'Carte d’identité', icon:<Icon width="156" height="128" viewBox="0 0 156 128" fill="none">path:(<path d="M86.6111 64C86.6111 75.7821 76.9728 85.3333 65.0833 85.3333C53.1939 85.3333 43.5556 75.7821 43.5556 64C43.5556 52.2179 53.1939 42.6667 65.0833 42.6667C76.9728 42.6667 86.6111 52.2179 86.6111 64Z" fill="#1EC6B1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M95.2222 102.4C95.2222 83.5487 110.644 68.2667 129.667 68.2667V25.6C129.667 19.2 123.208 12.8 116.75 12.8H97.375L84.4583 0H45.7083L32.7917 12.8H13.4167C6.95833 12.8 0.5 19.2 0.5 25.6V104.533C0.5 110.933 6.95833 117.333 13.4167 117.333H98.6849C96.4668 112.823 95.2222 107.755 95.2222 102.4ZM65.0833 98.1333C84.1065 98.1333 99.5278 82.8513 99.5278 64C99.5278 45.1487 84.1065 29.8667 65.0833 29.8667C46.0602 29.8667 30.6389 45.1487 30.6389 64C30.6389 82.8513 46.0602 98.1333 65.0833 98.1333Z" fill="#1EC6B1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M103.833 102.4C103.833 116.715 115.258 128 129.667 128C144.075 128 155.5 116.715 155.5 102.4C155.5 88.0853 144.075 76.8 129.667 76.8C115.258 76.8 103.833 88.0853 103.833 102.4ZM133.972 98.1333H144.736V106.667H133.972V117.333H125.361V106.667H114.597V98.1333H125.361V87.4667H133.972V98.1333Z" fill="#1EC6B1"/>)</Icon>}
    ];

    const iconLigne2 = [
        { name: 'Né(e) à partir de 1988', icon:'ASSR 2'},
        { name: 'Pour les moins de 25 ans',icon:'JAPD ou convocation'}
    ];

    const CardLigne1 =[];
    const CardLigne2 =[];

    iconLigne1.forEach((cpt, index) => {
        CardLigne1.push((
            <Card style={style.miniBox} >
                    {cpt.icon}
                <CardBody >
                    <Text style={style.textBox}>{cpt.name} </Text>
                </CardBody>
            </Card>
        ));
    });
    iconLigne2.forEach((cpt, index) => {
        CardLigne2.push((
            <Card style={style.miniBox} >
                <CardBody >
                    <Text style={style.textLigne2}>{cpt.icon} </Text>
                </CardBody>
                <CardBody >
                    <Text style={style.textBox}>{cpt.name} </Text>
                </CardBody>
            </Card>
        ));
    });

    return (
        <div>
            <div style={style.transitionFadeTop}/>
            <div style={style.body}>
                <h4 style={style.title}>{arg.titre}</h4>
                    <Grid templateColumns="repeat(3, 1fr)" gap ="70px" alignSelf="center">
                        {CardLigne1}
                    </Grid>
                    <Grid templateColumns="repeat(2, 1fr)" gap ="70px" alignSelf="center">
                        {CardLigne2}
                    </Grid>
            </div>

        </div>

    )
}

export default DocumentsInformations