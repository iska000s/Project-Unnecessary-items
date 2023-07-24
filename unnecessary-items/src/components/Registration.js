import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import decoration from '../assets/Decoration.svg'


const Registration = () => {
    return(
        <>
        <Navigation/>
        <section className='main_page_login' id='main_page_login'>
        <h1 className='header_1'>Załóż konto</h1>
        <img src={decoration} alt='decoration'/>
    
        <form>
          <div class="login_form">
          <label for="name">Email
             <input type="email" id="email" name="email"/>
          </label>
          <label for="password">Hasło
            <input type="password" id="password" name="password"/>
          </label>
          <label for="password">Powtórz hasło
        <input type="password" id="password" name="password"/>
      </label>
          </div>
          </form>
    
          <div className='buttons_login'>
            <button className='button_registration'><Link to="/rejestracja">Załóż konto</Link></button>
            <button className='button_login'><Link to="/logowanie">Zaloguj się</Link></button>
          </div>
          </section>
        </>

    )
}

export default Registration;