import React from 'react'
import SEO from "../components/seo"
import { BlogHeader, BlogText, InlineLink, InlineRef, ProjectRef } from "../components/typography"
import BlogLayout from "../components/layouts/blogLayout"
import ProjectImg from "../components/projectImg"

function Blockparty() {
  return (
    <BlogLayout pic={require('../images/projects/bpg.png')}
                title='Blockparty Group'
                timeline='April - December 2020'
                team='8 person startup'
                description='Technical product manager developing an app to reduce the risk of COVID for bar patrons.'
                anchor='blockparty'
                footnote={require('../images/blog-footnotes/shield.svg')}>
      <SEO title='Blockparty'/>

      <BlogHeader>Summary</BlogHeader>
      <BlogText>
        As of writing this, the United States has reported 23 million coronavirus cases and over 385,000 people have
        died. Regardless, Americans continue to go out to bars during the COVID-19 global pandemic. While it’s
        impossible to eliminate the risk of coronavirus in bars, my team worked to reduce the risk of super-spreader
        events as much as possible using a routing algorithm to direct foot traffic.
      </BlogText>
      <BlogText>
        While I had no intention of going to bars, I approached this as an opportunity to add a layer of risk-mitigation
        to an inherently risky activity.
      </BlogText>

      <br/>

      <BlogHeader>The Problem</BlogHeader>
      <BlogText>
        As restaurants and bars began to open back up in July and August, it became apparent that people would go out no
        matter the risk. Blockparty Group, an event marketing company that ran bar crawls prior to COVID-19, then began
        to ask how could people go to events, have a great time, and minimize their risk without even realizing it?
      </BlogText>
      <BlogText>
        When I joined the team my job was to solve the following problem:
      </BlogText>
      <BlogText>
        How can we simultaneously help struggling bars and restaurants while minimizing the risk of coronavirus for
        people who want to go out?
      </BlogText>

      <br/>

      <BlogHeader>Ideation</BlogHeader>
      <BlogText>
        Who is looking to go out to bars during a pandemic in the first place? Our typical user is broadly:
      </BlogText>
      <BlogText>
        <ul>
          <li>21-30 years old</li>
          <li>Heavy social media user</li>
          <li>Lives in a young neighborhood in a medium-sized city</li>
          <li>Not concerned about coronavirus</li>
        </ul>
      </BlogText>
      <BlogText>
        In addition to appealing to our typical user, our solution needed to fit a few additional parameters:
      </BlogText>
      <BlogText>
        <ul>
          <li>Absolutely <b>MUST</b> help venues follow local COVID guidelines</li>
          <li>Add value to all partnered venues via guaranteed guests</li>
          <li>Reduce risk without attendees perceiving a sacrifice in experience quality</li>
        </ul>
      </BlogText>
      <BlogText>
        Taking Blockparty’s brand identity and value proposition into account, we began to discuss routing algorithms –
        a way to programmatically route attendees between different bars. This way we could make sure attendees visit
        each partnered venue while preventing any one venue from exceeding its maximum capacity.
      </BlogText>
      <BlogText>
        This sounds good on paper, but in practice no bar is safe from COVID. Bars are crowded, closed spaces where
        people take off their masks to drink and certainly break the 6-foot minimum social distance.
      </BlogText>
      <BlogText>
        Unfortunately, there was nothing that we could do to address that problem.
      </BlogText>
      <BlogText>
        By assuming that we could not address this factor, our priority became reducing the risk of one infected person
        creating a super-spreader event.
      </BlogText>

      <br/>

      <BlogHeader>The Solution</BlogHeader>
      <BlogText>
        A super-spreader event (<InlineLink href='https://www.latimes.com/world-nation/story/2020-05-12/did-club-goers-put-an-entire-city-at-risk-for-a-night-of-dancing-outbreak-triggers-blame-anger'>like this</InlineLink>) occurs when just one person is able to come into contact with many other
        attendees. In a traditional bar or bar-crawl experience, there’s a chance that one infected person may come into
        contact with <i>every other</i> attendee.
      </BlogText>

      <ProjectImg alt='normal event' src={require('../images/blog-pics/normal_night_out2.png')} style={{ maxWidth: '90%' }}/>

      <BlogText>
        In the event that people will be mingling in enclosed spaces like bars, our best option is to limit the amount
        of other unique guests that any one person can come into contact with.
      </BlogText>
      <BlogText>
        In order to accomplish this, I developed a routing algorithm based on batching. Users join groups and each group
        has a unique route. This allows us to not only control the number of people in each group and ensure bars don’t
        overshoot their maximum capacity, but it also ensures that groups cannot mingle.
      </BlogText>

      <ProjectImg alt='blockparty event' src={require('../images/blog-pics/blockparty_event.png')} style={{ maxWidth: '90%' }}/>

      <BlogText>
        This routing system provides some risk-mitigation for guests, helps bars get business, and fits well with the
        existing Blockparty model.
      </BlogText>
      <BlogText>
        Our CEO and I worked together to create the product design using Figma.
      </BlogText>

      <ProjectImg alt='blockparty designs' src={require('../images/blog-pics/blockparty_designs.png')} caption='These are the screens to join a group, see a route, and show your ticket.' />

      <br/>

      <BlogHeader>Development</BlogHeader>
      <BlogText>
        Our dev team (just me and one other full stack developer) made it a reality using React-Native,
        TypeScript, GraphQL, and PostgreSQL.
      </BlogText>
      <BlogText>
        The mobile app with a routing system and backend API were not our only technical challenges. Users needed a way to sign up for an
        event and become users on the app.
      </BlogText>
      <BlogText>
        In the past, Blockparty attendees bought tickets via Eventbrite and showed them at the door. Now, attendees would
        need to buy tickets, seamlessly login on the app, and show their virtual-ticket at the venue.
      </BlogText>
      <BlogText>
        Ticket purchases must then be quickly created in our database and tied to a user so that they can go straight
        from buying a ticket to using the app.
      </BlogText>
      <BlogText>
        Initially, we set up a simple Zapier connection between our purchase form and our database. Once a user
        purchased a ticket, their information would be posted accordingly.
      </BlogText>
      <BlogText>
        Unfortunately, Zapier has a polling interval of several minutes if you're not paying a huge amount monthly. Our support
        line began filling up with users upset that the app didn’t recognize them immediately.
      </BlogText>
      <BlogText>
        To make matters more complicated, data from previous Blockparty events indicated that we would receive a large
        influx of concurrent ticket purchases close to the event date. We needed to make sure that ticket purchases were
        posted and that Zapier didn’t break as multiple requests came in at the same time.
      </BlogText>
      <BlogText>
        To solve this, we created a custom solution using AWS. Our team worked with Blockparty advisors to architect a
        system using AWS Simple Queue Service and Lambda functions to solve our problem and speed up what was formerly a minutes-long
        process to on average 5 seconds.
      </BlogText>

      <ProjectImg alt='aws architecture' src={require('../images/blog-pics/aws_architecture.png')} style={{ maxWidth: '90%' }}/>

      <BlogText>
        I developed our webhook and lambda functions, connected it to our purchase form, and we immediately stopped
        receiving any complaints about our sign up not working.
      </BlogText>

      <br/>

      <BlogHeader>Reflection</BlogHeader>
      <BlogText>
        Our app debuted Halloweekend 2020. 3,100 users in 12 cities across 3 days used our app during their night
        out.
      </BlogText>
      <BlogText>
        This project was the first time that I led development of a product with such a large initial release. Beta
        testing is one thing, but public release to thousands of users is another entirely.
      </BlogText>
      <BlogText>
        While leading development, I learned the hard way that thorough planning makes all the difference when it comes
        to development time but planning for flexibility is just as important when working on a fast-paced team.
      </BlogText>
      <BlogText>
        Drafting our development sprints and prioritizing feature requests taught me how to properly schedule tasks, but
        I’m still understanding how to strike the balance between a guaranteed and aggressive timeline.
      </BlogText>
      <BlogText>
        Handling less-than-cheery customer support tickets has made me even more polite to customer service
        representatives. Seriously, responding to complaints during the event was tough and I have nothing but respect
        for support representatives. It’s a challenging and vital job.
      </BlogText>
      <BlogText>
        I was also able to hone my full stack technical skills while working at Blockparty and even learned how to properly build products for scale.
      </BlogText>
      <BlogText>
        Overall, this was an incredible chance to get hands-on experience solving a problem and rapidly deploying a
        solution. I’m looking forward to using the lessons I learned at Blockparty to become a better product manager,
        engineer, and leader in the future.
      </BlogText>
    </BlogLayout>
  )
}

export default Blockparty