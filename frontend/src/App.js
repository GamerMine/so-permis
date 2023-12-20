import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Connexion from "./pages/Connexion";
import AjouterForfaits from "./pages/AjouterForfait";
import GestionForfaits from "./pages/GestionForfaits";
import AjouterArticle from "./pages/AjouterArticle";
import GestionArticles from "./pages/GestionArticles";
import ModifierArticle from "./pages/ModifierArticle";
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
import ExemplePageArticle from './pages/ExemplePageArticle';
import PageAdmin from './pages/PageAdmin';
import HeaderAdmin from "./components/HeaderAdmin";
import ModifierForfaits from "./pages/ModifierForfaits"

function App() {

  return (

    <ChakraProvider theme={customTheme}>
      <Router>
        <Header/>
        <HeaderAdmin/>
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
            <Route exact path="/QuiSommesNous" element={<QuiSommesNous />} />
            <Route exact path="/Newsletter" element={<Newsletter />} />
            <Route exact path="/ExemplePageArticle" element={<ExemplePageArticle />} />

            <Route exact path="/Connexion" element={<Connexion />} />
            <Route exact path="/AjouterArticle" element={<AjouterArticle />} />
            <Route exact path="/GestionArticles" element={<GestionArticles />} />
            <Route exact path="/ModifierArticle/:articleId" element={<ModifierArticle />} />
            <Route exact path="/AjouterForfaits" element={<AjouterForfaits />} />
            <Route exact path="/GestionForfaits" element={<GestionForfaits />} />
            <Route exact path="/CreationCompte" element={<CreationCompte />} />
            <Route exact path="/PageAdmin" element={<PageAdmin />} />
            <Route exact path="/ModifierForfaits/:formationId" element={<ModifierForfaits />} />



          </Routes>
        <Footer />
        </div>

      </Router>
    </ChakraProvider>


  );
}

export default App;
