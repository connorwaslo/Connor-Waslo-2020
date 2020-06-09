import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"

function SupportLocal() {
  return (
    <BlogLayout pic={require('../images/projects/support_local_black.svg')}
                title='Support Local'
                timeline='April 2020 - Present'
                team='5 person non-profit startup'
                description='Frontend web developer using React.js to build a marketplace supporting COVID affected businesses.'
                attachments={
                  <BlogText>
                    <InlineLink href="https://azsupportlocal.com">
                      Our Website
                    </InlineLink>
                  </BlogText>
                  }
                footnote={require('../images/blog-footnotes/arizona.png')}>
      <SEO title='Support Local'/>

      <BlogText>
        I'm the frontend developer at a startup working to help fund local businesses
        via discounted credit purchases.
      </BlogText>

      <br/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        In mid-march, while taking my college classes online at home thanks to COVID, an old boss recruited me to be a
        developer for a brand new startup planning to help save local businesses struggling due to social distancing.
      </BlogText>
      <BlogText>
        Essentially, I would be one of two engineers developing a two-way marketplace allowing consumers – normal
        working people like you and me – to purchase credit at local businesses at a discount.
      </BlogText>
      <BlogText>
        The business gets the immediate cash they need to stay open, and the consumer gets a solid return on investment.
      </BlogText>

      <br/>

      <BlogHeader>The Work</BlogHeader>
      <BlogText>
        As the frontend engineer, I used the stunning designs prepared by [Anthony Ferrara] to create the Support Local
        web app using React.js.
      </BlogText>
      <BlogText>
        While the majority of my work has been converting these designs into functioning JSX and CSS, it’s been great to
        work closely with our CTO, John Armbruster, to learn how to best interface with the backend database and API.
      </BlogText>
      <BlogText>
        John A and I also work closely with our CEO, John Mullin to further develop the product plan and plan out
        optimal user flows.
      </BlogText>

      <br/>

      <BlogHeader>Learning</BlogHeader>
      <BlogText>
        I’ve learned more about web development on this project than I have on any other and it’s continuously pushing
        my technical and product design comfort zone.
      </BlogText>
      <BlogText>
        There will be more updates to come about the state of Support Local and the progress we’re making towards
        supporting your favorite businesses.
      </BlogText>
    </BlogLayout>
  )
}

export default SupportLocal