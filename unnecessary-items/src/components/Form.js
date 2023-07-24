import React from "react";
import decoration from '../assets/Decoration.svg';

const Form = () => {
    return(
    <section id="form" className="form_box">
    <div className="form_text">
    <h1 className="header_1 form_box_header1">Skontaktuj się z nami</h1>
    <img src={decoration} alt="decoration"/>

  
    <form>
      <div class="form_date">
      <label for="name">Wpisz swoje imię
         <input type="text" id="name" name="name"/>
      </label>
      <label for="email">Wpisz swój email
        <input type="email" id="email" name="email"/>
      </label>
    </div>
      <label class="title_message">Wpis swoją wiadomość</label>
      <textarea class="textarea" rows="3" cols="5" id="messager"></textarea>
    </form>
    
    <button className="button_submit">Wyślij</button>
  </div>
  </section>
    )
}

export default Form;