import React from 'react';
import decoration from '../assets/Decoration.svg';
import { Link } from 'react-router-dom';

const MainPage = () => {
    return (
      <section className="main_page" id="main_page">
        <main className="main_box" id="main_box">
        <h1 className="header_1">Zacznij pomagać!</h1>
        <h1 className="header_1">Oddaj niechciane rzeczy w zaufane ręce</h1>
        <img src={decoration} alt="decoration"/>
        <div className='button_box'>
          <button className="main_button button"><Link to="/logowanie">ODDAJ RZECZY</Link></button>
          <Link to="/logowanie"><button className="main_button button">ZORGANIZUJ ZBIÓRKĘ</button></Link>
        </div> 
      </main>
      </section>
    )
}

export default MainPage;
