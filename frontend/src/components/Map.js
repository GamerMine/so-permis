import {
    AspectRatio,
    Button,
    Stack,
    Box,
    VStack,
    HStack,
    Text,
    Link,
    Image,
} from "@chakra-ui/react";
import { BsInstagram, BsSnapchat } from "react-icons/bs";
import { Grid, GridItem } from "@chakra-ui/react"
import { Flex } from "@chakra-ui/react"
import Test from "../pages/Test";

// Example Address Component
const AddressComponent = () => {
    const style = {
        footer: {
            width: "100%",
            backgroundColor: "white",
            color: "black",
        },

    }
    return (
        <Box align="center">
            <Text fontSize="2xl" as="b">
                Adresse
            </Text>
            <p>20 Rue Jean Lurçat, 76610 Le Havre</p>
        </Box>
    );
};


// Example Opening Hours Component
const OpeningHoursComponent = () => {
    return (
        <Box align="center">
            <Text fontSize="2xl" as="b">
                Horaires d’ouvertures
            </Text>
            <p>
                Lundi               09 h 00 - 18 h 00 <br />
                mardi             09 h 00 - 18h 00 <br />
                mercredi       09 h 00 - 18 h 00 <br />
                jeudi               09 h 00 - 18 h 00 <br />
                vendredi       09 h 00 - 18 h 00<br />
                samedi          09 h 00 - 18 h 00<br />
                dimanche     fermé<br />
            </p>
        </Box>
    );
};

// Example Contact Component
const ContactComponent = () => {
    return (
        <Box align="center">
            <Text fontSize="2xl" as="b">
                Contactez-moi
            </Text>
            <p>téléphone : 02 78 34 10 63</p>
            <p>Réseaux sociaux</p>
            <Box display="flex" >
                <BsInstagram size={30} />
                <BsSnapchat style={{ marginLeft: "20px" }} size={30} />
            </Box>
        </Box>
    );
};

const iframe = () => {
    const style = {
        iframe: {
            width: "100%",
            margin: "150px",
            padding: "20px",
        },

    }
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
    const style = {
        footer: {
            width: "100%",
            backgroundColor: "white",
            color: "black",
        },

    }
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