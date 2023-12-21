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

const Newsletter = () => {
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
                        <FormControl isInvalid={errors.email}>
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <Input
                                type="email"
                                id="email"
                                placeholder="Entrez votre adress mail"
                                {...register("email", { required: "L'email est obligatoire" })}
                            //{...register("email", { required: "L'email est obligatoire", validate: validateEmail })}
                            />
                            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
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

export default Newsletter;