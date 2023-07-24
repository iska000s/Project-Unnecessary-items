import React from 'react';
import decoration from '../assets/Decoration.svg';
import shirt from '../assets/Icon-1.svg';
import basket from '../assets/Icon-2.svg';
import magnifier from '../assets/Icon-3.svg';
import circle_process from '../assets/Icon-4.svg';
import { Link } from 'react-router-dom';

const SimpleSteps = () => {
    return(
    <section id='simple_steps' className="simple_steps_box">
    <h1 className="header_1">Wystarczą 4 proste kroki</h1>
    <img src={decoration} alt="decoration"/>
    <div className="steps">
      <div className="step step_1">
        <img src={shirt} alt="shirt"/>
        <h4 className="header_4 step_header4">Wybierz rzeczy</h4>
        <p>ubrania, zabawki, sprzęt i inne</p>
      </div>
      <div className="step step_2">
        <img src={basket} alt="basket"/>
        <h4 className="header_4 step_header4">Spakuj je</h4>
        <p>skorzystaj z worków na śmieci</p>
      </div>
      <div className="step step_3">
        <img src={magnifier} alt="magnifier"/>
        <h4 className="header_4 step_header4">Zdecyduj komu chcesz pomóc</h4>
        <p>wybierz zaufane miejsce</p>
      </div>
      <div className="step step_4">
        <img src={circle_process} alt="circle_process"/>
        <h4 className="header_4 step_header4">Zdecyduj komu chcesz pomóc</h4>
        <p>kurier przyjedzie w dogodnym terminie</p>
      </div>
    </div>
    <button className="button simple_steps_button"><Link to="/logowanie">ODDAJ RZECZY</Link></button>
  </section>
    )
}

export default SimpleSteps;