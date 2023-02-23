import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

// function Nav_Bar(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <LoggedInNav/>;
//   }
//   return <LoggedOutNav/>;
// }

// export default Nav_Bar;


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
