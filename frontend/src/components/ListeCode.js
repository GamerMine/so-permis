import {
    Card,
    CardBody, CardFooter,
    CardHeader,
    Grid,
    Button,
    Text,
    Heading
} from "@chakra-ui/react";


export class OCard {
    constructor(titre, texteBouton) {
        this.titre = titre;
        this.texteBouton = texteBouton;
    }
}

export const ListeCode = (args) => {
    const isSmallDevice = window.matchMedia("(max-width: 449px").matches;

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
        },

        textTitre: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
            fontWeight:"bold"
        },
        text: {
            textAlign: "center",
            fontSize: "35px",
            color: "white",
            fontFamily: "Montserrat, sans-serif",
        },
        bottomCard: {
            padding:"30px",
            borderRadius:40,
            fontSize: "35px",
            backgroundColor: "black",
            alignContent:"center",
            color:"white"
        }

    };

    let cardsElements = [];

    args.cards.forEach((card) => {
        cardsElements.push(

                <Card align='center' justify='center' height={isSmallDevice ? "350px" : "450px"}
                      width={isSmallDevice ? "275px" : "350px"} style={style.card}>
                    <CardHeader>
                        <Heading  style={style.textTitre}>{card.titre}</Heading >
                    </CardHeader>
                    <CardBody>
                        <Text style={style.text}>{card.texteContenu}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button style={style.bottomCard}>{card.texteBouton}</Button>
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
                xl: `repeat(2, 1fr)`,}}
            gap="90px"
            alignSelf="center">

            {cardsElements}
        </Grid>
    );
};
