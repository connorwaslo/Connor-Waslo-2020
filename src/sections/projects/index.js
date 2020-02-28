import React from 'react';
import LayoutTextCenter from "../../components/layouts/layout-text-center"
import SectionTitle from "../../components/section-title"
import Project from '../../components/project'

// Todo: Make TileBackgrounds the same height
// Todo: Address warning about emojis being wrapped in a span w/ role "img" and aria-label
function Projects() {
  return (
    <div>
      <LayoutTextCenter style={{width: '80%'}}>
        <SectionTitle title="What I'm Working On"/>

        <h1 className='text-center my-5'>Current Projects</h1>
        <div className='row row-eq-height'>
          <Project colSize={4}
                   img={require("../../images/projects/optimize.svg")}
                   title='Automation & Optimization'
                   link='/automation' disable={true}>
            <h5>I'm fascinated by optimization problems. Automation is a tool that
            can be used to save everybody time and money.</h5>
            <h5>Currently, I'm doing research into automating fraud analysis. More to come soon hopefully. 🤞</h5>
          </Project>
          <Project colSize={4}
                   img={require("../../images/projects/uvo.png")}
                   title='Reduce Recidivism'
                   link='projects/unheard-voices'>
            <h5>I'm the Project Manager on a team of five developing a mobile app for a Nashville non-profit
            called Unheard Voices Outreach.</h5>
            <h5>The goal is to reduce recidivism in Nashville (and later across the nation) by providing individuals
            with resources and mentors.</h5>
          </Project>
          <Project colSize={4}
                   img={require("../../images/projects/nba.png")}
                   title='Winnr'
                   link='/projects/winnr'>
            <h5>My friend <a href='https://www.linkedin.com/in/nicholas-teddy-wagner-354047181/' target='_blank'>Teddy Wagner</a> and I
              started this project last year - using Twitter sentiment to predict NFL games.</h5>
            <h5>It's since evolved and now is more of a pet project learning data science by creating models to use for
              sports betting.</h5>
          </Project>
        </div>

        <hr className='my-5'/>

        <h1 className='text-center my-5'>Past Projects</h1>
        <div className='row row-eq-height my-5'>
          <Project colSize={4}
                   img={require("../../images/projects/v.png")}
                   title='Better Course Registration'
                   link='/projects/course-registration'>
            <h5>My friend, Henry Hunter, and I wrote a white paper detailing how course registration
            at Vanderbilt could be improved.</h5>
            <h5>Our white paper convinced administration to begin pursuing new technology to
            improve course registration.</h5>
          </Project>
          <Project colSize={4} img={require("../../images/projects/ibj.png")} title='Justice Hub' link='/projects/justice-hub'>
            <h5>I worked with a team of four to develop a mobile app connecting people in developing
            countries with pro bono legal representation.</h5>
            <h5>Our MVP helped International Bridges to Justice raise $10k in grant funding.</h5>
          </Project>
          <Project colSize={4} img={require("../../images/projects/ignytion.png")} title='Ignytion' link='/projects/ignytion'>
            <h5>I started a company that does web automation and data scraping for startups, saving
              them 100s of hours and >$10k dollars.</h5>
          </Project>
        </div>
        <div className='row row-eq-height my-5'>
          <Project colSize={4} img={require("../../images/projects/eye.png")} title='Hands-free Art' link='/projects/makeharvard'>
            <h5>MakeHarvard 2019</h5>
            <h5>Worked in a team of four to develop a robotic arm controlled by pupil motion that
            allowed the user to draw hands-free.</h5>
          </Project>
          <Project colSize={4} img={require("../../images/projects/gocode.png")} title='GoCode' link='/projects/gocode'>
            <h5>Created a mobile app to teach kids web development through project-based learning.</h5>
            <h5>I programmed the app from scratch and won two startup pitch competitions.</h5>
          </Project>
          <Project colSize={4} img={require("../../images/projects/treehacks.svg")} title='Nutrition App' link='/projects/treehacks'>
            <h5>TreeHacks 2019</h5>
            <h5>Developed a mobile app that allows the user to take a photo of their food and track their
            nutritional intake.</h5>
          </Project>
        </div>
      </LayoutTextCenter>
    </div>
  )
}

export default Projects;