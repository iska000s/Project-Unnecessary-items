import React from 'react';
import Hero from './MainPage';
import ThreeColumns from './ThreeColumns';
import SimpleSteps from './SimpleSteps';
import AboutUs from './AboutUs';
import WhomHelp from './WhomHelp';
import Form from './Form';
import Footer from './Footer';

const Home = () => {
    return (
    <section >
      <Hero />
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