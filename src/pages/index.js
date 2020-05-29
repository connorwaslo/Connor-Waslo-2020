import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import Intro from '../components/intro'
import About from "../components/about"
import Projects from "../components/projects"
import TechGraph from "../components/techGraph"
import Experience from "../components/experience"
import Contact from "../components/contact"
import SEO from "../components/seo"

const IndexPage = () => (
  <PageLayout>
    <SEO title='Connor Waslo'/>

    <Intro/>
    <About/>
    <Projects/>
    <TechGraph/>
    <Experience/>
    <Contact/>
  </PageLayout>
)

export default IndexPage
