import React from 'react';
import SectionTitle from "../components/section-title"
import WorkExperience from "../components/work-experience"

function Work({style}) {
  return (
    <div style={style}>
      <div className='container pt-1 pb-5'>
        <SectionTitle className='text-center' title='Work Experience'/>
        <WorkExperience img={require('../images/work/hostmost.png')} alt='hostmost'
                        title='Product Management & Sales Intern' company='HostMost'
                        date='June - August 2019'>
          <p>I spent last summer having a lot fun working fast and learning as much
            as possible at an early-stage startup in the hospitality-technology space</p>
          <p>Worked as the middle-man between engineering and sales, helping both sides
            understand each others’ needs and capabilities to ultimately find <b>product market fit</b></p>
          <p>Conducted inside and outside sales to tour and activity companies
            and property managers</p>
          <p>Cold calls to product managers across the country to better
            understand the product’s target market</p>
        </WorkExperience>
        <WorkExperience img={require('../images/projects/ignytion.png')} alt='ignytion'
                        title='Founder & Lead Engineer' company='Ignytion'
                        date='July - October 2018'>
          <p>I founded a company to help startups save time and money by automating web
            processes and data collection</p>
          <p>Engineered custom software solutions for startups in multiple verticals</p>
          <p>Allowed founders to spend their time adding value to their brand
            rather than performing repetitive tasks</p>
        </WorkExperience>
        <WorkExperience img={require('../images/work/zyratalk.png')} alt='zyratalk'
                        title='Software Engineering Intern' company='ZyraTalk'
                        date='January - August 2018'>
          <p>Developed a program to automatically generate leads for the sales team</p>
          <p>Built a white-label mobile application for contractors to increase customer retention</p>
        </WorkExperience>
      </div>
    </div>
  )
}

export default Work;