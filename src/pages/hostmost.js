import React from 'react'
import SEO from "../components/seo"
import { BlogHeader } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"

function Hostmost() {
  return (
    <BlogLayout pic={require('../images/projects/hostmost_red.svg')}
                title='hostmost'
                timeline='June - August 2019'
                team='3 co-founders & myself'
                description='Product & sales intern helping a startup find product-market fit. Also a cold calling machine.'
                footnote={require('../images/blog-footnotes/house.jpg')}>
      <SEO title='RGP Consulting'/>

      <BlogHeader>Content Coming Soon...</BlogHeader>
    </BlogLayout>
  )
}

export default Hostmost