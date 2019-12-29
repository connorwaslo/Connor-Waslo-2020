import React from 'react';
import LayoutProjectBlog from "../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../components/project-blog-header"

const CourseRegistration = () => (
  <LayoutProjectBlog>
    <ProjectBlogHeader img={require('../images/projects/v.png')} alt='vanderbilt'>
      <h1 className='display-3'>Overhauling Course Registration @ Vanderbilt University</h1>
      <h1><i>June - November 2019</i></h1>
    </ProjectBlogHeader>
  </LayoutProjectBlog>
);

export default CourseRegistration;