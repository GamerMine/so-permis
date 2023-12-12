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
                    new OCard("", "CONDUITE ACCOMPAGNÉE", "Nos forfaits conduite accompagnée")
                ]} hauteur={"300px"}/>
        </Stack>
    )
}

export default Home