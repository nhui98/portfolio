import React from "react";

import Header from "../../../components/Header/Header"

import me from "../../../assets/me.jpg"
import "./About.css"

const About = () => (
  <section className="about" id="about">
    <div className="about__container">
      <Header subtitle="About Me" title="My Background" backgroundSubtitle="About Me" />
      <p className="about__description opensans">
        I'm Nathan, an aspiring Web Developer based in Britian, who's passionate about bringing creativity and problem-solving together to provide stunning and immersive user experiences.
      </p>
    </div>

    <div className="about__img-wrapper">
      <div className="about__img">
        <img src={me} alt="Me" />
      </div>
    </div>
  </section>
)

export default About