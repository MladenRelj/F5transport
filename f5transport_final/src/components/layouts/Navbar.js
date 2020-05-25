import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {


  return (
    <div>
      <nav className="nav-wrapper  grey darken-3 ">
        <div className="container">
          <Link to="/" className="brand-logo ">
            <img
              alt="logo"
              src="images/logo/finalLogo.png"
              className="logo  responsive-img"
            ></img>
          </Link>

          <NavLink
            to="#"
            className="sidenav-trigger"
            href="#"
            data-target="nav-mobile"
          >
            <span className="menu" ><img src="images/menu.png" alt="menu" /></span>
          </NavLink>
          <ul className="right hide-on-med-and-down">
            <li>
              <NavLink id="" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink id="leistungen" to="/leistungen">
                Leistungen
              </NavLink>
            </li>
            <li>
              <NavLink id="kontakt" to="/kontakt_anfahrt">
                Kontakt & Anfahrt
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <ul className="sidenav" id="nav-mobile">
        <li>
          <NavLink href="#" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink href="#" to="/leistungen">
            Leistungen
          </NavLink>
        </li>
        <li>
          <NavLink href="#" to="/kontakt_anfahrt">
            Kontakt & Anfahrt
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
