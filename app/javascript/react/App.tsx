import React from "react";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/common/Footer";

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
