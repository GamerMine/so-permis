import * as React from "react";
import {Grid} from "@chakra-ui/react";

export class CardPermis {

    constructor(titre, texteContenu, texteBouton) {
        this.titre = titre;
        this.texteContenu = texteContenu;
        this.texteBouton = texteBouton;
    }
}
export const ListePermis = (args) => {

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
        },


        text: {
            paddingTop:"10px",
            color: 'white',
            fontSize: "25px",
            fontFamily: "Montserrat",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            textAlign: "center"
        },
        textTitre:{
            marginTop:"30px",
            borderRadius:0,
            fontSize: "38px",
            fontFamily: "Montserrat-Bold, Helvetica",
            fontWeight: '700',
            wordWrap: 'break-word',
            marginBottom:"30px",
            color: 'white',
            textAlign: "center"
        },
        bottomCard: {
            padding:"15px",
            borderRadius:40,
            fontSize: "30px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white",
            textAlign: "center",
            fontFamily: "Montserrat-Bold, Helvetica",
            wordWrap: 'break-word',
        },

    };

    let cardsElements = [];

    args.cards.forEach((card) => {
        cardsElements.push(
                <Card style={{...style.card}} height={isSmallDevice ? "350px" : "450px"}
                      width={isSmallDevice ? "275px" : "350px"}>
                    <CardHeader>
                        <Text style={style.textTitre}>{card.titre}</Text>
                    </CardHeader>
                    <CardBody>
                        <Text style={style.text} fontSize={{base: "30px", "smd": "35px"}}>{card.texteContenu}</Text>
                    </CardBody>
                    <CardFooter>
                        <Text style={style.bottomCard}>{card.texteBouton}</Text>
                    </CardFooter>
                </Card>
        );
    });

    return (
        <Grid
            style={args.style}
            templateColumns={{
                base: `repeat(1, 1fr)`,
                md: `repeat(2, 1fr)`,
                xl: `repeat(3, 1fr)`,
            }}
            gap="90px"
            alignSelf="center"
        >
            {cardsElements}
        </Grid>
    );
};
