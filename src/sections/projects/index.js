import React from 'react';
import FullHeight from "../../components/fullheight"
import LayoutTextCenter from "../../components/layout-text-center"
import SectionTitle from "../../components/section-title"
import ProjectTile from "../../components/project-tile"

function Projects({bgColor}) {
  return (
    <FullHeight bgColor={bgColor}>
      <LayoutTextCenter style={{width: '80%'}}>
        <SectionTitle title="What I'm Working On"/>

        <h1 className='text-center my-5'>Current Projects</h1>
        <div className='row'>
          <div className='col-md-4 project'>
            <ProjectTile img={require("../../images/projects/optimize.svg")} title='Automation & Optimization'/>
          </div>
          <div className='col-md-4 project'>
            <ProjectTile img={require("../../images/projects/uvo.png")} title='Reduce Recidivism'/>
          </div>
          <div className='col-md-4 project'>
            <ProjectTile img={require("../../images/projects/nba.png")} title='Winnr'/>
          </div>
        </div>
      </LayoutTextCenter>
    </FullHeight>
  )
}

export default Projects;