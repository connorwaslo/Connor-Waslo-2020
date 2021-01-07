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
                 description='A creative web development agency I founded with friends.'
                 link='/scalar'/>
        <div id='course-registration'/>
        <Project pic={require('../images/projects/v.png')}
                 title='Athena'
                 timeline='Completed'
                 description='Revamping course registration at Vanderbilt University: a platform based on student input.'
                 link='/course-registration'/>
        <div id='ignytion'/>
        <Project pic={require('../images/projects/ignytion.png')}
                 title='Ignytion'
                 timeline='Completed'
                 description='A company I founded which provided data and web automation services to growth-stage startups.'
                 link='/ignytion'/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Projects