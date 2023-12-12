import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Test from "./pages/Test";
import Header from "./components/Header";
import {ChakraProvider} from "@chakra-ui/react";

function App() {
  return (
      <ChakraProvider>
          <Header/>
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
