import {
    Button,
    Stack,
    Box,
    VStack,
    Text,
    Link
} from "@chakra-ui/react";
import Test from "../pages/Test";

const Footer = () => {
    const style = {
        footer: {
            width: "100%",
            backgroundColor: "black",
            color: "white",
            position: "absolute",
        },

        imgLogo: {
            height: "60%",
            width: "60%",
        },

        bouton: {
            background: "#1EC6B1",
            borderRadius: "45px",
        },
    }

    return (
        <footer style={{...style.footer}}> 
            <Stack direction={['column', 'row']} spacing={"5%"}  align='center'>
                <Box w='30%' align='center'>
                <img style={{...style.imgLogo}}
                    src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"/>    
                </Box>
                <Box>
                    <VStack>
                        <Box>
                            <img src="./Insta.png" alt="Instagram"/>
                            <img src="./Snapchat.png" alt="Snapchat"/>
                        </Box>

                        <Box>
                            <a href="#"><Button style={{...style.bouton}} variant='solid'> Contactez-nous </Button></a>
                        </Box>

                    </VStack>
                </Box>
                <Box align='center'>
                    <Text fontSize='2xl' as='u'>Informations</Text>
                    <VStack>
                        <Link>Accueil</Link>
                        <Link>Permis de conduire</Link>
                        <Link>Code de la route</Link>
                        <Link>Qui sommes-nous ?</Link>
                    </VStack>
                </Box>
                <Box align='center'>
                    <Text  fontSize='2xl' as='u'>Coordonnées</Text>
                
                    <p>20 Rue Jean Lurçat, <br/> 76610 Le Havre</p>
                    <p>02 78 34 10 63</p>
                    <p>sopermis76@gmail.com</p>
                </Box>
            </Stack>
        </footer>
    )
}

export default Footer