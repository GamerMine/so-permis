import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    Text
} from "@chakra-ui/react";

export class OCard {

    /**
     * Créé un objet OCard
     *
     * @param titre chaine de caractères
     * @param texteContenu chaine de caractères
     * @param texteBouton chaine de caractères
     */
    constructor(titre, texteContenu, texteBouton) {
        this.titre = titre;
        this.texteContenu = texteContenu;
        this.texteBouton = texteBouton;
    }
}

/**
 * Ce composant créé plusieurs cards alignées horizontalement
 * Chaque cards est renseigné dans le paramètre
 *
 * @param args (doit avoir cards et hauteur)
 */
export const MultiHorizontalCardsWithButton = (args) => {

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            height: args.hauteur,
            width: args.largeur,
            borderRadius: "10px 50px 10px 50px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)"
        },

        text: {
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            left: 0,
            textAlign: "center",
            fontSize: "35px",
            color: "white",
        },

        button: {
            backgroundColor: "black",
            borderRadius: "15px",
            overflowWrap: "break-word",
            whiteSpace: "normal",
            height: "60px",
            marginLeft: "55px",
            marginRight: "55px",
        },

        buttonText: {
            color: "white"
        },
    }

    let cardsElements = [];

    args.cards.forEach((card) => {
        cardsElements.push((
            <Card style={style.card}>
                <CardHeader>
                    <Text>{card.titre}</Text>
                </CardHeader>
                <CardBody>
                    <Text style={style.text}>{card.texteContenu}</Text>
                </CardBody>
                <CardFooter alignSelf="center">
                    <Button style={style.button}>
                        <Text style={style.buttonText}>{card.texteBouton}</Text>
                    </Button>
                </CardFooter>
            </Card>
        ))
    })

    return (
        <Grid style={args.style} templateColumns="repeat(3, 1fr)" gap="90px" alignSelf="center">
            {cardsElements}
        </Grid>
    );
}