import * as React from 'react';
import {Button, Grid, GridItem, Menu, MenuButton, MenuItem, MenuList, Stack, Text} from "@chakra-ui/react";
import {FaBars} from 'react-icons/fa'
import {useLocation} from "react-router-dom";

const Header = () => {

    const normalHeaderLocations = ["/Connexion", "/AjouterArticle", "/GestionArticles", "/AjouterForfaits", "/GestionForfaits", "/CreationCompte", "/ModifierArticle", "/PageAdmin"]
    const location = useLocation();
    const isSmallDevice = window.matchMedia("(max-width: 449px)").matches;

    const style = {
        nav: {
            height: "100px",
            width: "100%",
            backgroundColor: "black"
        },

        header: {
            backgroundColor: "black",
            color: "white",
            margin: "-8px"
        },

        imgLogo: {
            width: "425px"
        },

        navLinkBig: {
            color:"white",
            textDecoration: "none",
            display: "grid",
            alignSelf:"end"
        },

        navLinkSmall: {
            color:"black",
            textDecoration: "none",
            display: "grid",
            alignSelf:"end",
            fontFamily: "Montserrat, sans-serif",
        },

        gridElement: {
            padding: "20px",
            objectFit: "contain",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
        },

        gridContainer: {
            verticalAlign:"center",
            height: "100%"
        },

        bandeBleu: {
            backgroundColor: "#1EC6B1",
            height: "15px"
        }
    }

    if (normalHeaderLocations.includes(location.pathname)) {
        return (
            <header>
                {!isSmallDevice ? (

                        <Grid display={{xl: "flex", lg: "grid"}} backgroundColor="black"
                              height={{xl: "100px", lg: "213px", "sd": "255px", base: "455px"}}>
                            <GridItem>
                                <Stack>
                                    <img style={style.imgLogo}
                                           src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"
                                           alt={"logo So'Permis"}/>
                                    <Text style={{color: "white", fontFamily: "Luxurious Roman", textAlign: "center", margin: "0" , marginTop:"-20px"}} fontSize={"3xl"}>ADMINISTRATEUR</Text>
                                </Stack>
                            </GridItem>
                            <nav style={style.nav}>
                                <div>
                                    <Grid marginTop={{lg: "15px"}} style={style.gridContainer}
                                          justifyContent={{"sd": "center", md: "end"}}
                                          display={{"sd": "grid", lg: "flex", base: "grid"}}
                                          gridTemplateColumns={{"sd": "repeat(3,1fr)"}}>
                                        <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/PageAdmin">DASHBOARD</a></GridItem>

                                        <GridItem><a style={{...style.gridElement, ...style.navLinkBig}}
                                                     href="/GestionForfaits">FORFAIT</a></GridItem>
                                        <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="#">NEWSLETTER</a></GridItem>
                                        <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/GestionArticles">ARTICLES</a></GridItem>
                                        <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/Deconnexion">DECONNEXION</a></GridItem>
                                    </Grid>
                                </div>
                            </nav>
                        </Grid>
                    ) :
                    (
                        <Grid display="grid" backgroundColor="black">
                            <GridItem><img style={style.imgLogo}
                                           src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"
                                           alt={"logo So'Permis"}/></GridItem>
                            <div>
                                <Menu placement="bottom">
                                    <MenuButton as={Button} color="black" width="80%" marginTop="10px" marginBottom="10px"
                                                marginLeft="10%">
                                        <Grid templateColumns="auto 1fr" align="center">
                                            <GridItem>
                                                <FaBars/>
                                            </GridItem>
                                            <GridItem>
                                                <text style={style.navLinkSmall}> Menu</text>
                                            </GridItem>
                                        </Grid>
                                    </MenuButton>
                                    <MenuList>
                                        <a style={style.navLinkSmall} href="/GestionForfaits">
                                            <MenuItem>
                                                FORFAIT
                                            </MenuItem>
                                        </a>
                                        <a style={style.navLinkSmall} href="#">
                                            <MenuItem>
                                                NEWSLETTER
                                            </MenuItem>
                                        </a>
                                        <a style={style.navLinkSmall} href="/GestionArticles">
                                            <MenuItem>
                                                ARTICLES
                                            </MenuItem>
                                        </a>
                                        <a style={style.navLinkSmall} href="/Deconnexion">
                                            <MenuItem>
                                                DECONNEXION
                                            </MenuItem>
                                        </a>
                                    </MenuList>
                                </Menu>
                            </div>
                        </Grid>
                    )}
                <div style={style.bandeBleu}/>
            </header>
        )
    }
    return (
        <header>

        </header>
    )
}

export default Header