import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"
import ProjectScreenshot from "../../components/project-screenshot"

// Todo: Make a component which is good for any dimension photo to go in a blog post
function MakeHarvard() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/pen.jpg')}>
      <ProjectBlogHeader img={require('../../images/projects/eye.png')} alt='Make Harvard'>
        <h1 className='display-3'>Hands-free Art</h1>
        <h1 className='display-4'>@Make Harvard</h1>
        <h1><i>February 2019</i></h1>
      </ProjectBlogHeader>

      <BlogText>Make Harvard is hackathon which requires you to build something physical and not just software.</BlogText>
      <BlogText>My team designed and built a robotic arm which is controlled entirely by pupil motion. Our intention
      was that this could be used by those with physical disabilities to still express their creative side.</BlogText>
      <BlogText>I was responsible for developing the pupil-tracking part of the project. The hardest part of this was
      getting all the correct dependencies installed on my computer. From there it just took some playing around with
      pre-built eye tracking models and sending the right data to the arduinos.</BlogText>
      <BlogText>Unfortunately, we built the arms way too long for the tiny motors we had and the range of motion was...
      subpar.</BlogText>
      <BlogText>We may not have won, but this was a great learning experience.</BlogText>
    </LayoutProjectBlog>
  )
}

export default MakeHarvard;