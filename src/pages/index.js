import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import Intro from '../components/intro'
import About from "../components/about"
import Projects from "../components/projects"
import TechGraph from "../components/techGraph"
import Experience from "../components/experience"

const IndexPage = () => (
  <PageLayout>
    <Intro/>
    <About/>
    <Projects/>
    <TechGraph/>
    <Experience/>
  </PageLayout>
)

export default IndexPage
