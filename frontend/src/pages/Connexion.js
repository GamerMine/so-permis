import React, { useState } from 'react';
import axios from "axios";

const Connexion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerPasswordConfirm, setRegisterPasswordConfirm] = useState('');

  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        if (isLoginForm)
        {
          const response = await axios.post('http://localhost:8080/testBado', //TestConnexion
          { 
          email: email,
          password: password,
          
        });
        console.log(response.data);
        alert(response.data);
      }
      else
      {
          const response = await axios.post('http://localhost:8080/testBado', //TestConnexion
          { 
          email: registerEmail,
          password: registerPassword,
          confirmPassword : registerPasswordConfirm
          
        });
        console.log(response.data);
        alert(response.data);
      }

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
    <div style={styles.formContainer}>
      <div style={styles.box}>
      <h1 style={styles.titre}>{isLoginForm ? 'CONNEXION' : 'INSCRIPTION'}</h1>
        <form onSubmit={handleSubmit}>
          {isLoginForm && (
              <>
                <label style={styles.label}>
                  Adresse mail :
                  <br />
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.input}
                  />
                </label>
                <br />
                <label style={styles.label}>
                  Mot de passe :
                  <br />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={styles.input}
                  />
                </label>
              </>
            )}

            {/* Champs du formulaire d'inscription */}
            {!isLoginForm && (
              <>
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
              </>
            )}
            
            <br />
          <input type="submit" value={isLoginForm ? 'Se connecter' : 'S\'inscrire'} style={styles.bouton} />
        </form>

        {/* Bouton pour changer entre connexion et inscription */}
      </div>
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
