import React from 'react'
import styled from 'styled-components'
import { Button } from "@material-ui/core"
import { navigate } from 'gatsby'
import PageLayout from "../components/layouts/pageLayout"
import SEO from "../components/seo"
import { ContentContainer, SectionContainer, TitleContainer } from "../components/containers"
import { MainTitle } from "../components/typography"
import theme from '../styles/theme'

const HomeButton = styled(Button)`
  && {
    background: ${theme.palette.accents.purple};
    font-family: Poppins;
    
    &:hover {
      font-family: Poppins;
      background: ${theme.palette.accents.purple};
      box-shadow: none
    }
  }
`

function Success() {
  return (
    <PageLayout>
      <SEO title='Success'/>

      <SectionContainer>
        <ContentContainer>
          <TitleContainer>
            <MainTitle style={{ marginBottom: theme.spacing(20)}}>
              Awesome<span style={{ color: theme.palette.accents.purple }}>!</span>
            </MainTitle>
            <MainTitle style={{ marginBottom: theme.spacing(20)}}>
              I'll get back to you as soon as I can<span style={{ color: theme.palette.accents.purple }}>.</span>
            </MainTitle>
            <HomeButton variant='contained' color='primary' onClick={() => navigate('/')}>
              Back Home
            </HomeButton>
          </TitleContainer>
        </ContentContainer>
      </SectionContainer>
    </PageLayout>
  )
}

export default Success