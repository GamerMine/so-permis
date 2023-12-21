import React, { useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';

const ConfirmationComponent = () => {

    const navigate = useNavigate();

    // Récupérer l'URL actuelle
    var urlCourante = window.location.href;

    // Créer un objet URL à partir de l'URL
    var urlObjet = new URL(urlCourante);
    var parametres = new URLSearchParams(urlObjet.search);

    // Accéder à un paramètre spécifique
    var parametre1 = parametres.get('token');
    var parametre2 = parametres.get('email');

    // Afficher les paramètres
    console.log(parametre1);
    console.log(parametre2);
    //attendre le chargement complet de la page
    useEffect(() => {
        const fetchData = async () => {
            const formData = new FormData();
            formData.append('token', parametre1);
            formData.append('email', parametre2);
            await axios.post('http://localhost:8080/confirmation', formData);
            navigate("/");
        };
        fetchData();
    }, []);

    return (
        <div>
            <p>Confirmation en cours...</p>
            {/* Vous pouvez ajouter une interface utilisateur supplémentaire ici si nécessaire */}
        </div>
    );
};

export default ConfirmationComponent;
