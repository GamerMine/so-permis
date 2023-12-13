import React, { useState } from 'react';
import axios from "axios";

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const response = await axios.post('http://localhost:8080/testBado', { //TestConnexion
          email: email,
          password: password,
        });
  
        // Gérez la réponse du serveur ici si nécessaire
        console.log(response.data);
        alert(response.data);
      } catch (error) {
        // Gérez les erreurs ici
        console.error(error);
        alert(error);
      }
  }

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
<div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.titre}>CONNEXION</h1>
        <form onSubmit={handleSubmit}>
          <label style={styles.label}>
            Adresse mail :
            </label>
            <br/>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} style={styles.input}/>
            <br/>
          <label style={styles.label}>
            Mot de passe :
            </label>
            <br/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={styles.input}/>
          <br />
            <input type="submit" value="Se connecter" style={styles.bouton}/>
        </form>
        <button onClick={switchForm} style={styles.boutonSwitch}>
          {isLoginForm ? 'Créer un compte' : 'Se connecter'}
        </button>
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
      border: '1px solid #ccc',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '500px',
      height : '350px',
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
