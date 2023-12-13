import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Header from "./components/Header"
import Footer from "./components/Footer"
import {ChakraProvider} from "@chakra-ui/react";
import {customTheme} from "./Theme/customTheme";

function App() {
  return (
      <ChakraProvider theme={customTheme}>
          <Header/>
          <Router>
            <div className="container">
              <Routes>
                  <Route exact path="/" element={<Home />} />
              </Routes>
            </div>
          </Router>
          <Footer/>
      </ChakraProvider>
  );
}

export default App;
