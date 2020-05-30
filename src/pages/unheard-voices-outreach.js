import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText } from "../components/typography"
import ProjectImg from "../components/projectImg"
import BlogLayout from "../components/layouts/blogLayout"

function UnheardVoicesOutreach() {
  return (
    <BlogLayout pic={require('../images/projects/uvo.png')}
                title='Unheard Voices Outreach'
                timeline='August 2019 - May 2020'
                description='Project manager for a mobile app to connect individuals coming out of incarceration to resources and mentorship.'
                footnote={require('../images/blog-footnotes/unchained.jpg')}>
      <SEO title='Unheard Voices'/>

      <BlogHeader>Content Coming Soon...</BlogHeader>
    </BlogLayout>
  )
}

export default UnheardVoicesOutreach