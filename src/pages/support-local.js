import React from 'react'
import SEO from "../components/seo"
import { BlogHeader } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"

function SupportLocal() {
  return (
    <BlogLayout pic={require('../images/projects/support_local_black.svg')}
                title='Support Local'
                timeline='April 2020 - Present'
                description='Frontend web developer using React.js to build a marketplace supporting COVID affected businesses.'
                footnote={require('../images/blog-footnotes/arizona.png')}>
      <SEO title='Support Local'/>

      <BlogHeader>Content Coming Soon...</BlogHeader>
    </BlogLayout>
  )
}

export default SupportLocal