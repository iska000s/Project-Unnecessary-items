import React from 'react';
import { Link} from 'react-router-dom';

// import Login from './Login';
// import { ScrollElement } from 'react-scroll';
// import { ScrollLink } from 'react-scroll';

// import { createRoot } from 'react-dom/client';
// const MainPage = document.querySelector("body");
// const addMainPage = createRoot(MainPage);
// addMainPage.render(<Home/>)


const Home = () => {
    return (
        <>
    <section className="main_page" id="main_page">
    <nav className="navigation" id="navigation">
      <div className="login" id="login">
        <ul>
            {/* <li><Link to={Login} >Zaloguj</Link></li>
            <li><Link to="/rejestracja">Załóż konto</Link></li> */}
            <li><Link to="/logowanie">Zaloguj</Link></li>
            <li><Link to="/rejestracja">Załóż konto</Link></li>
        </ul>
      </div>
      <div className="menu" id="menu">
        <ul >
          <li>Start</li>
          <li>O co chodzi</li>
          <li>O nas</li>
          <li>Fundacja i organizacje</li>
          <li>Kontakt</li>
        </ul>
      </div>
    </nav>
    <main className="main_box" id="main_box">
      <h1 className="header_1">Zacznij pomagać!</h1>
      <h1 className="header_1">Oddaj niechciane rzeczy w zaufane ręce</h1>
      {/* <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="253" height="33" viewBox="0 0 253 33"><defs><clipPath id="a"><rect width="253" height="33" fill="none"/></clipPath></defs><g clip-path="url(#a)"><path d="M160.967,106.2l8.965-8.732-8.965-8.732-8.955,8.732,8.965,8.732" transform="translate(-34.472 -78.774)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.788"/><path d="M160.967,97.469l8.965-8.732-8.965-8.732-8.955,8.732Z" transform="translate(-34.472 -78.757)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.788"/><line x1="98.316" transform="translate(0.906 17.154)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.811"/><path d="M188.708,95.919l-5.638,5.491L172.016,90.645l2.155-2.1,4.679,4.558-4.679,4.558-13.21-12.866-13.19,12.866L143.093,93.1l4.679-4.558,2.155,2.1-11.053,10.766-5.638-5.491" transform="translate(-34.472 -78.757)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.788"/><line x1="98.316" transform="translate(153.778 17.154)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.811"/><rect width="7.344" height="7.153" stroke-width="1.788" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" transform="translate(121.307 26.678) rotate(-45)"/><path d="M192.834,100.733h-4.3l-5.428-5.287-9.673,9.422-12.464-12.14-12.464,12.14-9.673-9.422-5.428,5.287h-4.3" transform="translate(-34.472 -78.768)" fill="none" stroke="#1a1818" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.788"/></g></svg>      <div class="main_buttons button" id="main_buttons"> */}
       <div className='button_box'>
        <button className="main_button button">ODDAJ RZECZY</button>
        <button className="main_button button">ZORGANIZUJ ZBIÓRKĘ</button>
      </div> 
    </main>
    </section>

        </>
    )
}


export default Home;



