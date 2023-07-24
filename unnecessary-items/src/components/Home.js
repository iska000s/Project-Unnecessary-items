import React from 'react';
import MainPage from './MainPage';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhomHelp from './WhomHelp';
import Form from './Form';
import Footer from './Footer';
import Navigation from './Navigation';

const Home = () => {
    return (
    <section >
      <Navigation/>
      <MainPage />
      <ThreeColumns />
      <SimpleSteps/>
      <AboutUs/>
      <WhomHelp/>
      <Form/>
      <Footer/>
    </section>
    )
}

export default Home;