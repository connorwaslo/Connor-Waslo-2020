import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"

function TreeHacks() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/apple.jpg')}>
      <ProjectBlogHeader img={require('../../images/projects/treehacks.svg')} alt='TreeHacks'>
        <h1 className='display-3'>TreeHacks 2019</h1>
        <h1 className='display-3'><i>@Stanford</i></h1>
        <h1><i>February 2019</i></h1>
      </ProjectBlogHeader>

      <BlogText>TreeHacks 2019 was an interesting hackathon not only because we were given a ton of time (36 hours),
      but because I stumbled into a team with 3 other computer science majors without hackathon experience.</BlogText>
      <BlogText>No big deal, it just meant that we had a lot of learning to do in the first few hours.</BlogText>
      <BlogText>Eventually, we decided to build a mobile app that allows users to take a picture of their meal, let
        the app detect what they're eating and track nutrition info.</BlogText>
      <BlogText>Circling back to my team's lack of experience, this unfortunately meant I was the only one with mobile app
      development experience.</BlogText>
      <BlogText>We decided to build the project in two halves. The first being the mobile app which users used to track
      and save their nutritional information. The second being a web portal users could log into to track their nutrient
      intake over time.</BlogText>
      <BlogText>Once again, we didn't win anything but had an absolute blast.</BlogText>
      <BlogText><a href="https://github.com/connorwaslo/Nutrition-App" target="_blank">Check out the code for the
        mobile app on my Github.</a></BlogText>
      <BlogText>I have to give a huge shoutout to the <a href="https://expo.io/" target="_blank">Expo</a> team at
        TreeHacks which was very patient in helping me work through some tricky bugs.</BlogText>
    </LayoutProjectBlog>
  )
}

export default TreeHacks;