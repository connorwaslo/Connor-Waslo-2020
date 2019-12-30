import React from 'react';
import styles from './work-experience.module.css';

function WorkExperience({children, img, alt, company, title, date}) {
  return (
    <div className='row py-3'>
      <div className="col-lg-4 align-middle pr-4">
        <div className="text-center">
          <img src={img} alt={alt} className={`d-lg-none ${styles.workImage}`}/>
        </div>
        <img src={img} alt={alt} className={`d-none d-lg-block ${styles.workImage} float-sm-none float-lg-right`}/>
      </div>
      <div className='col-lg-8'>
        <div className='col-lg-12 d-lg-none'>
          <h1 className='text-center'>{company}</h1>
          <h4 className='text-center'>{title}</h4>
          <h4 className='text-center'>{date}</h4>
          {children}
        </div>
        <div className='col-lg-12 d-none d-lg-block'>
          <h1>{company}</h1>
          <h4>{title}, <i>{date}</i></h4>
          <div className='d-none d-lg-block'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;