import React from "react";

import {Stack} from "@chakra-ui/react";

const RGPD = () => {

    const style = {
        para:{
            margin:"50px",
            color: 'black',
            fontSize: 18,
            fontFamily: 'Montserrat',
            fontWeight: '400',
            wordWrap: 'break-word',
            textAlign:"justify"
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
                <div style={style.titre}>Politique de confidentialité</div>

                <div style={style.stitre}> Introduction</div>
                So’Permis s'engage à protéger la vie privée de ses clients et des utilisateurs de son site web. Cette politique de confidentialité décrit la manière dont nous collectons, utilisons et partageons les informations personnelles vous concernant.

                <div style={style.stitre}> Collecte de vos informations personnelles</div>
                Nous collectons les informations personnelles suivantes vous concernant lorsque vous utilisez notre site web :
                <ul>
                    <li style={style.baliseTiret}>Informations que vous nous fournissez : Nous collectons les informations que vous nous fournissez lorsque vous créez un compte, vous inscrivez à un cours ou nous contactez. Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone, votre adresse postale et d'autres informations de contact.</li>
                    <li style={style.baliseTiret}>Informations que nous collectons automatiquement : Nous collectons également des informations automatiquement lorsque vous utilisez notre site web. Ces informations peuvent inclure votre adresse IP, le type de navigateur que vous utilisez, la page web que vous visitez et les pages web que vous consultez sur notre site web.</li>
                </ul>

                <div style={style.stitre}> Utilisation de vos informations personnelles</div>
                Nous utilisons vos informations personnelles aux fins suivantes :
                <ul>
                    <li style={style.baliseTiret}> Pour fournir nos services : Nous utilisons vos informations personnelles pour fournir nos services, notamment pour vous permettre de créer un compte, de vous inscrire à un cours et de nous contacter.</li>
                    <li style={style.baliseTiret}>Pour améliorer nos services : Nous utilisons vos informations personnelles pour améliorer nos services, notamment pour analyser le trafic sur notre site web et comprendre les besoins de nos clients.</li>
                    <li style={style.baliseTiret}>Pour vous envoyer des communications marketing : Nous pouvons vous envoyer des communications marketing, telles que des e-mails promotionnels, si vous nous en avez donné l'autorisation.</li>
                </ul>

                <div style={style.stitre}> Partage de vos informations personnelles</div>
                Nous ne partageons vos informations personnelles avec des tiers que dans les cas suivants :
                <ul>
                    <li style={style.baliseTiret}> Avec nos prestataires de services : Nous partageons vos informations personnelles avec nos prestataires de services qui nous aident à fournir nos services. Ces prestataires de services sont tenus de protéger vos informations personnelles conformément à la loi.</li>
                    <li style={style.baliseTiret}>Avec votre consentement : Nous pouvons partager vos informations personnelles avec des tiers si vous nous en avez donné l'autorisation.</li>
                </ul>

                <div style={style.stitre}> Sécurité de vos informations personnelles</div>
                Nous prenons des mesures de sécurité pour protéger vos informations personnelles contre la perte, le vol et l'accès non autorisé. Ces mesures comprennent des pare-feu, des contrôles d'accès et des protocoles de cryptage.

                <div style={style.stitre}>Vos droits </div>
                Vous avez les droits suivants en matière de protection de vos données personnelles :
                <ul>
                    <li style={style.baliseTiret}>Le droit d'accès : Vous avez le droit d'accéder à vos informations personnelles que nous détenons.</li>
                    <li style={style.baliseTiret}>Le droit de rectification : Vous avez le droit de rectifier toute information personnelle inexacte ou incomplète que nous détenons.</li>
                    <li style={style.baliseTiret}>Le droit d'effacement : Vous avez le droit de nous demander d'effacer vos informations personnelles, sous réserve de certaines exceptions.</li>
                    <li style={style.baliseTiret}>Le droit à la limitation du traitement : Vous avez le droit de nous demander de limiter le traitement de vos informations personnelles, sous réserve de certaines exceptions.</li>
                    <li style={style.baliseTiret}>Le droit à la portabilité des données : Vous avez le droit de recevoir vos informations personnelles dans un format structuré, couramment utilisé et lisible par machine.</li>
                    <li style={style.baliseTiret}>Le droit d'opposition : Vous avez le droit de vous opposer au traitement de vos informations personnelles, sous réserve de certaines exceptions.</li>
                </ul>

                Pour exercer vos droits, veuillez nous contacter à l'adresse suivante :
                sopermis76@gmail.com ou directement au 20 Rue Jean Lurçat, 76610 Le Havre

                <div style={style.stitre}>Modifications de cette politique de confidentialité</div>
                Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente de la politique de confidentialité sera toujours publiée sur notre site web.

            </div>
        </Stack>

    );
};

export default RGPD