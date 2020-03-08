import React from 'react';
import LayoutTextCenter from "../../components/layouts/layout-text-center"
import SectionTitle from "../../components/section-title"
import styles from './contact.module.css';

const Image = ({link, src, alt}) => (
  <a href={link} target='_blank'>
    <img src={src} alt={alt} className={styles.contactImage}/>
  </a>
)

function Contact() {
  return (
    <LayoutTextCenter>
      <SectionTitle title="Let's Link Up"/>
      <h1 className={styles.email}>connor.r.waslo@vanderbilt.edu</h1>

      <div className='my-4'>
        <Image link='https://www.instagram.com/connor_waslo/'
               src={require('../../images/misc/instagram.png')}
               alt='instagram'/>
        <Image link='https://www.linkedin.com/in/connor-waslo/'
               src={require('../../images/misc/linkedin.png')}
               alt='linkedin'/>
        <Image link='https://www.github.com/connorwaslo'
               src={require('../../images/misc/github.png')}
               alt='github'/>
      </div>
    </LayoutTextCenter>
  )
}

export default Contact;