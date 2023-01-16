import React from "react";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Footer from "./components/common/Footer";
import Raffle from "./pages/Raffle";
import ResetScroll from "./components/common/ResetScroll";
import PurchaseInfo from "./pages/PurchaseInfo";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <ResetScroll />
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/raffle/:id" element={<Raffle />} />
          <Route path="/purchase-info" element={<PurchaseInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
