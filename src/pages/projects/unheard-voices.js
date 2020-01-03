import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"

function UnheardVoices() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/scales_of_justice.svg')}>
      <ProjectBlogHeader img={require('../../images/projects/uvo.png')} alt='uvo'>
        <h1 className='display-3'>Unheard Voices Outreach</h1>
        <h1><i>September 2019 - Present</i></h1>
      </ProjectBlogHeader>

      <BlogText>I'm a Project Manager for a student organization called <i>Change++</i>.
      We develop software for non-profits. <br/>Free of charge, of course.</BlogText>
      <BlogText>Five students (including myself) are working with Nashville non-profit{' '}
        <a href="https://www.unheardvoicesoutreach.org/" target="_blank">Unheard Voices Outreach</a> to
        build a mobile app designed to reduce recidivism.</BlogText>
      <BlogText>This app will connect individuals coming out of incarceration with
      resources and mentors.</BlogText>
      <BlogText>Our team is working hard on it. Updates coming soon.</BlogText>
    </LayoutProjectBlog>
  )
}

export default UnheardVoices;