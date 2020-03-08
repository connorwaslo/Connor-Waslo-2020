import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"
import BlogHeader from "../../components/blog-header"

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

      <BlogHeader>How It Worked</BlogHeader>
      <BlogText>The initial algorithm for prediction was based on this paper that I found with a few tweaks.</BlogText>
      <BlogText>The general idea remained the same though: look for the team with the most positive upswing in sentiment
        prior to gameday and put money on that team.</BlogText>
      <BlogText>While this worked well with a small sample size, we wanted to try to develop an algorithm
        with machine learning once we collected more data.</BlogText>
      <BlogText>Thanks to a microgrant from Vanderbilt University, we were able to collect roughly a season of Twitter
        data to train and test on.</BlogText>
      <BlogText>We tried multiple different algorithms like:</BlogText>
      <BlogText>- Random Forest</BlogText>
      <BlogText>- LSTM</BlogText>
      <BlogText>- Feedforward Neural Network</BlogText>

      <br/>

      <BlogText>Ultimately the Feedforward Neural Network worked the best (only slightly better than the random forest).</BlogText>
      <BlogText>Regardless, the results were still not profitable.</BlogText>

      <BlogHeader>Where's Winnr Now?</BlogHeader>
      <BlogText>I've since moved away from using Twitter sentiment and towards using pure statistics to make NBA predictions.
      This has been useful as a learning experience, but is still not profitable.</BlogText>
      <BlogText>Long story short, Vegas is reaaaaally good at setting NBA moneylines.</BlogText>

      <BlogText>I'm a little short on time this semester so I haven't been able to really focus on this at all (probably not a bad thing)
        but in the future I might switch to a sport like soccer or hockey. It totally depends where the historical betting data exists
        for free.</BlogText>
      <br/>
      <BlogText>While this project is cool, I'm not particularly passionate about it. It doesn't really solve any problems in the world;
        it more just siphons money from casinos to me... at least it would if it worked. That's cool but I'd rather spend some time
        making something that makes our lives easier.</BlogText>
      <br/>
      <BlogText>Also, go watch Uncut Gems and tell me that you're interested in sports betting. That movie took a
      half decade off my life.</BlogText>
    </LayoutProjectBlog>
  )
}

export default Winnr;