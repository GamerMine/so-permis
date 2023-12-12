const Header = () => {

    const style = {
        nav: {
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
            height: "auto",
            width: "50%"
        },

        navLink: {
            color: "white",
            textDecoration: "none"
        },

        gridElement: {
            padding: "20px",
            objectFit: "contain",
            fontSize: "30px",
            textAlign: "center"
        },

        gridContainer: {
            display: "grid",
            gridTemplateColumns: "auto auto auto auto auto auto"
        }
    }

    return (
        <header>
            <nav style={style.nav}>
                <div style={style.gridContainer}>
                    <img style={{...style.imgLogo, ...style.gridElement}}
                         src="https://www.easysysteme.fr/photos/auto-ecoles/bureaux/so-permis_logo_64f5d2aa4bc5d.png"/>

                    <a style={{...style.gridElement, ...style.navLink}} href="/">Accueil</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">Permis de conduire</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="/CodeDeLaRoute">Code de la route</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">Qui sommes-nous ?</a>
                    <a style={{...style.gridElement, ...style.navLink}} href="#">Contact</a>
                </div>
            </nav>
        </header>
    )
}

export default Header