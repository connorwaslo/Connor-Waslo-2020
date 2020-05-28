import React from 'react'
import { ContentContainer, SectionContainer } from "./containers"
import { MainTitle, AboutText } from "./typography"
import { Grid } from 'semantic-ui-react'
import theme from "../styles/theme"
import ContentGrid from "./layouts/contentGrid"

const AboutPoint = ({ emoji, text }) => (
  <Grid>
    <Grid.Row>
      <Grid.Column width={1}>
        <AboutText style={{ whiteSpace: 'nowrap' }}>{emoji}</AboutText>
      </Grid.Column>
      <Grid.Column width={14}>
        <AboutText>{text}</AboutText>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

function About() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.backgrounds.main} background={theme.palette.accents.green}>
      <ContentGrid title='About' style={{ color: theme.palette.text.white }} childrenStyle={{ marginTop: theme.spacing(2) }}>
        <AboutPoint emoji='📚' text='Computer Science and Chinese @ Vanderbilt University'/>
        <AboutPoint emoji='💻' text='Constantly working on side-projects'/>
        <AboutPoint emoji='‍‍👨‍💻‍‍' text='Software engineer looking from the business perspective'/>
        <AboutPoint emoji='🏃‍♂' text='Aspiring marathoner'/>
        <AboutPoint emoji='👨‍🍳' text='Plant-based wannabe-chef'/>
        <AboutPoint emoji='🏀' text='Phoenix Suns ride or die'/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default About