import React from 'react'
import { SectionContainer, SwooshContainer } from "./containers"
import { AboutText } from "./typography"
import { Grid } from '@material-ui/core'
import theme from "../styles/theme"
import ContentGrid from "./layouts/contentGrid"

const AboutPoint = ({ emoji, text }) => (
  <Grid container spacing={3}>
    <Grid item xs={1}>
      <AboutText style={{ whiteSpace: "nowrap" }}>{emoji}</AboutText>
    </Grid>
    <Grid item xs={10}>
      <AboutText>{text}</AboutText>
    </Grid>
  </Grid>
)

function About() {
  return (
    <SectionContainer background={theme.palette.accents.blue}>
      <ContentGrid title='About' style={{ color: theme.palette.text.white }} childrenStyle={{ marginTop: theme.spacing(2) }}>
        <AboutPoint emoji='📚' text='Computer Science, Sociology, and 中文 @ Vanderbilt University'/>
        <AboutPoint emoji='💻' text='Constantly working on side-projects'/>
        <AboutPoint emoji='‍‍👨‍💻‍‍' text='Software engineer looking from the business perspective'/>
        <AboutPoint emoji='🏃‍♂' text='Aspiring marathoner'/>
        <AboutPoint emoji='👨‍🍳' text='Plant-based wannabe-chef'/>
        <AboutPoint emoji='🗣️' text='Avid storyteller'/>
        <AboutPoint emoji='🏀' text='Phoenix Suns ride or die'/>
      </ContentGrid>

      <SwooshContainer>
        <svg width="1440" height="178" viewBox="0 0 1440 178" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="4600" transform="translate(0 -1243)" fill={theme.palette.backgrounds.main}/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.0169601L60 36.0254C120 72.0339 240 144.051 360 168.057C480 192.062 600 168.057 720 144.051C840 120.045 960 96.0396 1080 90.0382C1200 84.0367 1320 96.0396 1380 102.041L1440 108.042V-72H1380C1320 -72 1200 -72 1080 -72C960 -72 840 -72 720 -72C600 -72 480 -72 360 -72C240 -72 120 -72 60 -72H0V0.0169601Z" fill="#33A1FD"/>
        </svg>
      </SwooshContainer>
    </SectionContainer>
  )
}

export default About