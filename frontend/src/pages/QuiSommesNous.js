import React from "react";

import {
    Stack,
    Text,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Heading,
    Button,
    Box,
} from "@chakra-ui/react";

const QuiSommesNous = () => {

    const style = {
        imgFond: {
            backgroundImage: "url('./images/VueHavre.jpg')", 
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover", 
            minHeight: "700px",
            marginBottom: "-28px"
        },
        para: {
            margin: "50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word',
            backgroundColor: "white",
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
        },

        cardsServices: {
            margin: "100px"
        },

        card: {
            marginTop: "150px",
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
        },

        textTitre: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold"
        },
        text: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
        },
        bottomCard: {
            padding: "30px",
            borderRadius: 40,
            fontSize: "10px",
            backgroundColor: "black",
            alignContent: "center",
            color: "white"
        }

    }

    return (
        <Stack>
            <div align="center" style={{ ...style.imgFond }}>
                <Card align='center' justify='center' style={style.card} height={{base:"350px" , "smdp":"450px"}} width={{base:"275px" , "smdp":"350px"}}>
                    <CardHeader>
                        <Heading style={{ ...style.textTitre }}></Heading >
                    </CardHeader>
                    <CardBody>
                        <Text style={{ ...style.text }}>Qui sommes nous ?</Text>
                    </CardBody>
                    <CardFooter>
                        <a href={"#presentation"}><Button style={{ ...style.bottomCard }}>Découvrez qui se cache derrière So'Permis</Button></a>
                    </CardFooter>
                </Card>

                
            </div>
            <Box w='100%' h='20px' align="center" bgGradient='linear(to-b, #FFFFFF00, #FFFFFF)'></Box>
            
            <div style={style.para} id={"presentation"}>
                <div style={style.titre}>Qui Sommes nous ?</div>
                Bienvenue chez SO Permis, votre auto-école de confiance au Havre ! Fondée récemment, notre établissement a rapidement gagné la confiance de la communauté locale en offrant une approche moderne et efficace pour obtenir votre code et permis de conduire.
                <br/>
                <br/>
                Chez SO Permis, nous comprenons que le processus d'obtention du permis de conduire peut parfois sembler complexe, c'est pourquoi nous nous efforçons de rendre votre expérience aussi fluide que possible. Forts de notre équipe passionnée et expérimentée d'instructeurs, nous mettons tout en œuvre pour vous accompagner à chaque étape du chemin.
                <br/>
                <br/>
                Ce qui distingue SO Permis, c'est notre engagement envers la réussite de nos élèves. Nous sommes fiers d'avoir déjà aidé des centaines de personnes à obtenir leur permis de conduire, ouvrant ainsi la voie à une nouvelle liberté sur la route. Notre taux de réussite élevé témoigne de notre dévouement à vous fournir les compétences nécessaires pour conduire en toute confiance et en toute sécurité.
                <br/>
                <br/>
                Nous comprenons que chaque personne a des besoins différents, c'est pourquoi SO Permis propose une gamme de formules flexibles pour vous aider à obtenir votre code et votre permis de manière adaptée à votre emploi du temps et à vos préférences. Que vous soyez débutant ou que vous cherchiez à perfectionner vos compétences de conduite, nous avons la formule qui vous convient.
                <br/>
                <br/>
                Rejoignez la communauté grandissante de conducteurs heureux qui ont choisi SO Permis pour leur formation routière. Faites confiance à notre équipe dévouée pour vous guider tout au long de votre parcours vers la liberté de conduire. Chez SO Permis, nous croyons que la route vers votre permis devrait être aussi agréable que possible !
                <br/>
                <br/>
                Contactez-nous dès aujourd'hui pour en savoir plus sur nos offres et commencer votre voyage vers la réussite au volant avec SO Permis.
            </div>
        
        </Stack>

    );
};

export default QuiSommesNous;
