import React from 'react'
import BlogLayout from "../components/layouts/blogLayout"
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink } from "../components/typography"
import ProjectImg from "../components/projectImg"

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
                anchor='course-registration'
                footnote={require('../images/blog-footnotes/pillar.png')}>
      <SEO title='Athena'/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        Fed up with Vanderbilt's course registration, my friend, Henry Hunter, and I spent time
        during summer 2019 researching how we could improve the course registration process for Vanderbilt students.
      </BlogText>
      <BlogText>
        65 student interviews later and we had gathered more than enough potential features and bug-fixes
        to create our own product.
      </BlogText>

      <br/>

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
        Students loved the demo. Conducting so many interviews in advance of the development process meant that we were able to only
        include features we were positive students felt they <i>needed</i> during registration.
      </BlogText>

      <br/>

      <BlogHeader>A 50/50 Meeting</BlogHeader>
      <BlogText>
        One day in the fall I received an email from one of Vanderbilt's Deans asking to meet and discuss this tool.
      </BlogText>
      <BlogText>
        It's impossible to read into the true emotion behind emails with a professor. They're simply too stoic and professional. Henry and I knew, however,
        that the meaning behind this invitation had to be 50/50.
      </BlogText>
      <BlogText>
        50/50 meaning the motivation was 50% ensuring that we weren't using the actual course registration API and 50% curious as to what we were doing.
      </BlogText>
      <BlogText>
        Fortunately, I was able to explain that we had not integrated with the school's API and that we were just building a case to switch over to more modern
        course registration software.
      </BlogText>
      <BlogText>
        This explanation got us a meeting with the University Registrar.
      </BlogText>

      <br/>

      <BlogHeader>The Pitch</BlogHeader>
      <BlogText>
        Sitting down with the University Registrar felt like the <i>big</i> meeting. The final sit down with a decision maker to decide whether or not we could
        help Vanderbilt revolutionize their course registration system and save countless hours for students.
      </BlogText>
      <BlogText>
        While it was incredibly constructive, it was not that meeting.
      </BlogText>
      <BlogText>
        Instead, we discussed the research that we had performed, our vision for the future of Vanderbilt course registration, and what next steps we could take. The
        Registrar told us that we had come to them with the first actually implementable idea they had seen in years, and, as a result, they would help us pitch it
        to the real decision makers: the deans.
      </BlogText>
      <BlogText>
        What they needed from us was a white paper detailing our research.
      </BlogText>

      <br/>

      <BlogHeader>The White Paper</BlogHeader>
      <BlogText>
        We recorded our findings in this 4 page white paper.
      </BlogText>
      <InlineLink href="https://connor-waslo-com.s3.amazonaws.com/Course+Registration+White+Paper+-+Waslo%2C+Hunter.pdf">
        <ProjectImg src={require('../images/blog-pics/whitepaper.png')} alt='white paper' caption='You can check out the full white paper by clicking here.'
          style={{ boxShadow: '0 5px 3px rgba(0,0,0,0.2)'}}/>
      </InlineLink>
      <BlogText>
        This paper includes all of our research, sources, and suggestions to the administration.
      </BlogText>
      <BlogText>
        Ultimately, this paper convinced Vanderbilt University's Deans to move forward with changing our course registration system
        and the school is currently in the process of exploring new modern software.
      </BlogText>

      <BlogText>
        <InlineLink href="https://github.com/connorwaslo/vandy-class-search">
          If you're interested, you can check out the source code here.
        </InlineLink>
      </BlogText>
    </BlogLayout>
  )
}

export default CourseRegistration