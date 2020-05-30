import React from 'react'
import SEO from "../components/seo"
import { BlogHeader } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"

function UnheardVoicesOutreach() {
  return (
    <BlogLayout pic={require('../images/projects/uvo.png')}
                title='Unheard Voices Outreach'
                timeline='August 2019 - May 2020'
                team='5 software engineers'
                description='Project manager for a mobile app to connect individuals coming out of incarceration to resources and mentorship.'
                footnote={require('../images/blog-footnotes/unchained.jpg')}>
      <SEO title='Unheard Voices'/>

      <BlogHeader>Content Coming Soon...</BlogHeader>
    </BlogLayout>
  )
}

export default UnheardVoicesOutreach