import React from 'react'
import { ContentContainer, SectionContainer, TitleContainer } from "./containers"
import { MainTitle } from "./typography"
import theme from "../styles/theme"

function Intro() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.accents.green} background={theme.palette.backgrounds.main}>
      <ContentContainer>
        <TitleContainer>
          <MainTitle style={{ marginBottom: theme.spacing(20)}}>
            Hi<span style={{ color: theme.palette.accents.green }}>.</span>
          </MainTitle>
          <MainTitle>
            I'm Connor Waslo
            <span style={{ color: theme.palette.accents.green }}>.</span>
          </MainTitle>
          <MainTitle color={theme.palette.text.light}>
            I'm passionate about creating products that help people be creative.
          </MainTitle>
        </TitleContainer>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Intro