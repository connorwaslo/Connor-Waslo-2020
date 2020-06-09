import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"
import ProjectImg from "../components/projectImg"

function RGPConsulting() {
  return (
    <BlogLayout pic={require('../images/projects/rgp_padded.png')}
                title='RGP Consulting'
                timeline='August 2019 - Present'
                team='6 Vanderbilt undergraduate & graduate students'
                description='Product management intern developing an internal app.'
                footnote={require('../images/blog-footnotes/iphone.png')}>
      <SEO title='RGP Consulting'/>

      <BlogText>
        Sophomore year at Vanderbilt I was lucky enough to participate in Innovation Garage: a
        yearlong consulting project identifying an opportunity and developing a tech solution for
        RGP Consulting.
      </BlogText>
      <BlogText>
        In this post I'll talk about the high level processes we used but can't share any specifics.
      </BlogText>

      <br/>

      <BlogHeader>Innovation Garage</BlogHeader>
      <BlogText>
        Innovation Garage is a selective program at Vanderbilt University where a small team of students
        work closely with a company to identify opportunity for innovation and pitch a solution.
      </BlogText>
      <BlogText>
        This program placed huge emphasis on the <i>design thinking process</i>.
      </BlogText>

      <ProjectImg src={require('../images/blog-pics/design_thinking.png')} alt='design thinking' caption=''/>

      <br/>

      <BlogHeader>Empathize</BlogHeader>
      <BlogText>
        I didn’t know any of my team members when the project began in August, but we were tossed right into the fire.
        Our student team led weekly meetings with the RGP team to summarize progress and plan next steps.
      </BlogText>
      <BlogText>
        To begin our process we needed to interview employees. I was responsible for reaching out to RGP employees
        (across all different roles) and scheduling interviews.
      </BlogText>
      <BlogText>
        While I wouldn’t call this a hugely exciting role, it was certainly a good experience in juggling calendar
        invites and managing schedules.
      </BlogText>
      <BlogText>
        These interviews taught us so much about the different roles at RGP, employee experiences, and personalities at
        the firm.
      </BlogText>

      <br/>

      <BlogHeader>Define</BlogHeader>
      <BlogText>
        Our team then consolidated the interview insights along with external white papers to group our discoveries into
        overlapping categories – building an idea map to find the optimal intersection between problem areas.
      </BlogText>
      <BlogText>
        While this map was useful in narrowing down the vertical(s) we intended to hone in on, it didn’t help us address
        specific issues. That is, it didn’t show us how these areas correlated with RGP employees and their experience
        at RGP.
      </BlogText>
      <BlogText>
        To do that, we used our research to build a journey map plotting the life cycle of certain employees.
      </BlogText>

      <br/>

      <BlogHeader>Ideate</BlogHeader>
      <BlogText>
        Our team’s advisors were essential in helping us get to this stage in a smart and constructive way.
      </BlogText>
      <BlogText>
        It’s easy to come up with ideas. It’s hard to do the work to inform your ideation process and come up with an
        idea that you’re positive people want.
      </BlogText>
      <BlogText>
        By the time we reached the ideation phase we had accumulated enough research and spoken with so many employees
        that it seemed easy to put ourselves in the shoes of employees and imagine what sort of solutions we would want
        to address our concerns.
      </BlogText>
      <BlogText>
        Finally, we used our research to recommend a tech solution. Unfortunately, I can’t elaborate on the specifics.
      </BlogText>

      <br/>

      <BlogHeader>Summer...</BlogHeader>
      <BlogText>
        Now the prototype and test phases.
      </BlogText>
      <BlogText>
        This summer (2020) I will be continuing to work with RGP to develop the solution that we pitched. I’m taking the
        role of a product management intern and will be working with three of my teammates from the year to plan and
        build our product.
      </BlogText>
      <BlogText>
        More updates to come in August.
      </BlogText>
    </BlogLayout>
  )
}

export default RGPConsulting