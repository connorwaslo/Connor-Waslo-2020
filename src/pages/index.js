import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import Intro from '../components/intro'
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => (
  <PageLayout>
    <Intro/>
    <About/>
    <Projects/>
  </PageLayout>
)

export default IndexPage
