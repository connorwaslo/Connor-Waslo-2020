import React from 'react'
import SEO from "../components/seo"
import { BlogHeader } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"

function RGPConsulting() {
  return (
    <BlogLayout pic={require('../images/projects/rgp_padded.png')}
                title='RGP Consulting'
                timeline='August 2019 - Present'
                team='6 Vanderbilt undergraduate & graduate students'
                description='Product management intern developing an internal app.'
                footnote={require('../images/blog-footnotes/iphone.png')}>
      <SEO title='RGP Consulting'/>

      <BlogHeader>Content Coming Soon...</BlogHeader>
    </BlogLayout>
  )
}

export default RGPConsulting