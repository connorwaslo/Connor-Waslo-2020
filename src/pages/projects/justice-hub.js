import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"

function JusticeHub() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/cambodia.png')}>
      <ProjectBlogHeader img={require('../../images/projects/ibj.png')} alt='IBJ'>
        <h1 className='display-3'>Justice Hub</h1>
        <h1><i>October 2018 - May 2019</i></h1>
      </ProjectBlogHeader>

      <BlogText>Justice Hub is an app designed to connect people in developing countries with
      pro bono legal representation.</BlogText>
      <BlogText>I worked as a software engineer on a team of five to develop this app for the non-profit{' '}
        <a href="" target="_blank">International Bridges to Justice</a>.</BlogText>
      <BlogText>Our team, part of the Change++ student organization which builds software for non-profits, developed
      an MVP for IBJ and helped them raise $10,000 in grant funding.</BlogText>
      <BlogText>We built it with React-Native and Firebase.</BlogText>
      <BlogText>The MVP functionality allowed users (lawyers and clients) to build out detailed profiles,
      create or respond to pending legal cases, and begin communication through Whatsapp.</BlogText>
      <BlogText>Our team has since passed Justice Hub on to IBJ and their team of developers.</BlogText>
      <BlogText>IBJ is an incredible organization and we're excited to see Justice Hub grow!</BlogText>
    </LayoutProjectBlog>
  )
}

export default JusticeHub;