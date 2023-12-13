import * as React from 'react';
import {Box, Grid, GridItem} from "@chakra-ui/react";

const Header = () => {

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

        navLink: {
            color: "white",
            textDecoration: "none",
        },

        gridElement: {
            padding: "20px",
            objectFit: "contain",
            fontSize: "20px",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
        },

        gridContainer: {
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto auto",
            justifyContent: "center",
            alignItems: "center",
            height: "100%"
        },

        bandeBleu: {
            backgroundColor: "#1EC6B1",
            height: "15px"
        }
    }

    return (
        <header>
            <Grid display={{xl:"flex" , lg:"grid"}} backgroundColor="black">
                <GridItem><img style={style.imgLogo}
                    src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"/></GridItem>
                <nav style={style.nav}>
                    <div style={style.gridContainer}>
                        <GridItem><a style={{...style.gridElement, ...style.navLink}} href="/">Accueil</a></GridItem>
                        <GridItem><a style={{...style.gridElement, ...style.navLink}} href="#">Permis de conduire</a></GridItem>
                        <GridItem><a style={{...style.gridElement, ...style.navLink}} href="/CodeDeLaRoute">Code de la route</a></GridItem>
                        <GridItem><a style={{...style.gridElement, ...style.navLink}} href="#">Qui sommes-nous ?</a></GridItem>
                        <GridItem><a style={{...style.gridElement, ...style.navLink}} href="#">Contact</a></GridItem>
                    </div>
                </nav>
        </Grid>
            <div style={style.bandeBleu}/>
        </header>
    )
}

export default Header