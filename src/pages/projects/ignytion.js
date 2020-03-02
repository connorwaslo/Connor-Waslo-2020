import React from 'react';
import LayoutProjectBlog from "../../components/layouts/layout-project-blog"
import ProjectBlogHeader from "../../components/project-blog-header"
import BlogHeader from "../../components/blog-header"
import BlogText from "../../components/blog-text"
import CodeSnippet from "../../components/code-snippet"

function Ignytion() {
  const exampleCode = `
  def parse(self, response):
        url = response.request.url
        article = url[url.find('ars/') + 4:url.rfind('/')]
        desc = response.css('p font::text').extract()
        text = response.css('p::text').extract()

        self.append_csv(article, desc, text[1:])

    def append_csv(self, article, desc, text):
        row = [article]
        for d in desc:
            row.append(d)
        for item in text:
            row.append(item)

        with open('ars_info.csv', 'a', encoding='UTF-8', newline='') as out:
            writer = csv.writer(out)
            writer.writerow(row)
  `;

  // Todo: Add some screenshots in here
  return (
    <LayoutProjectBlog footnote={require('../../images/blog-footnotes/robot.png')}>
      <ProjectBlogHeader img={require('../../images/projects/ignytion.png')} alt='Ignytion'>
        <h1 className='display-3'>Ignytion</h1>
        <h1><i>July 2018 - October 2018</i></h1>
      </ProjectBlogHeader>

      <BlogText>This was my first ever profitable business venture!</BlogText>
      <BlogText>I mean besides the lemonade stand I had when I was 7.</BlogText>
      <br/>
      <BlogHeader>Value Prop</BlogHeader>
      <BlogText>The goal of Ignytion was to build software for startups that allowed them to automate
      processes and data collection so that founders could spend their time adding value rather than
      performing repetitive tasks.</BlogText>
      <BlogText>I worked with a few different startups in the Phoenix area and built programs ranging from
      collecting publicly available demographic data to identifying a competitor's customers.</BlogText>
      <br/>

      <BlogHeader>The Actual Work</BlogHeader>
      <BlogText>An interesting aspect about this project was how ephemeral the final products were.</BlogText>
      <BlogText>Most of the time, presenting the data in a spreadsheet to the startup was the only deliverable.
        All of the work to code a solution simply disappeared into the jungle of documents on my computer.</BlogText>
      <BlogText>In the case that I was building a process automation solution for a startup, I often just ran it
      on my computer until it was done. The startup checked it was successful and then we went our separate ways.</BlogText>
      <BlogText>Take this code for example. This is a snippet of a spider designed to scrape ~23k Arizona state statutes
      for use by a company working to help educate Arizona citizens on their rights.</BlogText>
      <br/>

      <CodeSnippet code={exampleCode}/>

      <BlogHeader>My Takeaways</BlogHeader>
      <BlogText>Managing communication with clients is hard!</BlogText>
      <BlogText>Without a doubt my biggest lesson from Ignytion was how to conduct myself professionally in a fast-paced
        environment. Being an "outsider" and working with a startup team meant that I had to figure out exactly what
        the team was looking for, determine its feasibility, and provide them with a timeline and price all in a short
        amount of time.</BlogText>
      <BlogText>Being 17 at the time it was often very tempting to continually check in with my clients for validation, but
        with these sort of projects it was simply unnecessary. Learning to be self-sufficient and collect all the relevant
        information at the very beginning of the project has since made many projects much easier.</BlogText>
      <BlogText>Otherwise, Ignytion was just a lot of fun!</BlogText>
      <BlogText>I've always loved talking to founders and hearing about their journey and vision, so working
      directly with successful founders was incredibly rewarding.</BlogText>
      <BlogText>I got to hear lots of stories about what did work and even more about what didn't work. Hopefully
      I'll be able to use some of that advice in the near future.</BlogText>

      <br/>
      <BlogHeader>Where's Ignytion Now?</BlogHeader>
      <BlogText>When I got to college I decided to retire Ignytion so that I could focus on scalable ideas. But every
      once in a while I need to break out the hard skills I learned from Ignytion and scrape some data together.</BlogText>
      <BlogText>Shoot me an email if you want to chat about it!</BlogText>
      {/* Todo: Click this link and automatically copy it to clipboard */}
      <BlogText>connor.r.waslo@vanderbilt.edu</BlogText>
    </LayoutProjectBlog>
  )
}

export default Ignytion;