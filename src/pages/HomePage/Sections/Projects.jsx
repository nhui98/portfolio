import React from "react"

import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import Header from "../../../components/Header/Header"

import project from "../../../assets/project1.png"

import "./Projects.css"

const Projects = () => {
  const [imgNumber, setImgNumber] = React.useState(1)
  const scrollRef = React.useRef(null);

  const scroll = (direction => {
    const { current } = scrollRef;
    const scrollAmount = current.clientWidth;

    if (direction === "left" && imgNumber > 1) {
      current.scrollLeft -= scrollAmount;
      setImgNumber(prev => prev - 1)
    }
    if (direction === "right" && imgNumber < 4) {
      current.scrollLeft += scrollAmount;
      setImgNumber(prev => prev + 1)
    }
  })

  return (
    <div className="projects" id="projects">
      <div className="projects__header">
        <Header subtitle="Portfolio" title="My Projects" />
      </div>
      
      <div className="projects__project-wrapper">
        <div className="projects__project-container" ref={scrollRef}>
          <div className="projects__project">
            <img src={project} alt="project" />
          </div>
          <div className="projects__project">
            <img src={project} alt="project" />
          </div>
          <div className="projects__project">
            <img src={project} alt="project" />
          </div>
          <div className="projects__project">
            <img src={project} alt="project" />
          </div>
        </div>

        <div className="projects__arrows">
          <BsArrowLeftShort className={`projects__arrows-icon${imgNumber === 1 ? " disabled" : ""}`} onClick={() => scroll("left")} />
          <BsArrowRightShort className={`projects__arrows-icon${imgNumber === 4 ? " disabled" : ""}`}onClick={() => scroll("right")} />
        </div>
      </div>
    </div>
  )
}

export default Projects