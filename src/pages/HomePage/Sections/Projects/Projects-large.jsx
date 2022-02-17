import React from "react"

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { AiFillEye, AiFillGithub } from "react-icons/ai"


import "./Projects-large.css"

import { PROJECT_DATA } from "./../../../../data/project-data"

const ProjectsLarge = () => {
    const [imgNumber, setImgNumber] = React.useState(0)
    const scrollRef = React.useRef(null);
  
    const scroll = ( direction => {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth;
  
      if (direction === "left" && imgNumber > 0) {
        current.scrollLeft -= scrollAmount;
        setImgNumber(prev => prev - 1)
      }
      if (direction === "right" && imgNumber < PROJECT_DATA.length - 1) {
        current.scrollLeft += scrollAmount;
        setImgNumber(prev => prev + 1)
      }
    })

    return (
        <div className="projects__project-wrapper">
            <div className="projects__project-container" ref={scrollRef}>
                {PROJECT_DATA.map((project, i, projects) => (
                    <div className="projects__project" key={`${project.name}-${i}`}>
                    <img src={project.src} alt={project.name} />
                    </div>
                ))}
            </div>

            <div className="projects__arrows">
                <BsArrowLeftShort className={`projects__arrows-icon${imgNumber === 0 ? " disabled" : ""}`} onClick={() => scroll("left")} />   
            
                <div className="projects__project-links">
                    <a href={PROJECT_DATA[imgNumber].githubLink} rel="noreferrer" target="_blank">
                    <AiFillGithub />
                    </a>      
                    <a href={PROJECT_DATA[imgNumber].viewLink} rel="noreferrer" target="_blank">
                    <AiFillEye />
                    </a>
                </div>        
            
                <BsArrowRightShort className={`projects__arrows-icon${imgNumber === 3 ? " disabled" : ""}`}onClick={() => scroll("right")} />
            </div>
        </div>
    )
}

export default ProjectsLarge
