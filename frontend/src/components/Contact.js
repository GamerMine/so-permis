import React from "react";
import { useForm, Controller } from "react-hook-form";

import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Grid,
    GridItem,
    Input,
    Stack,
    Text,
    Textarea,
} from "@chakra-ui/react";

const Contact = () => {
    const style = {
        bouton: {
            background: "#1EC6B1",
            borderRadius: "45px",
        },
    };

    const {
        handleSubmit,
        control,
        register,
        formState: { errors },
    } = useForm();

    /*
    const validateEmail = (value) => {
        let error;
        if (!value) {
            error = "L'email est requis";
            //vérifier qu'il y a un @
        } else if (value.includes("@")) {
            error = "L'email doit contenir un @";
        }
        return error;
    };
    */


    const onSubmit = (data) => {
        console.log(data); // Faites quelque chose avec les données du formulaire ici
        // Ajoutez ici la logique pour soumettre les données
    };

    return (
        <Flex direction="column" align="center" justify="center">
            <Text fontSize="3xl" fontWeight="bold" mb={4}>
                Contact
            </Text>

            <Box width="60%">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={4}>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <GridItem>
                                <FormControl isInvalid={errors.firstName}>
                                    <FormLabel htmlFor="firstName">Prénom</FormLabel>
                                    <Input
                                        type="text"
                                        id="firstName"
                                        placeholder="Votre prénom"
                                        {...register("firstName", { required: "Le prénom est obligatoire" })}
                                    />
                                    <FormErrorMessage>{errors.firstName && errors.firstName.message}</FormErrorMessage>
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl isInvalid={errors.lastName}>
                                    <FormLabel htmlFor="lastName">Nom</FormLabel>
                                    <Input
                                        type="text"
                                        id="lastName"
                                        placeholder="Votre nom"
                                        {...register("lastName", { required: "Le nom est obligatoire" })}
                                    />
                                    <FormErrorMessage>{errors.lastName && errors.lastName.message}</FormErrorMessage>
                                </FormControl>
                            </GridItem>
                        </Grid>
                        <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                            <GridItem>
                                <FormControl isInvalid={errors.email}>
                                    <FormLabel htmlFor="email">Email</FormLabel>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="Votre email"
                                        {...register("email", { required: "L'email est obligatoire" })}
                                    //{...register("email", { required: "L'email est obligatoire", validate: validateEmail })}
                                    />
                                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                                </FormControl>
                            </GridItem>
                            <GridItem>
                                <FormControl>
                                    <FormLabel htmlFor="phone">Téléphone</FormLabel>
                                    <Input type="tel" id="phone" placeholder="Votre téléphone" {...register("phone")} />
                                </FormControl>
                            </GridItem>
                        </Grid>

                        <FormControl isInvalid={errors.subject}>
                            <FormLabel htmlFor="subject">Objet</FormLabel>
                            <Input type="text" id="subject" placeholder="Objet du message" {...register("subject", { required: "L'objet est obligatoire" })} />
                            <FormErrorMessage>{errors.subject && errors.subject.message}</FormErrorMessage>
                        </FormControl>

                        <FormControl isInvalid={errors.message}>
                            <FormLabel htmlFor="message">Message</FormLabel>
                            <Textarea id="message" placeholder="Votre message" {...register("message", { required: "Le message est obligatoire" })} />
                            <FormErrorMessage>{errors.message && errors.message.message}</FormErrorMessage>
                        </FormControl>

                        <Button type="submit" style={{ ...style.bouton }}>
                            Envoyer
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Flex>
    );
};

export default Contact;
