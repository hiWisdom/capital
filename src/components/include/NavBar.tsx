import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink to="/"  className="nav-logo">
          Racker
            <i className="fas fa-code"></i>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                to="/" 
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/submitapplication"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Submit Application
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                // exact="true"
                to="/account"
                // activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Check Application
              </NavLink>
            </li>

          </ul>
          <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
