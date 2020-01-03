import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"

function Ignytion() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/robot.png')}>
      <ProjectBlogHeader img={require('../../images/projects/ignytion.png')} alt='Ignytion'>
        <h1 className='display-3'>Ignytion</h1>
        <h1><i>July 2018 - October 2018</i></h1>
      </ProjectBlogHeader>

      <BlogText>This was my first ever profitable business venture!</BlogText>
      <BlogText>I mean besides the lemonade stand I had when I was 7.</BlogText>
      <br/>
      <BlogText>The goal of Ignytion was to build software for startups that allowed them to automate
      processes and data collection so that founders could spend their time adding value rather than
      performing repetitive tasks.</BlogText>
      <BlogText>I worked with a few different startups in the Phoenix area and built programs ranging from
      collecting publicly available demographic data to identifying a competitor's customers.</BlogText>
      <BlogText>When I got to college I decided to retire Ignytion so that I could focus on scalable
      ideas.</BlogText>
    </LayoutProjectBlog>
  )
}

export default Ignytion;