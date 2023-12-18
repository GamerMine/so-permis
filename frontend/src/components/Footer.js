import {
    Button,
    Stack,
    Box,
    VStack,
    Text,
    Link
} from "@chakra-ui/react";
import {BsInstagram, BsSnapchat} from "react-icons/bs";
import {useLocation} from "react-router-dom";

const Footer = () => {

    const normalHeaderLocations = ["/", "/CodeDeLaRoute", "/Informations", "/MentionsLegales", "/RGPD", "/Cookies", "/Permis", "/Contact", "/QuiSommesNous", "/Newsletter", "/ExemplePageArticle"]
    const location = useLocation();

    const style = {
        footer: {
            backgroundColor: "black",
            color: "white",
            height: "100%",
            marginBottom:"-25px"
        },

        imgLogo: {
            width: "600px",
            marginTop:"25px"
        },

        bouton: {
            background: "#1EC6B1",
            borderRadius: "45px",
        },
    }

    if (normalHeaderLocations.includes(location.pathname)) {
        return (
            <footer style={{backgroundColor: "black"}}>
                <Stack style={{...style.footer}} direction={['column', 'row']} spacing={"8%"} align='center'
                       display={{base: "grid", "sd": "flex"}}
                       gridTemplateColumns={{base: "repeat(2,1fr)"}}
                >
                    <Box align='center' marginLeft={{base: "8%", "sd": "0"}}>
                        <img style={{...style.imgLogo}}
                             src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"
                             alt={"logo So'Permis"}/>
                    </Box>
                    <Box>
                        <VStack>
                            <Box display="flex" marginTop="25px">
                                <BsInstagram size={30}/>
                                <BsSnapchat style={{marginLeft: "20px"}} size={30}/>
                            </Box>

                            <Box>
                                <a href="/Contact"><Button style={{...style.bouton}}
                                                           variant='solid'> Contactez-nous </Button></a>
                            </Box>

                        </VStack>
                    </Box>
                    <Box align='center'>
                        <Text fontSize='2xl' as='u'>Informations</Text>
                        <VStack>
                            <Link href="/">Accueil</Link>
                            <Link href="/Permis">Permis de conduire</Link>
                            <Link href="/CodeDeLaRoute">Code de la route</Link>
                            <Link href="/QuiSommesNous">Qui sommes-nous ?</Link>
                        </VStack>
                    </Box>
                    <Box align='center'>
                        <Text fontSize='2xl' as='u'>Coordonnées</Text>

                        <p>20 Rue Jean Lurçat, <br/> 76610 Le Havre</p>
                        <p>02 78 34 10 63</p>
                        <p>sopermis76@gmail.com</p>
                    </Box>

                </Stack>
                <Box align='center' marginTop={{base: "80px", "sd": "20px"}}>
                    <Text fontSize='sm' color={"gray"}><Link href="/MentionsLegales">Mentions légales</Link> - <Link
                        href="/RGPD">RGPD</Link> </Text>
                </Box>
            </footer>
        )
    }
    return (<header></header>);
}

export default Footer