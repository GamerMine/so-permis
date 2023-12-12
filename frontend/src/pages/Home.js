import {Stack} from "@chakra-ui/react";
import {MultiHorizontalCardsWithButton, OCard} from "../components/MultiHorizontalCardsWithButton"

const Home = () => {

    const style = {
        cardsServices: {
            margin: "150px"
        }
    }

    return (
        <Stack>
            <MultiHorizontalCardsWithButton style={style.cardsServices} cards={
                [
                    new OCard("", "PERMIS DE CONDUIRE", "Nos forfaits permis de conduire"),
                    new OCard("", "CODE", "Nos forfaits code"),
                    new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée")
                ]} hauteur={"450px"} largeur={"350px"}/>
        </Stack>
    )
}

export default Home