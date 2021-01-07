import React from 'react'
import { SectionContainer } from './containers'
import theme from '../styles/theme'

import Project from "./project"
import ContentGrid from "./layouts/contentGrid"

function Projects() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
      <ContentGrid title='Experiments'>
        <div id='scalar'/>
        <Project pic={require('../images/projects/scalar.png')}
                 title='Scalar'
                 timeline='In Progress'
                 description='A software development agency with a focus on business viability.'
                 link='/scalar'/>
        <div id='course-registration'/>
        <Project pic={require('../images/projects/v.png')}
                 title='Athena'
                 timeline='Completed'
                 description='Revamping course registration at Vanderbilt University by building a platform based on student input.'
                 link='/course-registration'/>
        <div id='ignytion'/>
        <Project pic={require('../images/projects/ignytion.png')}
                 title='Ignytion'
                 timeline='Completed'
                 description='Data and web automation for growth-stage startups.'
                 link='/ignytion'/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Projects