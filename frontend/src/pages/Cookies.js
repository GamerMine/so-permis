import React from "react";
import {Stack} from "@chakra-ui/react";

const Cookies = () => {

    const style = {
        para:{
            margin:"50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word'
        },

        baliseTiret:{
            marginLeft:"30px"
        },

        titre:{
            paddingBottom:"20px",
            paddingTop:"20px",
            color: '#1EC6B1',
            fontSize: 36,
            fontFamily: 'Montserrat',
            fontWeight: '700',
            wordWrap: 'break-word'
        },
        stitre: {
            paddingTop:"20px",
            paddingBottom:"10px",
            color: 'black',
            fontSize: 32,
            fontFamily: 'Montserrat',
            fontWeight: '600',
            wordWrap: 'break-word'
        }

    }

    return (
        <Stack marginTop="15px" gap="0">
            <div style={style.para}>
                <div style={style.titre}>Politique de cookies</div>

                <div style={style.stitre}>Qu'est-ce qu'un cookie ?</div>
                Un cookie est un petit fichier texte qui est stocké sur votre ordinateur ou votre appareil mobile lorsque vous visitez un site web. Les cookies sont utilisés pour collecter des informations sur votre navigation sur le site web.

                <div style={style.stitre}>Pourquoi utilisons-nous des cookies ?</div>
                Nous utilisons des cookies pour améliorer votre expérience sur notre site web. Les cookies nous permettent de :
                <ul>
                    <li style={style.baliseTiret}>Se souvenir de vos préférences de navigation, telles que la langue et la taille de la police.</li>
                    <li style={style.baliseTiret}>Vous proposer des contenus et des offres adaptés à vos intérêts.</li>
                    <li style={style.baliseTiret}>Analyser le trafic sur notre site web afin d'améliorer son contenu et sa performance.</li>
                </ul>

                <div style={style.stitre}> Utilisation de vos informations personnelles</div>
                Nous utilisons deux types de cookies :
                <ul>
                    <li style={style.baliseTiret}>Les cookies nécessaires : Ces cookies sont essentiels au fonctionnement de notre site web. Ils vous permettent de naviguer sur le site web et d'utiliser ses fonctionnalités.</li>
                    <li style={style.baliseTiret}>Les cookies facultatifs : Ces cookies ne sont pas essentiels au fonctionnement de notre site web. Ils sont utilisés pour améliorer votre expérience sur le site web, par exemple en vous proposant des contenus et des offres adaptés à vos intérêts.</li>
                </ul>

                <div style={style.stitre}>Comment gérer les cookies ?</div>
                Vous pouvez gérer les cookies à l'aide des paramètres de votre navigateur. La plupart des navigateurs vous permettent de bloquer les cookies, de supprimer les cookies existants ou de recevoir une notification lorsque des cookies sont envoyés à votre ordinateur.<br/><br/>
                Pour plus d'informations sur les cookies, veuillez consulter le site de la CNIL

                <div style={style.stitre}>Consentement</div>
                En continuant à utiliser notre site web, vous acceptez l'utilisation des cookies décrits dans cette politique.

            </div>
        </Stack>

    );
};

export default Cookies