import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from 'react-scroll';

const Navigation = () => {
    return (
        <nav className="navigation" id="navigation">
        <div className="login" id="login">
          <ul>
              <li><Link to="/logowanie">Zaloguj</Link></li>
              <li><Link to="/rejestracja">Załóż konto</Link></li>
          </ul>
        </div>
        <div className="menu" id="menu">
          <ul >
            <li>Start</li>
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