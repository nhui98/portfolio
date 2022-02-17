import React from "react"

import Header from "./../../../../components/Header/Header"

import ProjectsLarge from "./Projects-large"
import ProjectsSmall from "./Projects-small"

import "./Projects.css"


const Projects = () => (
  <section className="projects" id="projects">
    <div className="projects__header">
      <Header subtitle="Portfolio" title="My Projects" backgroundSubtitle="Portfolio" />
    </div>
    <ProjectsLarge />
    <ProjectsSmall />
  </section>
)

export default Projects