import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Grid,
    Text,
    Link
} from "@chakra-ui/react";
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import {useNavigate} from "react-router-dom";

export class OCard {

    /**
     * Créé un objet OCard
     *
     * @param titre chaine de caractères
     * @param texteContenu chaine de caractères
     * @param texteBouton chaine de caractères
     * @param info
     */
    constructor(titre, texteContenu, texteBouton , info, link) {
        this.titre = titre;
        this.texteContenu = texteContenu;
        this.texteBouton = texteBouton;
        this.info = info ;
        this.isFlipped = false;
        this.isHovered = false;
        this.link = link;
    }
}

export const MultiHorizontalCardsWithButton = (args) => {
    const [cards, setCards] = useState(args.cards);
    const navigate = useNavigate();
    const isSmallDevice = window.matchMedia("(max-width: 1080px)").matches;

     const handleCardHover = (index, isHovered) => {
         const updatedCards = [...cards];
         updatedCards[index].isHovered = isHovered;
         setCards(updatedCards);
     };

    const handleCardClick = (index) => {
        const updatedCards = [...cards];
        updatedCards[index].isFlipped = !updatedCards[index].isFlipped ;
        setCards(updatedCards);
    }



    const handleRedirect = (link) =>{
        navigate(link);
    }

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
                isFlipped={card.isHovered || card.isFlipped }
                flipDirection="horizontal" // Ou "vertical", selon votre préférence
            >
                {/* Face avant */}
                <Card
                    style={style.card}
                    onMouseEnter={() => (!isSmallDevice ? handleCardHover(index, true) : null)}
                    onMouseLeave={() => (!isSmallDevice ? handleCardHover(index, false) : null)}
                    onClick={() => (isSmallDevice ? handleCardClick(index) : null)}
                >
                    <CardHeader>
                        <Text>{card.titre}</Text>
                    </CardHeader>
                    <CardBody>
                        <Text style={style.text}>{card.texteContenu}</Text>
                    </CardBody>
                </Card>

                {/* Face arrière */}
                <Card
                    style={{ ...style.card, borderRadius: "50px 10px 50px 10px", }}
                    onMouseEnter={() => (!isSmallDevice ? handleCardHover(index, true) : null)}
                    onMouseLeave={() => (!isSmallDevice ? handleCardHover(index, false) : null)}
                    onClick={() => (isSmallDevice ? handleCardClick(index) : null)}
                    backgroundImage={`url("../images/${card.info}.jpg")`}
                >
                    <CardBody alignSelf="center"  display="flex" flexDirection="column" justifyContent="center"  >
                        <Link href={`${card.link}`}> <Button style={style.button} >
                            <Text style={style.buttonText}>{card.texteBouton}</Text>
                        </Button></Link>
                    </CardBody>
                </Card>
            </ReactCardFlip>
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
