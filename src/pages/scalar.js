import React from 'react'
import BlogLayout from "../components/layouts/blogLayout"
import SEO from "../components/seo"
import { BlogHeader, BlogSubtitle, BlogText, InlineLink } from "../components/typography"
import ProjectImg from "../components/projectImg"

function Scalar() {
  return (
    <BlogLayout pic={require('../images/projects/scalar.png')}
                title='Scalar Development Agency'
                timeline='March 2020 - Present'
                team='Zach Friedman, Henry Green, Mateusz Odziomek, and me'
                description='Helping companies refine and develop web and mobile applications. We utilize the
                            design-thinking process to craft products that deliver results.'
                attachments={
                  <BlogText>
                    <InlineLink href="https://scalardev.tech">
                      The Scalar Website
                    </InlineLink>
                  </BlogText>
                }
                footnote={require('../images/projects/scalar.png')}>
      <SEO title='Scalar'/>

      <BlogText>
        Until Spring 2020, I had spent most of my time focusing on prototypical startup ideas. High-risk where the
        payoff is delayed until acquisition/IPO, fund-raising is required, and if everything works then you’re booked
        for 7-10 years.
      </BlogText>
      <BlogText>
        After realizing that’s not what I want to do right now, I started Scalar: an agency that provided me the
        opportunity to use what I had learned while immersed in the startup space and apply it to as many other
        companies as possible.
      </BlogText>
      <BlogText>
        I recruited a few friends, showed them the ropes, and we got right to it.
      </BlogText>
      <BlogText>
        I’ll start with a little about how we’ve done before breaking down how we started Scalar and what our process
        looks like.
      </BlogText>

      <BlogHeader>How's Scalar Growing?</BlogHeader>
      <BlogText>
        I started working on Scalar in March, ideating and thinking through how to kick everything off. Shortly after, I
        asked my close friends if they wanted to join me – no web development skills required.
      </BlogText>
      <BlogText>
        We really decided to kick-off our sales effort at the end of May, right before we all moved into a house
        together for June. During June, we were able to grow from nothing to managing multiple clients and developing a
        variety of mobile apps, web apps, and Wordpress websites.
      </BlogText>
      <BlogText>
        Since then, Scalar has been snowballing – allowing us to figure out where we want to take it and how we want to
        help businesses grow their online presence or advance towards their business goals.
      </BlogText>
      <BlogText>
        Keep reading to learn more about our process and how we see the software development agency space.
      </BlogText>

      <BlogHeader>Business Planning</BlogHeader>
      <BlogText>How do you even start an agency?</BlogText>
      <BlogText>There are a few segments of clients that we considered when preparing our business plan.</BlogText>
      <ProjectImg src={require('../images/projects/project_scale.png')} alt='project scale' caption='Each bracket has its own unique challenges and advantages.'/>

      <BlogText>
        We started at the base layer, building landing pages, basic websites, and general “about” pages for friends,
        family, and local businesses. This is a great place to build a portfolio, develop some connections, and
        get a feel for the development and sales process.
      </BlogText>
      <BlogText>
        The next step includes more complex websites and Wordpress sites with some custom functionality. This might look
        like custom blogs, podcaster websites, or landing pages for bigger (but still relatively small) brands. These
        are larger budget, one-off projects.
      </BlogText>
      <BlogText>
        The next type of project is where agencies really begin to differentiate themselves. This includes high quality
        Wordpress sites with custom branding and heavy design elements that really make your business pop. There are
        also some smaller web and mobile apps that aren’t heavy on data in this bracket. Jobs here may include
        developing minimum-viable-products for prospective startup founders.
      </BlogText>
      <BlogText>
        At the very top are intensive fullstack applications. In our case, these projects are built with react and
        react-native and include significant workload for both the frontend and backend of the app. This type of project
        usually includes recurring development with a long timeline. Clients in this bracket may include early-stage
        funded startups, existing small businesses in revenue, or entrepreneurs looking to start their next venture.
      </BlogText>
      <BlogText>
        Our goal is to learn as much as possible in the first three levels so that by the time we are working
        with funded startups or clients with existing large-scale applications, our process is as smooth as
        possible.
      </BlogText>
      <BlogText>So far we're off to a great start.</BlogText>

      <BlogHeader>Our Process</BlogHeader>
      <BlogSubtitle>Discovery</BlogSubtitle>
      <BlogText>
        We start every project off by considering two perspectives:
      </BlogText>
      <BlogText>1) Business goals</BlogText>
      <BlogText>2) The user</BlogText>
      <BlogText>
        We arrange a call with our clients to discuss what their short-term and long-term business goals are. This
        includes their vision for this product and how it will help them achieve these goals, who their intended user
        is, and the exact features of the product.
      </BlogText>
      <BlogText>
        We break these features down into user stories to help us assess the features from the perspective of the user
        and to make sure tasks are as specific as possible for the design and development phases.
      </BlogText>

      <BlogSubtitle>Design</BlogSubtitle>
      <BlogText>
        Before our team writes a single line of code, we use the business goals and user stories we established in the
        discovery phase to mockup the application.
      </BlogText>
      <BlogText>
        We start with wireframes before developing high fidelity mockups. Finally, we'll link the mockups together
        to create an interactive prototype.
      </BlogText>
      <ProjectImg src={require('../images/projects/design_process.png')} alt='designs' caption='The transition from wireframes to mockups is drastic.'/>
      <BlogText>
        By the end of this step we not only have the full set of user stories, but we have carefully crafted designs
        which can be used by our development team. We adhere closely to (link)[material design principles] and modern UX
        practices to ensure that any product we develop is as usable and clean as possible.
      </BlogText>
      <BlogText>We're not interested in running a mockup factory. We design projects to last.</BlogText>

      <BlogSubtitle>Development</BlogSubtitle>
      <BlogText>
        I’ve spent months interviewing and vetting overseas development teams. I’ve jumped on video calls, reviewed
        code, and assigned projects all to make sure that our team’s workflow aligns with our developers.
      </BlogText>
      <BlogText>
        Our teams have years of experience and always deliver high quality results. I spend time with the development
        team to review user stories, manage development, and review milestones throughout the development process.
      </BlogText>
      <BlogText>
        At Scalar, we decided that the project manager should not only be able to work with the client, but should be
        able to manage the product development and contribute at a technical level if necessary.
      </BlogText>

      <BlogSubtitle>Deployment</BlogSubtitle>
      <BlogText>
        Finally, the fun part for our clients!
      </BlogText>
      <BlogText>
        We help our less technical clients deploy their app or website and stay as involved as our client wishes.
        Forming close relationships with our clients is something that we value, so managing backend infrastructure and
        staying on call to ensure our clients’ apps are live at all times is something that we’re more than happy to do.
      </BlogText>

      <BlogHeader>What's Next?</BlogHeader>
      <BlogText>
        Running Scalar has taught me more in a couple months than nearly any other project that I’ve worked on. It’s the
        culmination of countless hours spent around startups and other entrepreneurs.
      </BlogText>
      <BlogText>
        As I learn more and more about product management, communication, sales, and marketing, my team and I plan on
        growing Scalar to work on even larger projects.
      </BlogText>
      <BlogText>
        For only a few months of work, I’m excited at Scalar’s potential and have loved the process.
      </BlogText>
      <BlogText>More updates to come.</BlogText>
    </BlogLayout>
  )
}

export default Scalar