import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"

function Winnr() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/dice.jpg')}>
      <ProjectBlogHeader img={require('../../images/projects/nba.png')} alt='NBA'>
        <h1 className='display-3'>Winnr</h1>
        <h1><i>October 2018 - Present</i></h1>
      </ProjectBlogHeader>

      <BlogText><b>Idea:</b> Let's use data science and social media to make sports betting predictions and
        basically print money.</BlogText>
      <BlogText><b>Reality:</b> That's hard.</BlogText>
      <br/>
      <BlogText>So far, this has been a very long way of learning that Vegas is really
      good and that predictive analytics are hard.</BlogText>
      <BlogText>Teddy and I originally began developing an algorithm to predict NFL games
      using Twitter sentiment. This worked semi-consistently (better than if we predicted games ourselves)
        on a small sample size.</BlogText>
      <BlogText>Downloading a season of tweets and using machine learning was</BlogText>
      <BlogText>1) Stupid expensive</BlogText>
      <BlogText>2) Not accurate enough to be profitable</BlogText>
      <BlogText>On the bright side, our research was funded by a grant that we won through a pitch competition.</BlogText>
      <br/>
      <BlogText>I've since moved away from using Twitter sentiment and towards using pure statistics to make NBA predictions.
      This hasn't been completely worthless as a learning experience, but is still not profitable.</BlogText>
      <BlogText>Long story short, Vegas is reaaaaally good at setting NBA moneylines.</BlogText>
      <br/>
      <BlogText>Also, go watch Uncut Gems and tell me that you're interested in sports betting. That movie took a
      half decade off my life.</BlogText>
    </LayoutProjectBlog>
  )
}

export default Winnr;