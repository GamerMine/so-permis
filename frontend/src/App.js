import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react";
import Informations from "./pages/Informations"

function App() {
  return (
      <ChakraProvider>
          <Header/>
          <Router>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/survey" element={<Informations />} />
              </Routes>
            </div>
          </Router>
          <Footer/>
      </ChakraProvider>


);
}

export default App;
