import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';

const Navigation = () => {
    return (
        <nav className="navigation" id="navigation">
        <div className="login" id="login">
          <ul>
              <li>
                <NavLink
                  to="/logowanie"
                  className={({ isActive }) =>
                    isActive ? "active" : ""
                  }
                >
                  Zaloguj
                </NavLink>
              </li>
              <li>
                <NavLink
                to="/rejestracja"
                className={({isActive}) => isActive ? "active" : ""}
                >
                  Załóż konto
                </NavLink>
                </li>
          </ul>
        </div>
        <div className="menu" id="menu">
          <ul >
            <li><Link to="/">Start</Link></li>
            <li><Scroll to="simple_steps" smooth duration={500}>O co chodzi</Scroll></li>
            <li><Scroll to="about_us" smooth duration={500}>O nas</Scroll></li>
            <li><Scroll to="whom_help" smooth duration={500}>Fundacja i organizacje</Scroll></li>
            <li><Scroll to="form" smooth duration={500}>Kontakt</Scroll></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navigation;