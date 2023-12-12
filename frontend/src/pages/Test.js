import React, {useEffect, useState} from "react";
import axios from "axios";
import {
    Stack,
} from "@chakra-ui/react";

const Test = () => {
    const [text, setText] = useState()
    useEffect(() => {
        getText();
    }, [])

    const getText = async() => {
        const text = await axios.get('http://localhost:8080/')
        setText(text.data)
    }

    return (
        <Stack>

        </Stack>

    )
};

export default Test