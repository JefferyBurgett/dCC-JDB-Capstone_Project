// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DiverProfile from "./pages/DiverProfile/DiverProfile";
import DiveSite from "./pages/DiveSite/DiveSite";
import Product from "./pages/Product/Product";
import TipTrick from "./pages/TipTrick/TipTrick";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/home" element={<PrivateRoute><DiverProfile /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/diverprofile" element={<DiverProfile />} />
        <Route path="/divesite" element={<DiveSite />} />
        <Route path="/product" element={<Product />} />
        <Route path="/tiptrick" element={<TipTrick />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
