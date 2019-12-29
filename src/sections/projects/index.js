import React from 'react';
import LayoutTextCenter from "../../components/layouts/layout-text-center"
import SectionTitle from "../../components/section-title"
import Project from '../../components/project';

// Todo: Make TileBackgrounds the same height
function Projects() {
  return (
    <div>
      <LayoutTextCenter style={{width: '80%'}}>
        <SectionTitle title="What I'm Working On"/>

        <h1 className='text-center my-5'>Current Projects</h1>
        <div className='row row-eq-height'>
          <Project colSize={4} img={require("../../images/projects/optimize.svg")} title='Automation & Optimization'/>
          <Project colSize={4} img={require("../../images/projects/uvo.png")} title='Reduce Recidivism'/>
          <Project colSize={4} img={require("../../images/projects/nba.png")} title='Winnr'/>
        </div>

        <hr className='my-5'/>

        <h1 className='text-center my-5'>Past Projects</h1>
        <div className='row row-eq-height my-5'>
          <Project colSize={4} img={require("../../images/projects/v.png")} title='Better Course Registration'/>
          <Project colSize={4} img={require("../../images/projects/ibj.png")} title='Justice Hub'/>
          <Project colSize={4} img={require("../../images/projects/ignytion.png")} title='Ignytion'/>
        </div>
        <div className='row row-eq-height my-5'>
          <Project colSize={4} img={require("../../images/projects/eye.png")} title='Hands-free Art'/>
          <Project colSize={4} img={require("../../images/projects/gocode.png")} title='GoCode'/>
          <Project colSize={4} img={require("../../images/projects/treehacks.svg")} title='Nutrition App'/>
        </div>
      </LayoutTextCenter>
    </div>
  )
}

export default Projects;