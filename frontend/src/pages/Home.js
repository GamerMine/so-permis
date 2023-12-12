import React, {useEffect, useState} from "react";
import { ElfsightWidget } from 'react-elfsight-widget';

import axios from "axios";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Heading,
    Stack,
    StackDivider,
    Text,
    Image
} from "@chakra-ui/react";
import Header from "../components/Header";

const Home = () => {

    return (
        <Stack marginTop="15px">
                    <ElfsightWidget widgetId="4b32669e-1d41-4c0b-a813-efdeb3498bad" />;
        </Stack>

    );
};

export default Home