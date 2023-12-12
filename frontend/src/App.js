import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home.js";
import CodeDeLaRoute from "./pages/CodeDeLaRoute.js";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
          <Header/>
          <Router>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route exact path="/CodeDeLaRoute" element={<CodeDeLaRoute />} />
              </Routes>
            </div>
          </Router>
          <Footer/>
      </ChakraProvider>
  );
}

export default App;
