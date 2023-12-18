import {MultiHorizontalCardsWithButton, OCard} from "./MultiHorizontalCardsWithButton";

export const ListePermis = (args) => {

    const style = {
        card: {
            backgroundColor: "rgba(30,198,177,0.79)",
            borderRadius: "50px 10px 50px 10px",
            boxShadow: "10px 10px 5px rgba(0, 0, 0, 0.5)",
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
        cardsElements.push(new OCard(card.titre, card.texteContenu, card.texteBouton, undefined, undefined, false, false))
    });

    return (
        <MultiHorizontalCardsWithButton style={style.cardsServices} cards={cardsElements}/>
    );
};
