import React from "react"

import { AiFillEye, AiFillGithub }from "react-icons/ai"

import "./Projects-small.css"

import { PROJECT_DATA } from "./../../../../data/project-data"

const ProjectsSmall = () => (
    <div className="projects__small-project-container">
        {PROJECT_DATA.map((project, i, projects) => (
            <div className="projects__small-project" key={`${project.name}-${i}`}>
                <img src={project.src} alt={project.name} />

                <div className="projects__small-project-links">
                    <a href={project.githubLink} rel="noreferrer" target="_blank">
                    <AiFillGithub />
                    </a>      
                    <a href={project.viewLink} rel="noreferrer" target="_blank">
                    <AiFillEye />
                    </a>
                </div>
            </div>
        ))}
    </div>     
)

export default ProjectsSmall