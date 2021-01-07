import React from 'react'
import { SectionContainer, SwooshContainer } from "./containers"
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

      <SwooshContainer>
        <svg width="1440" height="79" viewBox="0 0 1440 79" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="4600" transform="translate(0 -3931)" fill={theme.palette.backgrounds.main}/>
          <path fill-rule="evenodd" clip-rule="evenodd"
                d="M0 79L60 73C120 67 240 55 360 37C480 19 600 -5 720 1C840 7 960 43 1080 61C1200 79 1320 79 1380 79H1440V-65H1380C1320 -65 1200 -65 1080 -65C960 -65 840 -65 720 -65C600 -65 480 -65 360 -65C240 -65 120 -65 60 -65H0V79Z"
                fill={theme.palette.accents.purple}/>
        </svg>
      </SwooshContainer>
    </SectionContainer>
  )
}

export default Experience