import * as React from 'react';
import {Button,  Grid, GridItem, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {FaBars} from 'react-icons/fa'

const Header = () => {


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
            width: "600px"
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

    return (
        <header>
            {!isSmallDevice ? (

                    <Grid display={{xl: "flex", lg: "grid"}} backgroundColor="black"
                          height={{xl: "100px", lg: "213px", "sd": "255px", base: "455px"}}>
                        <GridItem><img style={style.imgLogo}
                                       src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"
                                       alt={"logo So'Permis"}/></GridItem>
                        <nav style={style.nav}>
                            <div>
                                <Grid marginTop={{lg: "15px"}} style={style.gridContainer}
                                      justifyContent={{"sd": "center", md: "end"}}
                                      display={{"sd": "grid", lg: "flex", base: "grid"}}
                                      gridTemplateColumns={{"sd": "repeat(3,1fr)"}}>
                                    <GridItem><a style={{...style.gridElement, ...style.navLinkBig}}
                                                 href="/">Accueil</a></GridItem>
                                    <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/Permis">Permis de
                                        conduire</a></GridItem>
                                    <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/CodeDeLaRoute">Code
                                        de la route</a></GridItem>
                                    <GridItem><a style={{...style.gridElement, ...style.navLinkBig}} href="/QuiSommesNous">Qui
                                        sommes-nous ?</a></GridItem>
                                    <GridItem><a style={{...style.gridElement, ...style.navLinkBig}}
                                                 href="/Contact">Contact</a></GridItem>
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
                                    <a style={style.navLinkSmall} href="/">
                                        <MenuItem>
                                            Accueil
                                        </MenuItem>
                                    </a>
                                    <a style={style.navLinkSmall} href="/Permis">
                                        <MenuItem>
                                            Permis de conduire
                                        </MenuItem>
                                    </a>
                                    <a style={style.navLinkSmall} href="/CodeDeLaRoute">
                                        <MenuItem>
                                            Code de la route
                                        </MenuItem>
                                    </a>
                                    <a style={style.navLinkSmall} href="/QuiSommesNous">
                                        <MenuItem>
                                            Qui sommes-nous ?
                                        </MenuItem>
                                    </a>
                                    <a style={style.navLinkSmall} href="/Contact">
                                        <MenuItem>
                                            Contact
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

export default Header