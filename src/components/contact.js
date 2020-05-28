import React from 'react'
import { SectionContainer } from "./containers"
import ContentGrid from "./layouts/contentGrid"
import ContactForm from "./contactForm"
import theme from '../styles/theme'

function Contact() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
      <ContentGrid title="Let's Connect">
        <ContactForm/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Contact