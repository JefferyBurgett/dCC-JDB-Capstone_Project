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
    <nav className="nav">
      <row className="nav-row">
        <ul>
          <li className="brand">
          <a class="brand nav-link" href="/">DiverConnect</a>
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
              <button onClick={() => navigate("/login")}>Login</button>
            )}
          </li>
        </ul>
      </row>
    </nav>
  );
};

export default Navbar;
