import React from "react";
import decoration from '../assets/Decoration.svg';
import signature from '../assets/Signature.svg';

const AboutUs = () =>{
    return(
        <section id="about_us" className="about_us_box">
        <div className="about_right_box">
          <h1 className="header_1 about_header1">O nas</h1>
          <img src={decoration} alt="decoration"/>
          <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip 
          leek lentil turnip greens parsnip.</p>
          <img src={signature} alt="signature"/>
        </div>
        <div className="people_img"></div>
      </section>
    )
}

export default AboutUs;