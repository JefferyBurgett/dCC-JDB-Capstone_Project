// General Imports
import { Routes, Route, Redirect } from "react-router-dom";
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
        <Route path="/diverprofile" element={<PrivateRoute><DiverProfile /></PrivateRoute>} />
        <Route path="/divesite" element={<PrivateRoute><DiveSite /></PrivateRoute>} />
        <Route path="/product" element={<PrivateRoute><Product /></PrivateRoute>} />
        <Route path="/tiptrick" element={<PrivateRoute><TipTrick /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
