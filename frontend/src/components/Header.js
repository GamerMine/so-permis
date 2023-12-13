import * as React from 'react';

const Header = () => {

    const style = {
        nav: {
            height: "100px",
            width: "100%",
            backgroundColor: "black"
        },

        header: {
            backgroundColor: "#0F1411",
            color: "white",
            height: "5%",
            margin: "-8px"
        },

        imgLogo: {
            width: "40%"
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
        }
    }

    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"/>

            <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet"/>
            <nav style={style.nav}>
                <div style={style.gridContainer}>
                    <a href={"/"}><img style={{...style.imgLogo, ...style.gridElement}}
                            src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png" alt={""}/></a>
                    <a style={{...style.gridElement, ...style.navLink}} href="/">ACCUEIL</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">PERMIS DE CONDUIRE</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">CODE DE LA ROUTE</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">QUI SOMMES-NOUS ?</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">CONTACT</a>
                </div>
            </nav>
        </header>
    )
}

export default Header