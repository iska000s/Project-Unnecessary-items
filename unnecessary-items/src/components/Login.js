import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from './Navigation';
import decoration from '../assets/Decoration.svg';



const Login = () => {
  const params = useParams();
  console.log(params)
    return (
    <>
    <Navigation/>
    <section className='main_page_login' id='main_page_login'>
    <h1 className='header_1'>Zaloguj się</h1>
    <img src={decoration} alt='decoration'/>

    <form>
      <div class="login_form">
      <label for="name">Email
         <input type="email" id="email" name="email"/>
      </label>
      <label for="password">Hasło
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
      );
}

export default Login;



