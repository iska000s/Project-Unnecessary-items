import React from 'react';
import decoration from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';


const Hero = () => {
    return (
      <section className="main_page" id="main_page">
        <Navigation/>
        <main className="main_box" id="main_box">
        <h1 className="header_1">Zacznij pomagać!</h1>
        <h1 className="header_1">Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={decoration} alt="decoration"/>
        <div className='button_box'>
          <button className="main_button button"><Link to="/logowanie">ODDAJ RZECZY</Link></button>
          <button className="main_button button"><Link to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link></button>
        </div> 
      </main>
      </section>
    )
}

export default Hero;
