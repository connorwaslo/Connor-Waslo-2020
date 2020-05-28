import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import { TitleContainer, ContentContainer } from "../components/containers"
import { MainTitle } from "../components/typography"
import theme from "../styles/theme"

const IndexPage = () => (
  <PageLayout>
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
  </PageLayout>
)

export default IndexPage
