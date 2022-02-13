import React from "react";

import Header from "../../../components/Header/Header"

import me from "../../../assets/me.jpg"
import "./About.css"

const About = () => (
  <section className="about" id="about">
    <div className="about__wrapper">
      <div className="about__container">
        <p className="background-subheading">About Me</p>
        <Header subtitle="About Me" title="My Background" />
        <p className="about__description opensans">
          I'm Nathan, a Web Developer based in Britian, who's passionate about bringing creativity and problem-solving together to deliver stunning and immersive user experiences.
        </p>
      </div>
    </div>

    <div className="about__img-wrapper">
      <div className="about__img">
        <div className="leftcorner-cut" />
        <img src={me} alt="Me" />
        <div className="rightcorner-cut" />
      </div>
    </div>
  </section>
)

export default About