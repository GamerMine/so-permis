// theme.js
import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    breakpoints: {
        base: "0px",
        sm: "320px",
        "smd":"449px",
        "smdp":"605px",
        "sd":"730px",
        md: "840px",
        "menu": "915px",
        lg: "960px",
        xl: "1325px",
        "2xl": "1536px",
    },

});
