import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    Text
} from "@chakra-ui/react";
import {useState} from "react";
import ReactCardFlip from "react-card-flip";

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
        this.isFlipped = false;
    }
}

export const MultiHorizontalCardsWithButton = (args) => {
    const [cards, setCards] = useState(args.cards);

    const handleCardClick = (index) => {
        const updatedCards = [...cards];
        updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
        setCards(updatedCards);
    };

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            height: args.hauteur,
            width: args.largeur,
            borderRadius: "10px 50px 10px 50px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
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
            fontFamily: "Montserrat, sans-serif",
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
            color: "white",
        },
    };

    let cardsElements = [];

    args.cards.forEach((card, index) => {
        cardsElements.push(
            <ReactCardFlip
                key={index}
                isFlipped={card.isFlipped}
                flipDirection="horizontal" // Ou "vertical", selon votre préférence
            >
                {/* Face avant */}
                <Card
                    style={style.card}
                    onClick={() => handleCardClick(index)}
                >
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

                {/* Face arrière */}
                <Card
                    style={{ ...style.card, borderRadius: "50px 10px 50px 10px", }}
                    onClick={() => handleCardClick(index)}
                >
                    <CardHeader>
                        <Text>Back of the Card</Text>
                    </CardHeader>
                    <CardBody>

                        <Text style={style.text}>Test</Text>
                    </CardBody>
                    <CardFooter alignSelf="center">
                        <Button style={style.button}>
                            <Text style={style.buttonText}>Back Button</Text>
                        </Button>
                    </CardFooter>
                </Card>
            </ReactCardFlip>
        );
    });

    return (
        <Grid
            style={args.style}
            templateColumns="repeat(3, 1fr)"
            gap="90px"
            alignSelf="center"
        >
            {cardsElements}
        </Grid>
    );
};
