import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react";
import Informations from "./pages/Informations";
import MentionsLegales from "./pages/MentionsLegales";
import RGPD from "./pages/RGPD";

function App() {
  return (
      <ChakraProvider>
          <Header/>
          <Router>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/Informations" element={<Informations />} />
                  <Route exact path="/MentionsLegales" element={<MentionsLegales />} />
                  <Route exact path="/RGPD" element={<RGPD />} />

              </Routes>
            </div>
          </Router>
          <Footer/>
      </ChakraProvider>


);
}

export default App;
