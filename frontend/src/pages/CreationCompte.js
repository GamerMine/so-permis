import React, { useState } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Connexion = () => {
  
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');
  const [emailError, setEmailError] = useState('');
  const [setMPError] = useState('');


  const [isLoginForm, setIsLoginForm] = useState(true);

  const validateEmail = () => {
    // Une expression régulière pour valider l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(registerEmail)) {
        setEmailError('Veuillez entrer une adresse e-mail valide.');
        return false;
    }
    if (registerPassword === "" || registerPassword == null)
    {
        setEmailError('Veuillez entrer une mot de passe');
        return false;
    }
    if (registerPassword != registerPasswordConfirm)
    {
        setEmailError('Le mot de passe n\'est pas le même que celui de la confirmation');
        return false;
    }
    setEmailError('');
    return true;

  };

  let navigate = useNavigate();
  const useHandleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail()) {
      return;
    }
    try {
          const valeurDuCookie = Cookies.get('compte');
          let formData = new FormData();
          formData.append('email', registerEmail);
          formData.append('password', registerPassword);
          formData.append('confirmPassword', registerPasswordConfirm);
          formData.append('compte', ''+valeurDuCookie);
          console.log(valeurDuCookie);
          const response = await axios.post('http://localhost:8080/CreationCompte',
          formData);
        console.log(response.data);
        navigate("/");
      } catch (error) {
        // Gérez les erreurs ici
        console.error(error);
      }
  }

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
  <div style={styles.container}>
    <div style={styles.formContainer}>
      <div style={styles.box}>
      <h1 style={styles.titre}>INSCRIPTION</h1>
        <form onSubmit={useHandleSubmit}>

            <label style={styles.label}>
                Adresse mail du compte :
                <br />
                <input
                type="text"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                style={styles.input}
                />
            </label>
            <br />
            <label style={styles.label}>
                Mot de passe du compte:
                <br />
                <input
                type="password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                style={styles.input}
                />
            </label>
            <br />
            <label style={styles.label}>
                Confirmer le mot de passe:
                <br />
                <input
                type="password"
                value={registerPasswordConfirm}
                onChange={(e) => setRegisterPasswordConfirm(e.target.value)}
                style={styles.input}
                />
            </label>

            {emailError && <p style={styles.error}>{emailError}</p>}
            <br />
          <input type="submit" value={'S\'inscrire'} style={styles.bouton} />
        </form>
      </div>
    </div>
  </div>
  );
};

const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '60vh', // 100% de la hauteur de la vue (viewport)
      backgroundColor : '#FFFFFF'
    },
    box: {
      margin :'20px',
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      maxheight : '400px',
      width: '100%',
      backgroundColor : '#EAEAEA'
      
    },
    titre :{
        color : 'rgb(30, 198, 177)',
        textAlign : 'center',
        fontFamily: 'Montserrat',
        fontSize: '30px',
        lineHeight: '59px',
        fontWeight: 'bold',
    },

    input:{
        border:'solid 1px grey',
        backgroundColor: '#DDDDDD',
        width :'100%',
        height: '40px'
    },
    label:{
        fontFamily: 'Montserrat',
        fontSize: '20px',
        fontWeight: '500',
        lineHeight: '44px',
        letterSpacing: '0em',
        textAlign: 'left',
    },

    bouton:{
        backgroundColor: '#20AB9AE5',
        width :'30%',
        padding: '10px',
        color :'#FFFFFF',
        borderRadius : '10px',
        float: 'right',
        margin: '10px',
        fontFamily: 'Montserrat',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '60%', 
      margin: '0 auto',
    },
    boutonSwitch: {
      backgroundColor: '#20AB9AE5',
      padding: '10px',
      color: '#FFFFFF',
      borderRadius: '10px',
      fontFamily: 'Montserrat',
      cursor: 'pointer',
      marginTop: '20px',
    },
  };
export default Connexion;
