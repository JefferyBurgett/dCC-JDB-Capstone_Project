import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>DiverConnect</b>
          </Link>
        </li>
        <Link to='/diverslist/'>Divers Directory</Link>
        <li>
          <Link to='/home/'>Diver Profile</Link>
        </li>
        <li>
          <Link to='/divesite/'>Dive Sites</Link>
        </li>
        <li>
          <Link to='/product/'>Products</Link>
        </li>
        <li>
          <Link to='/tiptrick/'>Tip & Tricks</Link>
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
