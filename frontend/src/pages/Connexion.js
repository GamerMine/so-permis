import React, { useState,createContext, useContext, useReducer } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { useNavigate  } from "react-router-dom";
const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};
const Connexion = () => {
    const [state, dispatch] = useReducer(authReducer, initialState);
    const login = (user) => {
        dispatch({ type: 'LOGIN', payload: user });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  const [emailError, setEmailError] = useState('');
  let navigate = useNavigate();


  const validateEmail = () => {
  // Une expression régulière pour valider l'email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Veuillez entrer une adresse e-mail valide.');
      return false;
    }
    if (password === "" || password == null)
    {
      setEmailError('Veuillez entrer une mot de passe');
      return false;
    }
    setEmailError('');
    return true;


  };


  const useHandleSubmit = async (event) => {
    event.preventDefault();
    if (!validateEmail()) {
      return;
    }
    try {
        let formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);
        const response = await axios.post('http://localhost:8080/TestConnexion', //TestConnexion
        formData);
        console.log(response.data);
        if (!(''+response.data).startsWith('Incorrect'))
        {
            login("testadmin");
            Cookies.set('compte',response.data);
            navigate("/");
          // Remplacement par une URL dans l'historique
        }
        else
        {
            logout();
            console.log(response.data);
        }
      } catch (error) {
        logout();
        // Gérez les erreurs ici
        console.error(error);
        alert(error);
      }
  }


  return (
  <div style={styles.container}>
    <div style={styles.formContainer}>
      <div style={styles.box}>
      <h1 style={styles.titre}>{'CONNEXION'}</h1>
        <form onSubmit={useHandleSubmit}>

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
            {emailError && <p style={styles.error}>{emailError}</p>}
            <br />
          <input type="submit" value={'Se connecter'} style={styles.bouton} />
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

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export {Connexion, useAuth};
