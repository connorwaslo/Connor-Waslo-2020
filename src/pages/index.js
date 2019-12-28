import React from "react"
import Intro from '../sections/intro';
import About from '../sections/about';
import Projects from '../sections/projects';

const IndexPage = () => (
  <div>
    <Intro/>
    <About bgColor='#F2F2F2'/>
    <Projects/>
  </div>
)

export default IndexPage
