import React from 'react'
import BlogLayout from "../components/layouts/blogLayout"
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink } from "../components/typography"
import ProjectImg from "../components/projectImg"

const Attachments = () => (
  <>
    <BlogText>
      <a href="https://connor-waslo-com.s3.amazonaws.com/Course+Registration+White+Paper+-+Waslo%2C+Hunter.pdf" target="_blank">
        Project White Paper
      </a>
    </BlogText>
    <BlogText>
      <a href="https://github.com/connorwaslo/vandy-class-search" target="_blank">
        Project Source Code
      </a>
    </BlogText>
  </>
)

function CourseRegistration() {
  return (
    <BlogLayout pic={require('../images/projects/v.png')}
                title='Athena'
                timeline='June - November 2019'
                team='Henry Hunter & myself'
                description='Revamping course registration at Vanderbilt University - a platform based on student input.'
                attachments={<>
                  <BlogText>
                    <InlineLink href="https://connor-waslo-com.s3.amazonaws.com/Course+Registration+White+Paper+-+Waslo%2C+Hunter.pdf">
                      Project White Paper
                    </InlineLink>
                  </BlogText>
                  <BlogText>
                    <InlineLink href="https://github.com/connorwaslo/vandy-class-search">
                      Project Source Code
                    </InlineLink>
                  </BlogText>
                </>}
                footnote={require('../images/blog-footnotes/pillar.png')}>
      <SEO title='Athena'/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        Fed up with Vanderbilt's course registration, my friend, Henry Hunter, and I spent time
        last summer researching how we could improve the course registration process for Vanderbilt students.
      </BlogText>
      <BlogText>
        65 student interviews later and we had gathered more than enough potential features and bug-fixes
        to create our own product.
      </BlogText>

      <BlogHeader>The Product</BlogHeader>
      <BlogText>
        The biggest improvement we could make to help students was to implement the following functionality:
      </BlogText>
      <BlogText>1. Make it faster</BlogText>
      <BlogText>2. Improve search capabilities and allow for multiple search filters at a time</BlogText>
      <BlogText>3. Built "potential schedules" on a calendar while searching through classes</BlogText>
      <BlogText>4. Make it look like it was developed this decade</BlogText>

      <ProjectImg src={require('../images/blog-pics/better_yes.png')} alt='Better YES' caption='Minimum viable product based on student feedback.'/>

      <BlogText>
        With these features in mind, I coded it form scratch with React.js and Firebase. I had a working demo ready in a couple
        weeks and we started to get it into students' hands.
      </BlogText>
      <BlogText>
        They loved it and eventually Vanderbilt administration heard. Our first meeting with administration it was clear that
        they needed to make sure we weren't interfering with the existing tech. After assuaging those concerns, we began discussions with
        the University Registrar.
      </BlogText>
      <BlogText>
        Those discussions led to us recording our findings in{' '}
          <a href="https://connor-waslo-com.s3.amazonaws.com/Course+Registration+White+Paper+-+Waslo%2C+Hunter.pdf" target="_blank">
            this 4 page white paper
          </a>
          {' '}. The paper includes all of our research and suggestions to the administration.
      </BlogText>
      <BlogText>
        Ultimately, this paper convinced Vanderbilt University's Deans to move forward with changing our course registration system
        and the school is currently in the process of exploring new modern software.
      </BlogText>

      <BlogText>
        <a href="https://github.com/connorwaslo/vandy-class-search" target="_blank">
          If you're interested, you can check out the source code here.
        </a>
      </BlogText>
    </BlogLayout>
  )
}

export default CourseRegistration