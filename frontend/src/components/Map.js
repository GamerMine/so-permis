import {
    AspectRatio,
    Box,
    Text,
    VStack,
    Input, Stack, GridItem, Grid,
    FormControl,
    FormErrorMessage,
    Button,
} from "@chakra-ui/react";
import { BsInstagram, BsSnapchat } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Example Address Component
const AddressComponent = () => {
    const style = {
        adresse: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
        },
    };

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
    };
    return (
        <Box align='center' marginTop="40px">
            <Text fontSize="2xl" as="b">
                Horaires d’ouvertures
            </Text>
    
            <Grid w={{base:"100%", md:"85%"}} gridTemplateColumns={{base:"1fr" , md:"1fr 1fr"}}>
                <GridItem style={{...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Lundi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Mardi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Mercredi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Jeudi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Vendredi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Samedi</GridItem>
                <GridItem style={{ ...style.horaires }} textAlign={{md:"left", base:"center"}}>09 h 00 - 18 h 00</GridItem>
                <GridItem style={{ ...style.jour }} textAlign={{md:"right" , base:"center"}} marginRight={{md:"30px"}}>Dimanche</GridItem>
                <GridItem style={{ ...style.ferme }} textAlign={{md:"left", base:"center"}}>fermé</GridItem>
            </Grid>
        </Box>
    );
};

// Example Contact Component
const ContactComponent = () => {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const validateEmail = () => {
        console.log("validateEmail");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    const handleSubmit = async (event) => {
        console.log("handleSubmit");
        event.preventDefault();

        if (!validateEmail()) {
            return;
        }

        try {
            setIsSubmitting(true);
            console.log("try");

            const formData = new FormData();
            formData.append('email', email);
            /*
                        const response = await axios.post(
                            "http://localhost:8080/Contact",
                            formData
                        );
            */

            const response = await axios.post(
                "http://localhost:8080/subscribeNewsletter",
                formData
            );

            if (response.data === true) {
                navigate("/");
                // You may want to handle success in a different way, like showing a success message.
            } else {
                console.log(response.data);
                alert("Utilisateur inscrit " + response.data);
            }
        } catch (error) {
            alert(error);
        } finally {
            setIsSubmitting(false);
        }
    };
    const style = {
        contact: {
            color: "black",
            fontSize: "20px",
            fontFamily: "Montserrat",
            fontWeight: "normal",
        },
    };
    return (
        <Box align="center" marginTop="40px">
            <Text fontSize="2xl" as="b">
                Contactez-nous
            </Text>
            <Text style={{ ...style.contact }}>téléphone :</Text> <Text style={{...style.contact}} fontSize="15px"> 02 78 34 10 63</Text>
            <Text style={{ ...style.contact }}>Réseaux sociaux</Text>
            <VStack>
                <Box display="flex">
                    <BsInstagram size={30} />
                    <BsSnapchat style={{ marginLeft: "20px" }} size={30} />
                </Box>
            </VStack>

            <VStack align="center" marginTop="40px">
                <form onSubmit={handleSubmit}>
                    <FormControl >
                        <Text fontSize="2xl" as="b">
                            Inscrivez-vous à notre Newsletter
                        </Text>
                        <Input
                            type="email"
                            id="email"
                            variant="flushed"
                            placeholder="Entrez votre adresse mail"
                            w="50%"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!validateEmail() && email.length > 0}
                        />
                        <FormErrorMessage>
                            {email.length > 0 && !validateEmail() && "Adresse email invalide"}
                        </FormErrorMessage>
                        <Button type="submit" isLoading={isSubmitting} mt={4}>
                            S'inscrire
                        </Button>
                    </FormControl>
                </form>
            </VStack>
        </Box>
    );
};

const iframe = () => {
    return (
        <AspectRatio ratio={16 / 9}>
            <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=So'Permis%2020%20Rue%20Jean%20Lur%C3%A7at,%2076610%20Le%20Havre+(So'Permis)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
        </AspectRatio>
    );
};

const Map = () => {
    return (
        <Stack direction={{base:"column","md":"row"}} alignItems="center" marginTop="50px" marginBottom="50px">
            {/* Left Section */}
            <Box width={{base:"78%","md":"47%"}} margin="auto" >

                {AddressComponent()}
                {OpeningHoursComponent()}
                {ContactComponent()}
            </Box>

            {/* Right Section */}
            <Box width={{base:"74%","md":"47%"}}  margin="auto" marginTop="25px">
                {iframe()}
            </Box>
        </Stack>
    );
};


export default Map