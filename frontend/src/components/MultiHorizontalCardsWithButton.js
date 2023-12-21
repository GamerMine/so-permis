import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Grid,
    Text,
    CardFooter
} from "@chakra-ui/react";
import {useState} from "react";
import ReactCardFlip from "react-card-flip";
import {useNavigate, NavLink} from "react-router-dom";

export class OCard {

    /**
     * Créé un objet OCard
     *
     * @param titre chaine de caractères
     * @param texteContenu chaine de caractères
     * @param texteBouton chaine de caractères
     * @param info
     */
    constructor(titre, texteContenu, texteBouton , info, link, canFlip=true, isClickable=true) {
        this.titre = titre;
        this.texteContenu = texteContenu;
        this.texteBouton = texteBouton;
        this.info = info ;
        this.isFlipped = false;
        this.canFlip = canFlip;
        this.isHovered = false;
        this.isClickable = isClickable;
        this.link = link;
    }
}

export const MultiHorizontalCardsWithButton = (args) => {
    const [cards, setCards] = useState(args.cards);
    const navigate = useNavigate();
    const isSmallDevice = window.matchMedia("(max-width: 449px").matches;

     const handleCardHover = (index, isHovered) => {
         const updatedCards = [...cards];
         if (updatedCards[index] !== undefined) {
             updatedCards[index].isHovered = isHovered;
             setCards(updatedCards);
         }
     };

    const handleCardClick = (index) => {
        const updatedCards = [...cards];
        if (updatedCards[index] !== undefined) {
            updatedCards[index].isFlipped = !updatedCards[index].isFlipped;
            setCards(updatedCards);
        }
    }



    const handleRedirect = (link) =>{
        navigate(link);
    }

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "10px 50px 10px 50px",
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
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            width: "100%",
            left: 0,
            textAlign: "center",
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

        buttonForward: {
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
        let isInpageLink = card.link.startsWith("#");
        cardsElements.push(

            <ReactCardFlip
                key={index}
                isFlipped={card.isHovered || card.isFlipped }
                flipDirection="horizontal" // Ou "vertical", selon votre préférence
            >
                {/* Face avant */}
                <Card
                    style={{...style.card}}
                    onMouseEnter={() => (!isSmallDevice ? handleCardHover(index, true) : null)}
                    onMouseLeave={() => (!isSmallDevice ? handleCardHover(index, false) : null)}
                    onClick={() => (isSmallDevice ? handleCardClick(index) : null)}
                    height={isSmallDevice ? "350px" : "450px"}
                    width={isSmallDevice ? "275px" : "350px"}
                >
                    <CardHeader>
                        <Text style={style.textTitre}>{card.titre}</Text>
                    </CardHeader>
                    <CardBody>
                        <Text style={style.text} fontSize={{base:"30px", "smd":"35px"}}>{card.texteContenu}</Text>
                    </CardBody>
                    {card.canFlip === false && (
                        <CardFooter>
                            {card.link.startsWith("#") ? (
                                <a style={{width: "100%", textAlign: "center"}} href={`${card.link}`}>
                                    <Button style={style.buttonForward} >
                                        <Text style={style.buttonText}>{card.texteBouton}</Text>
                                    </Button>
                                </a>
                            ) : (
                                <NavLink to={`${card.link}`} style={{width: "100%", textAlign: "center"}}>
                                    <Button style={style.buttonForward} >
                                        <Text style={style.buttonText}>{card.texteBouton}</Text>
                                    </Button>
                                </NavLink>
                            )}
                        </CardFooter>
                    )}
                </Card>

                {/* Face arrière */}
                {card.canFlip === true && (
                    <Card
                        style={{ ...style.card, borderRadius: "50px 10px 50px 10px", }}
                        onMouseEnter={() => (!isSmallDevice ? handleCardHover(index, true) : null)}
                        onMouseLeave={() => (!isSmallDevice ? handleCardHover(index, false) : null)}
                        onClick={() => (isSmallDevice ? handleCardClick(index) : null)}
                        backgroundImage={`url("../images/${card.info}.jpg")`}
                        height={isSmallDevice ? "350px" : "450px"}
                        width={isSmallDevice ? "275px" : "350px"}
                    >
                        <CardBody alignSelf="center"  display="flex" flexDirection="column" justifyContent="center"  >
                            <NavLink to={`${card.link}`} style={{cursor: "pointer"}}> <Button style={style.button} >
                                <Text style={style.buttonText}>{card.texteBouton}</Text>
                            </Button></NavLink>
                        </CardBody>
                    </Card>
                )}

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
