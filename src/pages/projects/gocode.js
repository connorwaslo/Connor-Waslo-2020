import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogText from "../../components/blog-text"
import ProjectScreenshot from "../../components/project-screenshot"

function GoCode() {
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/iphone.png')}>
      <ProjectBlogHeader img={require('../../images/projects/gocode.png')} alt='GoCode'>
        <h1 className='display-3'>GoCode</h1>
        <h1><i>August 2017 - July 2018</i></h1>
      </ProjectBlogHeader>

      <BlogText>GoCode changed my life forever.</BlogText>
      <BlogText>That's a very dramatic way to introduce a project but it's true. This was the first "startup idea" that
      I ever pursued.</BlogText>
      <BlogText>Did I fail? Hell yeah.</BlogText>
      <BlogText>Did this failure prepare me for future projects? Absolutely.</BlogText>
      <BlogText>GoCode was a mobile app designed to teach kids how to code on their phone by having them writing real
        code instead of just memorizing information.</BlogText>
      <BlogText>After brainstorming with a couple mentors, I decided to dive right into this project. I began to teach
        myself mobile app development using <a href="https://facebook.github.io/react-native/" target="_blank">React-Native</a> and spent countless hours
      developing GoCode.</BlogText>
      <BlogText>I teamed up with close friend and incredible artist, Isabela von Dehl, to tackle the user interface
        and user experience. Surely version 1 needed to look beautiful right?</BlogText>
      <BlogText>After spending three months and hundreds of hours building the app, I released it on the App Store and
      Google Play Store. I felt like we had created such a clean, streamlined app. Surely <i>somebody</i> wanted to use it.</BlogText>
      <ProjectScreenshot src={require('../../images/blog-pics/sololearn1.png')} alt='A competitors app' caption='Test'
        vertical/>

      <BlogText>Wrong.</BlogText>
      <br/>
      <BlogText>I made probably the most common mistake a wannabe-startup-founder can make. I built a solution without
      really knowing what problem I was solving. I thought that I could build a product and then find the target user for it.</BlogText>
      <BlogText>You can probably see where this is going. I could not find the target user for it.</BlogText>
      <BlogText>It did get a decent number of users from my school and our sister school, but it wasn't sustainable or replicable.</BlogText>
      <BlogText>As a result I decided to pivot from a mobile app to a website that I intended to license for use in schools.</BlogText>
      <BlogText>This time I actually had conversations with schools before fully building out the website. Unfortunately,
      every school wanted a different website. On top of this huge dilemma, it became apparent that the sales cycle
      for these schools would be brutally slow.</BlogText>
      <BlogText>I chose to step away from GoCode the summer before my freshman year at Vanderbilt.</BlogText>
      <BlogText>Obviously I didn't get the startup that I wanted, but I will never make these mistakes again.</BlogText>
      <br/>
      <BlogText><i>I'll be adding some screenshots and more content to this blog post in the future.</i></BlogText>
    </LayoutProjectBlog>
  )
}

export default GoCode;