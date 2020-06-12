import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"
import ProjectImg from "../components/projectImg"

function Hostmost() {
  return (
    <BlogLayout pic={require('../images/projects/hostmost_red.svg')}
                title='hostmost'
                timeline='June - August 2019'
                team='3 co-founders & me (the intern)'
                description='Product & sales intern helping a startup find product-market fit. Also a cold calling machine.'
                footnote={require('../images/blog-footnotes/house.jpg')}>
      <SEO title='hostmost'/>

      <BlogText>
        In order to explore less technical roles, I worked as a product/sales intern for a
        <i>very</i> young startup in Nashville called hostmost during summer 2019.
      </BlogText>

      <br/>

      <BlogHeader>The Project</BlogHeader>
      <BlogText>
        If you’ve ever stayed at an Airbnb in a city you’re unfamiliar with you’ve probably thought “what do I
        go do?”
      </BlogText>
      <BlogText>
        Hostmost is trying to answer that question by providing an easy, centralized list of discounts to local tours
        and activities.
      </BlogText>
      <BlogText>
        As a product/sales intern I worked to help the founders find product-market fit and to grow their list of early
        adopters in the Nashville market.
      </BlogText>

      <br/>

      <BlogHeader>Market Research</BlogHeader>
      <BlogText>
        My first week or so at hostmost was focused entirely on gauging the total market potential for the product and
        to identify high priority expansion cities.
      </BlogText>
      <BlogText>
        We needed to show that there were enough cities with a large number of short term rentals and high quality
        tourist activities nearby. To a lesser extent, we were also looking for the prevalence of mid-sized property
        management groups to accelerate sales.
      </BlogText>
      <BlogText>
        I leveraged tools like <InlineLink href='http://insideairbnb.com/'>Inside Airbnb</InlineLink> to paint a picture of the short term rental market in each city.
      </BlogText>

      <ProjectImg src={require('../images/blog-pics/hostmost_heatmap.png')} alt='hostmost' caption='Even though some cities look like hubs, their legislature can tell another story.'/>

      <BlogText>
        To find local tours and activities I spent more time browsing Travelocity than anybody likely will in their
        entire life. This helped me identify popular locally owned tourism activities.
      </BlogText>
      <BlogText>
        Ultimately, this helped me built out a comprehensive list of interesting destinations and property managers
        across major US cities. This proved to be absolutely vital for the customer discovery phase later.
      </BlogText>

      <br/>

      <BlogHeader>Sales</BlogHeader>
      <BlogText>
        <InlineLink href='https://www.linkedin.com/in/teddy-dinker-47579629/'>Teddy Dinker</InlineLink>, hostmost’s founder and
        CEO, had already connected with many local businesses and found early adopters for the platform.
        Growing this list of adopters and determining what sort of activities tourists were most willing to pay for became my next task.
      </BlogText>
      <BlogText>
        Using the same research tactics as in the market research phase, I built out a list of uncontacted local
        Nashville tour and activity companies.
      </BlogText>
      <BlogText>
        The list included pub crawls, bike rentals, and trailer hot tubs.
      </BlogText>

      <ProjectImg src={require('../images/blog-pics/party_tub.jpg')} alt='party tub' caption='Nashville certainly caters towards the tours and activities market.'/>

      <BlogText>
        Hubspot became my source of truth for the next few weeks as I cold called and cold emailed nearly every local
        activity in Nashville. Contacting small businesses was certainly challenging, but after several days I
        began to find a rhythm.
      </BlogText>
      <BlogText>
        Cold calling is a grind, but I’m so fortunate to have that experience under my belt and happy to have
        helped hostmost grow.
      </BlogText>

      <br/>

      <BlogHeader id='customer-discovery'>Customer Discovery</BlogHeader>
      <BlogText>
        After about three weeks of sales I had quite literally exhausted the Nashville tours and activities market.
      </BlogText>
      <BlogText>
        Growing our early adopter user base was obviously important, but we still had much to learn about what features
        property managers prioritized as need-to-have not just nice-to-have.
      </BlogText>
      <BlogText>
        To solve this, I continued my cold-calling spree – this time with property managers and hotels. I called the top
        20 property management groups in the largest 15 markets in America and compiled every insight possible.
      </BlogText>
      <BlogText>
        Many property managers were too busy or not particularly interested in giving real feedback, but the few who did
        helped us push the direction of our product towards seamless integration.
      </BlogText>

      <br/>

      <BlogHeader>Product</BlogHeader>
      <BlogText>
        Finally, after compiling insights and growing our market share, I was able to spend more time working with the
        co-founders to address product concerns.
      </BlogText>
      <BlogText>
        My most interesting and challenging task was facilitating communication between the CEO and CTO. I’ve always
        been interested in being able to communicate from both a technical and business perspective.
      </BlogText>
      <BlogText>
        I was given the chance to help tackle the challenge of optimizing the backend database to allow for additional
        product offerings.
      </BlogText>
      <BlogText>
        It’s challenging to find the balance between developing a product quickly and preventing technical debt. This
        was the crux of our issue and while my internship ended before the solution was built, we did end up finding a
        solution which simplified backend API calls and sped up the development process from several months to implementable
        within only a few weeks.
      </BlogText>
    </BlogLayout>
  )
}

export default Hostmost