import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

 
  return (
    <nav className="nav">
      <row className="nav-row">
        <ul>
          <li id="logo-div" className="brand">
            <a id="logo" class="brand nav-link" href="/">DIVERconnect</a>
          </li>
          <li>
            <a class="nav-item-nb nav-link" href="/diverslist">Divers Directory</a>
          </li>
            {user &&
          <li> 
            <a class="nav-item-nb nav-link" href={"/diverprofile/" + user.id}>Diver Profile</a>
          </li>
          }

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
              <button className="nav-button" onClick={logoutUser}>Logout</button>
            ) : (
              <button className="myButton" onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </row>
    </nav>
  );
};

export default Navbar;
