import React from 'react';
import LayoutProjectBlog from "../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../components/project-blog-header"
import BlogText from "../components/blog-text"
import ProjectScreenshot from "../components/project-screenshot"

const CourseRegistration = () => (
  <LayoutProjectBlog>
    <ProjectBlogHeader img={require('../images/projects/v.png')} alt='vanderbilt'>
      <h1 className='display-3'>Overhauling Course Registration @ Vanderbilt University</h1>
      <h1><i>June - November 2019</i></h1>
    </ProjectBlogHeader>

    <BlogText>My friend, Henry Hunter, and I spent time last summer researching how
    we could improve the course registration process for Vanderbilt students.</BlogText>
    <BlogText>We wanted to expand upon our own experiences using YES, Vanderbilt's current
    course registration platform, and so we began interviewing students across
    all years and majors.</BlogText>
    <BlogText><b>65</b> interviews later and we felt that we had a good
    idea about what students felt they needed to make course selection easier.</BlogText>
    <BlogText>Rather than approaching the school, we decided to build out our
    own platform.</BlogText>

    <ProjectScreenshot src={require('../images/screenshots/better_yes.png')}
                       alt='better yes'
                       caption='A screenshot of our MVP. Function over fashion or something like that...'/>

    <BlogText>I coded this from scratch with React.js and Firebase. Henry went through
    the student handbook and collected all the courses offered by the school (huge shoutout
    to him for doing that — it sounded like hell).</BlogText>
    <BlogText>Eventually, we got an email from the Dean of Engineering at Vanderbilt
    asking us to meet and discuss our course registration tool.</BlogText>
    <BlogText>As soon as they were positive we weren't hacking into YES, we were able to meet
    with the University Registrar Office and formulate a plan to formally suggest changes
    to the school's course registration system.</BlogText>
    <BlogText>The final product is{' '}
      <a href="https://connor-waslo-com.s3.amazonaws.com/Course+Registration+White+Paper+-+Waslo%2C+Hunter.pdf" target="_blank">
         this 4 page white paper
      </a>
      {' '}detailing our research and suggestions.</BlogText>
    <BlogText>The registrar then took our white paper and pitched it to the Deans
    on our behalf. Fortunately, they were very receptive and appreciated our perspective as students.</BlogText>
    <BlogText>Thanks to the University Registrar for advocating for us, Vanderbilt is now
    exploring new technology to modernize course registration and make the process
    less stressful for students.</BlogText>
  </LayoutProjectBlog>
);

export default CourseRegistration;