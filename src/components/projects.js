import React from 'react'
import { SectionContainer, ContentContainer } from './containers'
import theme from '../styles/theme'

import { Grid } from 'semantic-ui-react'
import { MainTitle } from './typography'
import Project from "./project"

function Projects() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
      <ContentContainer>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={6}>
              <MainTitle>Projects</MainTitle>
            </Grid.Column>
            <Grid.Column width={10}>
              <Project pic='https://via.placeholder.com/150'
                       title='Scalar'
                       description='A creative web development agency I founded with friends.'
                       link='https://scalardev.tech/'/>
              <Project pic='https://via.placeholder.com/150'
                       title='Unheard Voices Outreach'
                       description='Building a mobile app to provide resources and mentorship to formerly incarcerated individuals.'
                       link=''/>
              <Project pic='https://via.placeholder.com/150'
                       title='Athena'
                       description='Revamping course registration at Vanderbilt University - building a platform based on student input.'
                       link=''/>
              <Project pic='https://via.placeholder.com/150'
                       title='Ignytion'
                       description='A company I founded which provided data and web automation services to growth-stage startups.'
                       link=''/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Projects