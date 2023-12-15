import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Connexion from "./pages/Connexion";
import AjouterForfaits from "./pages/AjouterForfait";
import GestionForfaits from "./pages/GestionForfaits";
import AjouterArticle from "./pages/AjouterArticle";
import GestionArticles from "./pages/GestionArticles";
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "./Theme/customTheme";
import Informations from "./pages/Informations";
import MentionsLegales from "./pages/MentionsLegales";
import RGPD from "./pages/RGPD";
import Cookies from "./pages/Cookies";
import Permis from "./pages/Permis";
import Contact from "./pages/PageContact";
import CodeDeLaRoute from "./pages/CodeDeLaRoute";
import QuiSommesNous from "./pages/QuiSommesNous.js";
import Newsletter from './pages/Newsletter.js';
import CreationCompte from './pages/CreationCompte.js'
function App() {
  return (

    <ChakraProvider theme={customTheme}>
      <Header />
      <Router>
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/CodeDeLaRoute" element={<CodeDeLaRoute />} />
            <Route exact path="/Informations" element={<Informations />} />
            <Route exact path="/MentionsLegales" element={<MentionsLegales />} />
            <Route exact path="/RGPD" element={<RGPD />} />
            <Route exact path="/Cookies" element={<Cookies />} />
            <Route exact path="/Permis" element={<Permis />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Connexion" element={<Connexion />} />
            <Route exact path="/AjouterForfaits" element={<AjouterForfaits />} />
            <Route exact path="/GestionForfaits" element={<GestionForfaits />} />
            <Route exact path="/AjouterArticle" element={<AjouterArticle />} />
            <Route exact path="/GestionArticles" element={<GestionArticles />} />
            <Route exact path="/QuiSommesNous" element={<QuiSommesNous />} />
            <Route exact path="/Newsletter" element={<Newsletter/>}/>
            <Route exact path="/CreationCompte" element={<CreationCompte/>}/>
          </Routes>
        </div>
      </Router>
      <Footer />
    </ChakraProvider>


  );
}

export default App;
