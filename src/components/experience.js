import React from 'react'
import { SectionContainer } from "./containers"
import theme from '../styles/theme'
import ContentGrid from "./layouts/contentGrid"
import Project from "./project"

function Experience() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.backgrounds.main} background={theme.palette.accents.purple} id='experience'>
      <ContentGrid title='Experience' style={{ color: theme.palette.text.white }}>
        <div id='support-local'/>
        <Project pic={require('../images/projects/support_local_black.svg')}
                 title='Support Local'
                 timeline='April 2020 - Present'
                 description='Frontend web developer using React.js to build a marketplace supporting COVID affected businesses.'
                 color={theme.palette.backgrounds.main}
                 link='/support-local'/>
        <div id='rgp-consulting'/>
        <Project pic={require('../images/projects/wondry_w_logo.jpeg')}
                 title='Innovation Garage'
                 timeline='August 2019 - August 2020'
                 description='Product management intern developing an internal app for a consulting firm.'
                 color={theme.palette.backgrounds.main}
                 borderRadius={4}
                 link='/innovation-garage'/>
        <div id='hostmost'/>
        <Project pic={require('../images/projects/hostmost.svg')}
                 title='hostmost'
                 timeline='June - August 2019'
                 description='Product & sales intern helping a startup find product-market fit.'
                 color={theme.palette.backgrounds.main}
                 link='/hostmost'/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Experience