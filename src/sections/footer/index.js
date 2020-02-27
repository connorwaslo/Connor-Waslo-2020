import React from 'react';

// Todo: Change the scaling on gatsby depending on mobile or desktop
function Footer() {
  return (
    <div className='row' style={{overflowX: 'hidden'}}>
      <div className='col-4'>
        <h3 className='ml-3'>Last Updated: Feb 27, 2020</h3>
      </div>
      <div className='col-4'>
      </div>
      <div className='col-4'>
        <img className='mr-3' style={{maxWidth: '15%', float: 'right'}}
             src={require('../../images/misc/gatsby.png')} alt='gatsby'/>
      </div>
    </div>
  )
}

export default Footer;