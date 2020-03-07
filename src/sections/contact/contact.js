import React from 'react';
import LayoutTextCenter from "../../components/layouts/layout-text-center"
import SectionTitle from "../../components/section-title"
import styles from './contact.module.css';

function Contact() {

  // Todo: Change second linkedin photo to be github
  return (
    <LayoutTextCenter>
      <SectionTitle title="Let's Link Up"/>
      <h1 className={styles.email}>connor.r.waslo@vanderbilt.edu</h1>

      <div className='my-4'>
        <a href="https://www.instagram.com/connor_waslo/" target="_blank">
          <img src={require('../../images/misc/instagram.png')} alt="instagram"
               className={styles.contactImage}/>
        </a>
        <a href="https://www.linkedin.com/in/connor-waslo/" target="_blank">
          <img src={require('../../images/misc/linkedin.png')} alt="linkedin"
               className={styles.contactImage}/>
        </a>
        <a href="https://www.github.com/connorwaslo" target="_blank">
          <img src={require('../../images/misc/linkedin.png')} alt="github"
               className={styles.contactImage}/>
        </a>
      </div>
    </LayoutTextCenter>
  )
}

export default Contact;