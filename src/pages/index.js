import React from "react"
import Intro from '../sections/intro';
import About from '../sections/about';
import Projects from '../sections/projects';
import Work from "../sections/work"
import Interests from "../sections/interests"

const IndexPage = () => (
  <div>
    <Intro/>
    <About bgColor='#F2F2F2'/>
    <Projects/>
    <Work style={{backgroundColor: '#F2F2F2'}}/>
    <Interests/>
  </div>
)

export default IndexPage
