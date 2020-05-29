import React from 'react'
import styled from 'styled-components'
import { SectionContainer } from "./containers"
import theme from '../styles/theme'
import ContentGrid from "./layouts/contentGrid"
import Project from "./project"

function Experience() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.backgrounds.main} background={theme.palette.accents.purple}>
      <ContentGrid title='Experience' style={{ color: theme.palette.text.white }}>
        <Project pic={require('../images/projects/support_local_black.svg')}
                 title='Support Local'
                 timeline='April 2020 - Present'
                 description='Frontend web developer using React.js to build a marketplace supporting COVID affected businesses.'
                 color={theme.palette.backgrounds.main}
                 link=''/>
        <Project pic={require('../images/projects/rgp_padded.png')}
                 title='RGP Consulting'
                 timeline='June 2020 - Present'
                 description='Product management internship developing an internal web app.'
                 color={theme.palette.backgrounds.main}
                 borderRadius={4}
                 link=''/>
        <Project pic={require('../images/projects/hostmost.svg')}
                 title='hostmost'
                 timeline='June - August 2019'
                 description='Product & sales intern helping a startup find product-market fit.'
                 color={theme.palette.backgrounds.main}
                 link=''/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Experience