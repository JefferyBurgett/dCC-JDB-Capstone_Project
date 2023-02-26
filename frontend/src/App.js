// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DiverProfilePage from "./pages/DiverProfilePage/DiverProfilePage";
import DiveSitePage from "./pages/DiveSitePage/DiveSitePage";
import DiveSiteDetailPage from "./pages/DiveSiteDetailPage/DiveSiteDetailPage";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import TipTrickPage from "./pages/TipTrickPage/TipTrickPage";
import DiversListPage from "./pages/DiversListPage/DiversListPage";

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
        <Route path="/diverslist" element={<PrivateRoute><DiversListPage /></PrivateRoute>} />
        <Route path="/diverprofile/:userId" element={<PrivateRoute><DiverProfilePage /></PrivateRoute>}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/divesite" element={<PrivateRoute><DiveSitePage /></PrivateRoute>} />
        <Route path="/ds_detail/:siteId" element={<PrivateRoute><DiveSiteDetailPage /></PrivateRoute>} />
        <Route path="/product" element={<PrivateRoute><ProductPage /></PrivateRoute>} />
        <Route path="/product_detail/:productId" element={<PrivateRoute><ProductDetailPage /></PrivateRoute>} />
        <Route path="/tiptrick" element={<PrivateRoute><TipTrickPage /></PrivateRoute>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
