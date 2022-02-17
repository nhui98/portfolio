import React from "react";

import Header from "./../../../../components/Header/Header"

import "./Landing.css"

const Landing = () => (
  <section className="landing" id="landing">
    <div className="landing__wrapper">
      <div className="landing__container">
        <Header subtitle="Hi I'm Nathan" title="A Software Developer" />
      </div>
    </div>
  </section>
)

export default Landing