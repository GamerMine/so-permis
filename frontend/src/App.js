import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import './App.css';
import Test from "./Test";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
          <Router>
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Test />} />
              </Routes>
            </div>
          </Router>
      </ChakraProvider>
  );
}

export default App;
