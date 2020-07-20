import React from 'react'
import { SectionContainer } from './containers'
import theme from '../styles/theme'

import Project from "./project"
import ContentGrid from "./layouts/contentGrid"

function Projects() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
      <ContentGrid title='Projects'>
        <Project pic={require('../images/projects/scalar.png')}
                 title='Scalar'
                 description='A creative web development agency I founded with friends.'
                 link='/scalar'/>
        <Project pic={require('../images/projects/uvo.png')}
                 title='Unheard Voices Outreach'
                 description='Building a mobile app to provide resources and mentorship to formerly incarcerated individuals.'
                 link='/unheard-voices-outreach'/>
        <Project pic={require('../images/projects/v.png')}
                 title='Athena'
                 description='Revamping course registration at Vanderbilt University - a platform based on student input.'
                 link='/course-registration'/>
        <Project pic={require('../images/projects/ignytion.png')}
                 title='Ignytion'
                 description='A company I founded which provided data and web automation services to growth-stage startups.'
                 link='/ignytion'/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Projects