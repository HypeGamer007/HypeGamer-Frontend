import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignUp from "./signup";
// import Home from "./Home";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route>
            {/* <Route path="/" element={<Home />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            <Route path="/signup" element={<SignUp />} />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;