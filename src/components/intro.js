import React from 'react'
import { ContentContainer, SectionContainer, TitleContainer, SwooshContainer } from "./containers"
import { MainTitle } from "./typography"
import theme from "../styles/theme"

function Intro() {
  return (
    <SectionContainer swoosh swooshColor={theme.palette.accents.blue} swooshPath={ABOUT_SWOOSH_TOP} background={theme.palette.backgrounds.main}>
      <ContentContainer>
        <TitleContainer>
          <MainTitle style={{ marginBottom: theme.spacing(20)}}>
            Hi<span style={{ color: theme.palette.accents.blue }}>.</span>
          </MainTitle>
          <MainTitle>
            I'm Connor Waslo
            <span style={{ color: theme.palette.accents.blue }}>.</span>
          </MainTitle>
          <MainTitle color={theme.palette.text.light}>
            I'm passionate about creating products that make life easier.
          </MainTitle>
        </TitleContainer>
      </ContentContainer>

      <SwooshContainer>
        <svg width="1440" height="108" viewBox="0 0 1440 108" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="1440" height="4600" transform="translate(0 -648)" fill="#F9F9F9"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0L80.4 18C159.6 36 320.4 72 480 78C639.6 84 800.4 60 960 60C1119.6 60 1280.4 84 1359.6 96L1440 108V324H1359.6C1280.4 324 1119.6 324 960 324C800.4 324 639.6 324 480 324C320.4 324 159.6 324 80.4 324H0V0Z" fill="#33A1FD"/>
        </svg>
      </SwooshContainer>
    </SectionContainer>
  )
}

export default Intro