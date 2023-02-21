import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar" align="center">
        <ul>
          <li className="brand">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              <b>DiverConnect</b>
            </Link>
          </li>
          <li>
          <a class="nav-item-nb nav-link" href="/diverslist">Divers Directory</a>
          </li>
          <li>
          <a class="nav-item-nb nav-link" href="/diverdetail/">Diver Profile</a>
          </li>
          <li>
            <a class="nav-item-nb nav-link" href='/divesite/'>Dive Sites</a>
          </li>
          <li>
            <a class="nav-item-nb nav-link" href='/product/'>Products</a>
          </li>
          <li>
            <a class="nav-item-nb nav-link" href='/tiptrick/'>Tip & Tricks</a>
          </li>
          <li>
            {user ? (
              <button onClick={logoutUser}>Logout</button>
            ) : (
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
    </div>
  );
};

export default Navbar;
