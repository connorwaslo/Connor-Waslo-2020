import React from 'react';
import FullHeight from "../../components/fullheight"
import LayoutTextCenter from "../../components/layout-text-center"
import SectionTitle from "../../components/section-title"
import Project from '../../components/project';

// Todo: Make TileBackgrounds the same height
function Projects({bgColor}) {
  return (
    <FullHeight bgColor={bgColor}>
      <LayoutTextCenter style={{width: '80%'}}>
        <SectionTitle title="What I'm Working On"/>

        <h1 className='text-center my-5'>Current Projects</h1>
        <div className='row row-eq-height'>
          <Project colSize={4} img={require("../../images/projects/optimize.svg")} title='Automation & Optimization'/>
          <Project colSize={4} img={require("../../images/projects/uvo.png")} title='Reduce Recidivism'/>
          <Project colSize={4} img={require("../../images/projects/nba.png")} title='Winnr'/>
        </div>

        <hr className='my-5'/>
      </LayoutTextCenter>
    </FullHeight>
  )
}

export default Projects;