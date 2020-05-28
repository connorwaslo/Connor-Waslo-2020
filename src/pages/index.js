import React from "react"
import PageLayout from "../components/layouts/pageLayout"
import Intro from '../components/intro'
import About from "../components/about"

const IndexPage = () => (
  <PageLayout>
    <Intro/>
    <About/>
  </PageLayout>
)

export default IndexPage
