import React from "react";
import decoration from '../assets/Decoration.svg';

const WhomHelp = () => {
    return(
        <section id="whom_help" className="whom_help_box">
        <h1 className="header_1 whom_help_header1">Komu pomagamy?</h1>
        <img src={decoration} alt="decoration"/>
        <div className="aid_entities">
          <div className="aid_box aid1"><h2 className="header_2">Fundacjom</h2></div>
          <div className="aid_box aid2"><h2 className="header_2">Organizacjom pozarządowym</h2></div>
          <div className="aid_box aid3"><h2 className="header_2">Lokalnym zbiórkom</h2></div>
        </div>
        <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>
      </section>
    )
}

export default WhomHelp;