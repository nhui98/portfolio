import React from "react"

import SkillsLarge from "./Skills-large"
import SkillsSmall from "./Skills-small"
import Grid from "./Grid"

import "./Skills.css"

const Skills = () => (
  <section className="skills" id="skills">
    <SkillsLarge />
    <Grid />
    <SkillsSmall />
  </section>
)

export default Skills