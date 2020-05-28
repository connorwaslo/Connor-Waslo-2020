import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import Intro from '../components/intro'
import About from "../components/about"
import Projects from "../components/projects"
import TechGraph from "../components/techGraph"

const IndexPage = () => (
  <PageLayout>
    <Intro/>
    <About/>
    <Projects/>
    <TechGraph/>
  </PageLayout>
)

export default IndexPage
