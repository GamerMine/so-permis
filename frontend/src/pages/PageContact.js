import React from "react";
import { Stack } from "@chakra-ui/react";
import PannelMap from "../components/Map.js";
import PannelContact from "../components/Contact.js";

const PageContact = () => {

    return (
        <Stack marginTop="15px" gap="0">
            <PannelContact/>
            <PannelMap/>
        </Stack>
    );
};

export default PageContact