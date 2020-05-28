import React from 'react'
import { SectionContainer } from "./containers"
import theme from '../styles/theme'
import ContentGrid from "./layouts/contentGrid"
import Project from "./project"

function Experience() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.backgrounds.main} background={theme.palette.accents.purple}>
      <ContentGrid title='Experience' style={{ color: theme.palette.text.white }}>
        <Project pic='https://via.placeholder.com/150'
                 title='RGP Consulting'
                 timeline='June 2020 - Present'
                 description='Product management internship developing an internal web app.'
                 color={theme.palette.backgrounds.main}
                 link=''/>
        <Project pic='https://via.placeholder.com/150'
                 title='Support Local'
                 timeline='April 2020 - Present'
                 description='Frontend web developer using React.js to build a marketplace supporting COVID affected businesses.'
                 color={theme.palette.backgrounds.main}
                 link=''/>
        <Project pic='https://via.placeholder.com/150'
                 title='hostmost'
                 timeline='June - August 2019'
                 description='Generalist intern helping a startup find product-market fit.'
                 color={theme.palette.backgrounds.main}
                 link=''/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Experience