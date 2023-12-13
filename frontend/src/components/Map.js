import {
    AspectRatio,
    Box,
    SimpleGrid,
    Text,
    VStack,
    Input,
} from "@chakra-ui/react";
import { BsInstagram, BsSnapchat } from "react-icons/bs";
import { Flex } from "@chakra-ui/react"

// Example Address Component
const AddressComponent = () => {

    const style = {
        adresse: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
        },
    }

    return (
        <Box align="center">
            <Text fontSize="2xl" as="b">
                Adresse
            </Text>
            <Text style={{ ...style.adresse }}>20 Rue Jean Lurçat, 76610 Le Havre</Text>
        </Box>
    );
};


// Example Opening Hours Component
const OpeningHoursComponent = () => {
    const style = {
        
        jour: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "bold",
        },

        horaires: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
        },

        ferme: {
            color: "red",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "bold",
        },
    }
    return (
        <Box align='center'>
            <Text fontSize="2xl" as="b">
                Horaires d’ouvertures
            </Text>
    
            <SimpleGrid columns={2}>
                <Box style={{...style.jour }}>Lundi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Mardi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Mercredi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Jeudi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Vendredi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Samedi</Box>
                <Box style={{ ...style.horaires }}>09 h 00 - 18 h 00</Box>
                <Box style={{ ...style.jour }}>Dimanche</Box>
                <Box style={{ ...style.ferme }}>fermé</Box>
            </SimpleGrid>
        </Box>
    );
};

// Example Contact Component
const ContactComponent = () => {
    const style = {
        contact: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
        },
    }
    return (
        <Box align="center">
            <Text fontSize="2xl" as="b">
                Contactez-nous
            </Text>
            <Text style={{ ...style.contact }}>téléphone : 02 78 34 10 63</Text>
            <Text style={{ ...style.contact }}>Réseaux sociaux</Text>
            <VStack>
                <Box display='flex'>
                    <BsInstagram size={30} />
                    <BsSnapchat style={{ marginLeft: "20px" }} size={30} />
                </Box>
            </VStack>

            <VStack align='center'>
                <Text fontSize="2xl" as="b">
                    Inscrivez-vous à notre Newlsletter
                </Text>
                <Input variant='flushed' placeholder="Entrez votre adresse mail" w='50%'/>
            </VStack>
        </Box>
    );
};

const iframe = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
                title="Google"
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"'
            />
        </AspectRatio>
    );
};


const Map = () => {

    return (
        <Flex direction="row" justify="space-between" align="flex-start">
            {/* Left Section */}
            <Box width="47%" margin="3%">

                {AddressComponent()}
                {OpeningHoursComponent()}
                {ContactComponent()}
            </Box>

            {/* Right Section */}
            <Box width="47%" margin="3%">
                {iframe()}
            </Box>
        </Flex>
    );
};


export default Map