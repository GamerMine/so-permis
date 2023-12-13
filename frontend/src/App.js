import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react";
import {customTheme} from "./Theme/customTheme";
import Informations from "./pages/Informations";
import MentionsLegales from "./pages/MentionsLegales";
import RGPD from "./pages/RGPD";
import Cookies from "./pages/Cookies";
import Permis from "./pages/Permis";
import CodeDeLaRoute from "./pages/CodeDeLaRoute";

function App() {
  return (
      <ChakraProvider theme={customTheme}>
          <Header/>
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
              </Routes>
            </div>
          </Router>
          <Footer/>
      </ChakraProvider>


);
}

export default App;
