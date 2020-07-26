import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"
import ProjectImg from "../components/projectImg"

function UnheardVoicesOutreach() {
  return (
    <BlogLayout pic={require('../images/projects/uvo.png')}
                title='Unheard Voices Outreach'
                timeline='August 2019 - May 2020'
                team='5 software engineers'
                description='Project manager for a mobile app to connect individuals coming out of incarceration to resources and mentorship.'
                anchor='unheard-voices-outreach'
                footnote={require('../images/blog-footnotes/unchained.jpg')}>
      <SEO title='Unheard Voices'/>

      <BlogText>
        Sophomore year of college (2019 - 2020) I was a project manager for Change++, a student
        organization that builds software for non-profits at no cost.
      </BlogText>
      <BlogText>
        I worked with Rahim Buford from <InlineLink href=''>Unheard Voices Outreach</InlineLink> to
        create a mobile app connecting individuals coming out of incarceration to relevant resoureces and mentors
      </BlogText>

      <br/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        Working on this project has been incredibly rewarding. UVO's mission to end felonism and reduce
        recidivism has made developing their app both rewarding and enjoyable.
      </BlogText>
      <BlogText>
        This project showed me that starting with "why" is the best way to both give the team a clear image
        of the product vision and to motivate the team to see that vision through.
      </BlogText>

      <br/>

      <BlogHeader>The Product</BlogHeader>
      <BlogText>
        I jumped on a call with Rahim, the founder of UVO, to hear his story and to learn about his vision. I
        can’t express just how inspiring Rahim is. His vision for being able to help people coming out of the prison
        system in a scalable manner was incredible to hear.
      </BlogText>
      <BlogText>
        I came out of this call fired up -- ready to get building.
      </BlogText>
      <BlogText>
        Next steps were to create a project spec outlining the features we would include in their minimum viable product,
        the tech stack that we intended to use, and what we expected that timeline to look like.
      </BlogText>
      <BlogText>
        After getting the UVO team’s approval, we began developing low fidelity mockups. Keep in mind, this is a team of engineers
        and at the time we had very little design experience and had yet to work together. I'll emphasize
        the <i>low fidelity</i> point one more time.
      </BlogText>

      <ProjectImg src={require('../images/blog-pics/wireframes.png')} alt='wireframes' caption='I promise my design work has improved since then.'/>

      <BlogText>
        Our tech stack was React-Native and Firebase. I used Jira to manage the team's week long sprints.
      </BlogText>

      <br/>

      <BlogText>
        Everything progressed smoothly until March when we were all asked to leave campus due to the COVID crisis. This
        threw a wrench in our workflow to say the least.
      </BlogText>
      <BlogText>
        We're currently finalizing the app before deploying it to the app store.
      </BlogText>
      <BlogText>
        Updates on the final product coming soon.
      </BlogText>
    </BlogLayout>
  )
}

export default UnheardVoicesOutreach