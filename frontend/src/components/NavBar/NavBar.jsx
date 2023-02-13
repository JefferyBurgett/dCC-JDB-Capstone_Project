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
          <Link to="/home" style={{ textDecoration: "none", color: "white" }}>
            <b>DiverConnect</b>
          </Link>
        </li>
        <li>
          <Link to='/diverprofile/'>Diver Profile</Link>
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
      <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
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
