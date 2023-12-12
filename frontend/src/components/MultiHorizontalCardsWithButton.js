import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Grid,
    GridItem,
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
            height: args.hauteur
        }
    }

    let cardsElements = [];

    args.cards.forEach((card) => {
        cardsElements.push((
            <GridItem>
                <Card style={style.card}>
                    <CardHeader>
                        <Text>{card.titre}</Text>
                    </CardHeader>
                    <CardBody>
                        <Text>{card.texteContenu}</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>{card.texteBouton}</Button>
                    </CardFooter>
                </Card>
            </GridItem>
        ))
    })

    return (
        <Grid style={args.style} templateColumns="repeat(3, 1fr)" gap="50px">
            {cardsElements}
        </Grid>
    );
}