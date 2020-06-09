import React from 'react'
import BlogLayout from "../components/layouts/blogLayout"
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink, InlineRef } from "../components/typography"

function Ignytion() {
  const exampleCode = `
  def parse(self, response):                                                    # Download the page and parse its HTML 
      url = response.request.url
      article = url[url.find('ars/') + 4:url.rfind('/')]                      # For this project I needed entire articles available to the public
      desc = response.css('p font::text').extract()                           # including its summary and the entirety of the article
      text = response.css('p::text').extract()
      self.append_csv(article, desc, text[1:])
        
  def append_csv(self, article, desc, text):                                  # When working with other developers they were often fine with me
      row = [article]                                                         # delivering a .csv to them for them to parse as they wanted
      for d in desc:
          row.append(d)
      for item in text:
          row.append(item)
      with open('ars_info.csv', 'a', encoding='UTF-8', newline='') as out:
          writer = csv.writer(out)
          writer.writerow(row)
  `;

  return (
    <BlogLayout pic={require('../images/projects/ignytion.png')}
                title='Ignytion'
                timeline='July - October 2018'
                team='Solo'
                description='Created custom web automation and data collection software for growth-stage startups.'
                footnote={require('../images/blog-footnotes/robot.png')}>
      <SEO title='Ignytion'/>

      <BlogText>
        Right after graduating from high school, I was approached to “scrape” some publicly available data for a startup.
      </BlogText>
      <BlogText>
        I quickly realized that this was a significant need for quite a few local companies and created Ignytion.
      </BlogText>

      <br/>

      <BlogHeader>
        Value Proposition
      </BlogHeader>
      <BlogText>
        Ignytion automates repetitive tasks so that founders can focus on adding value through critical thinking and problem solving.
      </BlogText>

      <br/>

      <BlogHeader>
        The Projects
      </BlogHeader>
      <BlogText>
        I worked with business in industries like marketing, med-tech, education, and chatbots.
      </BlogText>
      <BlogText>
        The data also varied in source, quantity, and means of collection. For example, pulling data from publicly available
        demographic data is completely different from automating lead generation.
      </BlogText>
      <BlogText>
        Let’s do a deep dive into that lead generation project.
      </BlogText>

      <br/>

      <BlogHeader>
        Automating Lead Gen
      </BlogHeader>
      <BlogText>
        This is a dream come true for any sales team. Having done my own lead gen and sales before working
        at <InlineRef to='/hostmost'>hostmost</InlineRef>, I know how brutal it can be. That’s why I set out to create a script that could do it automatically.
      </BlogText>
      <BlogText>
        My client wanted to find web design and marketing agencies that catered to a specific website niche.
      </BlogText>
      <BlogText>
        First, I ran through the process my client was manually performing at the time to see exactly how high the
        potential was for complete automation. I defined potential blockers and drew out the flow of interaction.
      </BlogText>
      <BlogText>Placeholder</BlogText>
      <BlogText>
        I mainly use three tools in my work: Scrapy, Splash, and Selenium.
      </BlogText>
      <BlogText>
        We’ll get to each of them, but first to scrape google I needed to use selenium. Selenium mimics a human
        interacting with the browser, allowing my laptop to “click” on the searchbar,
        type in a city, and save the top search results into a doc for me.
      </BlogText>
      <br/>
      <BlogText>
        With the list of search results accumulated, I could use scrapy and splash to load each individual webpage
        that I scraped from Google and search for common patterns that web design agencies leave on their website.
      </BlogText>
      <BlogText>Something like...</BlogText>
      <BlogText>⚡ by <InlineLink href='https://scalardev.tech/'>Scalar</InlineLink></BlogText>

      <br/>

      <BlogText>
        Usually these included a hyperlink to the agency’s website. The software then compiled those links
        into one spot and then I delivered it to my client’s sales team.
      </BlogText>
      <BlogText>
        Comparing the web scraping process to the manual process, this software accelerated lead generation by over 600%.
      </BlogText>
      <BlogText>
        Saving weeks of time for some pour soul who was going to do all those Google searches manually.
      </BlogText>
    </BlogLayout>
  )
}

export default Ignytion