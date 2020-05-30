import React from 'react'
import BlogLayout from "../components/layouts/blogLayout"
import SEO from "../components/seo"
import { BlogHeader, BlogText } from "../components/typography"

function CourseRegistration() {
  return (
    <BlogLayout pic={require('../images/projects/v.png')}
                title='Athena'
                description='Revamping course registration at Vanderbilt University - a platform based on student input.'>
      <SEO title='Athena'/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        My friend, Henry Hunter, and I spent time last summer researching how
        we could improve the course registration process for Vanderbilt students.
      </BlogText>
      <BlogText>
        We wanted to expand upon our own experiences using YES, Vanderbilt's current
        course registration platform, and so we began interviewing students across
        all years and majors.
      </BlogText>
      <BlogText>
        65 interviews later and we felt that we had a good
        idea about what students felt they needed to make course selection easier.
      </BlogText>
      <BlogText>
        Rather than approaching the school, we decided to build out our
        own platform.
      </BlogText>
    </BlogLayout>
  )
}

export default CourseRegistration