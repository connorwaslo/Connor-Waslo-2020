import React from 'react'
import { SectionContainer } from "./containers"
import ContentGrid from "./layouts/contentGrid"
import ContactForm from "./contactForm"
import theme from '../styles/theme'

function Contact() {
  return (
    <SectionContainer background={theme.palette.backgrounds.main}>
      <ContentGrid title="Let's Connect"
                   subtitle="If you want to chat, work on a project, or hire me, shoot me a message and let's figure something out!">
        <ContactForm/>
      </ContentGrid>
    </SectionContainer>
  )
}

export default Contact